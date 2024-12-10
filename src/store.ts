import { create } from "zustand";
import { persist } from "zustand/middleware";
import { versions } from "./data/database"; // Dados estáticos de todas as versões

interface Category {
  name: string;
  id: string;
  isChecked?: boolean;
  occupation?: string;
  color?: string;
  originalIndex?: number;
}

interface Cards {
  suspects: Category[];
  weapons: Category[];
  rooms: Category[];
}

type Version = {
  id: string;
  name: string;
  description: string;
  examples: string;
  cards: Cards;
};

interface Store {
  data: {
    [versionId: string]: Version;
  };
  activeVersionId: string | null; // ID da versão ativa (ou null se nenhuma estiver selecionada)
  setActiveVersion: (versionId: string | null) => void; // Alterna a versão ativa
  toggleCard: (
    category: "suspects" | "weapons" | "rooms",
    cardId: string
  ) => void; // Alterna o estado isChecked de uma carta
  resetActiveVersion: () => void; // Reseta o progresso da versão ativa
  sortCardsBySeenStatus: () => void;
  setOriginalIndexes: () => void;
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Inicializa o estado com os dados de todas as versões, adicionando isChecked às cartas
      data: Object.keys(versions).reduce(
        (acc, key) => {
          const addIsChecked = (items: Category[]) =>
            items.map((item) => ({ ...item, isChecked: false }));

          const version = versions[key];
          acc[key] = {
            id: version.metainfo.id,
            name: version.metainfo.name,
            description: version.metainfo.description,
            examples: version.metainfo.examples,
            cards: {
              suspects: addIsChecked(version.suspects),
              weapons: addIsChecked(version.weapons),
              rooms: addIsChecked(version.rooms),
            },
          };
          return acc;
        },
        {} as { [versionId: string]: Version }
      ),

      activeVersionId: null, // Nenhuma versão ativa no início

      // Define a versão ativa
      setActiveVersion: (versionId: string | null) => {
        const { setOriginalIndexes } = get();

        set({ activeVersionId: versionId });
        setOriginalIndexes();
      },

      // Alterna o estado "isChecked" de uma carta
      toggleCard: (category, cardId) => {
        const { activeVersionId, data, sortCardsBySeenStatus } = get();
        if (!activeVersionId) return;

        const version = data[activeVersionId];
        const updatedCards = version.cards[category].map((card) =>
          card.id === cardId ? { ...card, isChecked: !card.isChecked } : card
        );

        const updatedVersion = {
          ...version,
          cards: {
            ...version.cards,
            [category]: updatedCards,
          },
        };

        set({
          data: {
            ...data,
            [activeVersionId]: updatedVersion,
          },
        });

        sortCardsBySeenStatus();
      },

      // Reseta o progresso da versão ativa
      resetActiveVersion: () => {
        const { activeVersionId, data, sortCardsBySeenStatus } = get();
        if (!activeVersionId) return;

        const version = data[activeVersionId];
        const resetCards = (items: Category[]) =>
          items.map((item) => ({ ...item, isChecked: false }));

        const resetVersion = {
          ...version,
          cards: {
            suspects: resetCards(version.cards.suspects),
            weapons: resetCards(version.cards.weapons),
            rooms: resetCards(version.cards.rooms),
          },
        };

        set({
          data: {
            ...data,
            [activeVersionId]: resetVersion,
          },
        });

        sortCardsBySeenStatus();
      },
      sortCardsBySeenStatus: () => {
        const { activeVersionId, data } = get();
        if (!activeVersionId) return;

        const version = data[activeVersionId];

        const sortCards = (items: Category[]) => {
          return [...items].sort((a, b) => {
            if (a.isChecked === b.isChecked) {
              return (a.originalIndex ?? 0) - (b.originalIndex ?? 0);
            }
            return Number(a.isChecked) - Number(b.isChecked);
          });
        };

        const sortedVersion = {
          ...version,
          cards: {
            suspects: sortCards(version.cards.suspects),
            weapons: sortCards(version.cards.weapons),
            rooms: sortCards(version.cards.rooms),
          },
        };
        set({
          data: {
            ...data,
            [activeVersionId]: sortedVersion,
          },
        });
      },
      setOriginalIndexes: () => {
        const { data } = get();

        const setIndexes = (items: Category[]) => {
          return items.map((item, index) => ({
            ...item,
            originalIndex: index,
          }));
        };

        const initializedData = Object.keys(data).reduce(
          (acc: { [versionId: string]: Version }, versionId) => {
            const version = data[versionId];
            acc[versionId] = {
              ...version,
              cards: {
                suspects: setIndexes(version.cards.suspects),
                weapons: setIndexes(version.cards.weapons),
                rooms: setIndexes(version.cards.rooms),
              },
            };
            return acc;
          },
          {}
        );

        set({ data: initializedData });
      },
    }),
    {
      name: "clue-notepaper-storage", // Chave única para persistir os dados
    }
  )
);

export default useStore;
