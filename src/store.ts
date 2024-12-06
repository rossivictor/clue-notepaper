import { create } from "zustand";
import { persist } from "zustand/middleware";
import { versions } from "./data/database.ts";

interface Category {
  name: string;
  id: string;
  isChecked?: boolean;
  occupation?: string;
  color?: string;
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
  version: Version | null | undefined;
  setVersion: (activeVersion: string) => void;
  toggleCard: (category: "suspects" | "weapons" | "rooms", id: string) => void;
}

const addIsChecked = (items: Category[]) =>
  items.map((item) => ({
    ...item,
    isChecked: item.isChecked ?? false,
  }));

const loadVersion = (activeVersion: string) => {
  const localStorageKey = `clue-${activeVersion}`;
  const storedData = localStorage.getItem(localStorageKey);

  if (storedData) {
    const parsedData = JSON.parse(storedData);

    return {
      ...parsedData,
      cards: {
        suspects: addIsChecked(parsedData.cards.suspects),
        weapons: addIsChecked(parsedData.cards.weapons),
        rooms: addIsChecked(parsedData.cards.rooms),
      },
    };
  } else {
    const data = versions[activeVersion];
    const addIsChecked = (items: Category[]) =>
      items.map((item) => ({ ...item, isChecked: false }));

    return {
      ...data,
      cards: {
        suspects: addIsChecked(data.suspects),
        weapons: addIsChecked(data.weapons),
        rooms: addIsChecked(data.rooms),
      },
    };
  }
};

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      version: null,
      setVersion: (activeVersion: string) => {
        const processedVersion = loadVersion(activeVersion);

        set({
          version: processedVersion,
        });

        const localStorageKey = `clue-${activeVersion}`;
        localStorage.setItem(localStorageKey, JSON.stringify(processedVersion));
      },
      toggleCard: (category, id) => {
        const version = get().version;
        if (!version) return;

        const updatedCards = version.cards[category].map((card) =>
          card.id === id ? { ...card, isChecked: !card.isChecked } : card
        );

        const updatedVersion = {
          ...version,
          cards: {
            ...version.cards,
            [category]: updatedCards,
          },
        };
        set({
          version: updatedVersion,
        });
        const localStorageKey = `clue-notepaper-${version.id}`;
        localStorage.setItem(localStorageKey, JSON.stringify(get().version));
      },
    }),
    {
      name: "clue-notepaper-default",
    }
  )
);

export default useStore;
