type Version = {
  metainfo: {
    name: string;
    id: string;
    description: string;
    examples: string;
  };
  suspects: {
    name: string;
    id: string;
    color?: string;
    occupation?: string;
  }[];
  weapons: {
    name: string;
    id: string;
  }[];
  rooms: {
    name: string;
    id: string;
  }[];
};

export const versions: Record<string, Version> = {
  detetive: {
    metainfo: {
      name: "Detetive (clássico)",
      id: "detetive",
      description: "Versão tradicional do jogo, lançada no 🇧🇷",
      examples: "Coronel Mostarda, chave inglesa, etc",
    },
    suspects: [
      {
        name: "Cel. Mostarda",
        id: "cel-mostarda",
        color: "yellow",
      },
      {
        name: "Prof. Black",
        id: "prof-black",
        color: "black",
      },
      {
        name: "Dona Violeta",
        id: "dona-violeta",
        color: "light blue",
      },
      {
        name: "Sr. Marinho",
        id: "sr-marinho",
        color: "dark blue",
      },
      {
        name: "Srta. Rosa",
        id: "srta-rosa",
        color: "red",
      },
      {
        name: "Dona Branca",
        id: "dona-branca",
        color: "white",
      },
    ],
    weapons: [
      {
        name: "Faca",
        id: "faca",
      },
      {
        name: "Castiçal",
        id: "castical",
      },
      {
        name: "Revólver",
        id: "revolver",
      },
      {
        name: "Corda",
        id: "corda",
      },
      {
        name: "Cano",
        id: "cano",
      },
      {
        name: "Chave inglesa",
        id: "chave-inglesa",
      },
    ],
    rooms: [
      {
        name: "Hall",
        id: "hall",
      },
      {
        name: "Sala de estar",
        id: "sala-de-estar",
      },
      {
        name: "Cozinha",
        id: "cozinha",
      },
      {
        name: "Sala de jantar",
        id: "sala-de-jantar",
      },
      {
        name: "Salão de festas",
        id: "salao-de-festas",
      },
      {
        name: "Sala de música",
        id: "sala-de-musica",
      },
      {
        name: "Salão de jogos",
        id: "salao-de-jogos",
      },
      {
        name: "Biblioteca",
        id: "biblioteca",
      },
      {
        name: "Escritório",
        id: "escritorio",
      },
    ],
  },
  umCrimeDesafiador: {
    metainfo: {
      name: "Detetive: Um Crime Desafiador",
      id: "umCrimeDesafiador",
      description: "Versão mais moderna do jogo, lançada no 🇧🇷",
      examples: "Tony Gourmet, hotel, veneno, etc",
    },
    suspects: [
      {
        name: "Cel. Mostarda",
        id: "cel-mostarda",
        occupation: "sargento",
        color: "yellow",
      },
      {
        name: "Dona Branca",
        id: "dona-branca",
        occupation: "florista",
        color: "white",
      },
      {
        name: "Tony Gourmet",
        id: "tony-gourmet",
        occupation: "chef de cozinha",
        color: "brown",
      },
      {
        name: "James",
        id: "james",
        occupation: "mordomo",
        color: "blue",
      },
      {
        name: "Dona Violeta",
        id: "dona-violeta",
        occupation: "médica",
        color: "pink",
      },
      {
        name: "Srta. Rosa",
        id: "srta-rosa",
        occupation: "dançarina",
        color: "red",
      },
      {
        name: "Sérgio Soturno",
        id: "sergio-soturno",
        occupation: "coveiro",
        color: "black",
      },
      {
        name: "Sr. Marinho",
        id: "sr-marinho",
        occupation: "advogado",
        color: "green",
      },
    ],
    weapons: [
      {
        name: "Espingarda",
        id: "espingarda",
      },
      {
        name: "Pá",
        id: "pa",
      },
      {
        name: "Pé de cabra",
        id: "pe-de-cabra",
      },
      {
        name: "Tesoura",
        id: "tesoura",
      },
      {
        name: "Arma química",
        id: "arma-quimica",
      },
      {
        name: "Veneno",
        id: "veneno",
      },
      {
        name: "Soco inglês",
        id: "soco-ingles",
      },
      {
        name: "Faca",
        id: "faca",
      },
    ],
    rooms: [
      {
        name: "Prefeitura",
        id: "prefeitura",
      },
      {
        name: "Restaurante",
        id: "restaurante",
      },
      {
        name: "Floricultura",
        id: "floricultura",
      },
      {
        name: "Boate",
        id: "boate",
      },
      {
        name: "Hospital",
        id: "hospital",
      },
      {
        name: "Mansão",
        id: "mansao",
      },
      {
        name: "Cemitério",
        id: "cemiterio",
      },
      {
        name: "Praça",
        id: "praca",
      },
      {
        name: "Hotel",
        id: "hotel",
      },
      {
        name: "Banco",
        id: "banco",
      },
      {
        name: "Estação de trem",
        id: "estacao-de-trem",
      },
    ],
  },
  procurandoEmHogwarts: {
    metainfo: {
      name: "Detetive: Procurando em Hogwarts",
      id: "procurandoEmHogwarts",
      description: "Versão temática do universo de Harry Potter",
      examples: "Draco Malfoy, expelliarmus, sala de poções etc",
    },
    suspects: [
      {
        name: "Crabbe & Goyle",
        id: "crabbe-goyle",
      },
      {
        name: "Lucius Malfoy",
        id: "lucius-malfoy",
      },
      {
        name: "Bellatrix Lestrange",
        id: "bellatrix-lestrange",
      },
      {
        name: "Pedro Pettigrew",
        id: "pedro-pettigrew",
      },
      {
        name: "Draco Malfoy",
        id: "draco-malfoy",
      },
      {
        name: "Dolores Umbridge",
        id: "dolores-umbridge",
      },
    ],
    weapons: [
      {
        name: "Expelliarmus",
        id: "expelliarmus",
      },
      {
        name: "Rictusempra",
        id: "rictusempra",
      },
      {
        name: "Estupefaça",
        id: "estupefaca",
      },
      {
        name: "Petrificus Totalus",
        id: "petrifucus-totalus",
      },
      {
        name: "Poção do sono",
        id: "pocao-do-sono",
      },
      {
        name: "Vassoura",
        id: "vassoura",
      },
    ],
    rooms: [
      {
        name: "Campo de quadribol",
        id: "campo-de-quadribol",
      },
      {
        name: "Sala de poções",
        id: "sala-de-pocoes",
      },
      {
        name: "Ala hospitalar",
        id: "ala-hospitalar",
      },
      {
        name: "Floresta proibida",
        id: "floresta-proibida",
      },
      {
        name: "Sala precisa",
        id: "sala-precisa",
      },
      {
        name: "Salão principal",
        id: "salao-principal",
      },
      {
        name: "Cabana do Hagrid",
        id: "cabana-do-hagrid",
      },
      {
        name: "Biblioteca",
        id: "biblioteca",
      },
      {
        name: "Sala de defesa contra a arte das trevas",
        id: "sala-de-dcat",
      },
    ],
  },
};
