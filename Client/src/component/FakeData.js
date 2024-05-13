export const CartItems = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: 2,
  },
  {
    id: 1,
    title: "Ball",
    price: 12,
    quantity: 4,
  },
  {
    id: 1,
    title: "T-shirt",
    price: 19,
    quantity: 4,
  },
];

export const Items = [
  {
    id: 1,
    title: "Chaussures de running",
    description: "Chaussures parfaites pour aller courir dans la nature",
    price: 125,
    availableSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    image: "shoes-3695750_1280.jpg",
  },

  {
    id: 2,
    title: "Raquette de Tennis",
    description:
      "Pour jouer vos plus beau matchs, adoptez cette superbe raquette",
    price: 125,
    availableSizes: ["TU"],
    image: "activity-5025174_1280.jpg",
  },

  {
    id: 3,
    title: "T-shirt thermochauffant",
    description:
      "Idéal pour courir sous la neige, ce t-shirt n'a pas peur du froid",
    price: 25,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "blank-1886008_1280.png",
  },

  {
    id: 4,
    title: "Ballon de football",
    description:
      "Pour un match de qualité qualitative sur le stade boueux de votre village.",
    price: 125,
    availableSizes: ["TU"],
    image: "football-428314_1280.jpg",
  },

  {
    id: 5,
    title: "Skis",
    description: "Parfaits pour vous planter dans un sapin durant vos vacances",
    price: 125,
    availableSizes: ["TU"],
    image: "ski-999705_1280.jpg",
  },

  {
    id: 6,
    title: "Ballon de basketball",
    description: "Pour un match digne de la NBA.",
    price: 50,
    availableSizes: ["TU"],
    image: "sports-7199150_1280.png",
  },

  {
    id: 7,
    title: "Lot de 4 chasubles",
    description: "Equipez vos équipes avec ces chasubles colorées",
    price: 50,
    availableSizes: ["TU"],
    image: "chasubles.png",
  },

  {
    id: 8,
    title: "Kimono de judo",
    description: "En coton bio de Bretagne",
    price: 50,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "kimono.png"
  },

  {
    id: 9,
    title: "Legging thermochauffant",
    description:
      "Réchauffez vos gambettes durant vos séances running avec ce legging révolutionnaire",
    price: 15,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "sweatpants-5974189_1280.jpg",
  },

  {
    id: 10,
    title: "Luge",
    description:
      "Prenez vos meilleures accélérations avec cette luge aérodynamique conçue par des ingénieurs de Formule 1",
    price: 40,
    availableSizes: ["TU"],
    image: "sleds-2578283_1280.png",
  },
  {
    id: 11,
    title: "Bâtons de ski",
    description:
      "Pour planter dans la neige. Ne pas jouer aux fléchettes avec.",
    price: 40,
    availableSizes: ["TU"],
    image: "ski-poles-252250_1280.jpg",
  },
  {
    id: 12,
    title: "Raquettes",
    description:
      "Les meilleurs raquettes conçues pour ne pas s'enfoncer dans la neige",
    price: 40,
    availableSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    image: "snowshoe-588853_1280.jpg",
  },
  {
    id: 13,
    title: "Lunettes de ski",
    description: "Parfaites pour dessiner votre plus beau bronzage au ski",
    price: 40,
    availableSizes: ["TU"],
    image: "ski-7809156_1280.jpg",
  },
  {
    id: 14,
    title: "Gants chauffants",
    description:
      "Pour ne pas perdre vos doigts dans la bataille, ces gants sont tricotés avec la meilleure laine de mouton",
    price: 40,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "cold-16008_1280.jpg",
  },
  {
    id: 15,
    title: "Bonnet polaire",
    description: "Idéale pour réchauffer vos oreilles",
    price: 15,
    availableSizes: ["TU"],
    image: "hat-6602023_1280.jpg",
  },
  {
    id: 16,
    title: "Veste polaire",
    description: "Equipée d'une vingtaines de poches inutiles",
    price: 40,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "ski-957899_1280.jpg",
  },
];

export const Categories = [
  {
    id: 1,
    title: "Running",
    description: "Les meilleurs produits pour aller plus vite que l'éclair.",
    items: [
      {
        id: 1,
        title: "Chaussures de running",
        description: "Chaussures parfaites pour aller courir dans la nature",
        price: 125,
        availableSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
        image: "shoes-3695750_1280.jpg",
      },
      {
        id: 3,
        title: "T-shirt thermochauffant",
        description:
          "Idéal pour courir sous la neige, ce t-shirt n'a pas peur du froid",
        price: 25,
        availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
        image: "blank-1886008_1280.png",
      },
      {
        id: 9,
        title: "Legging thermochauffant",
        description:
          "Réchauffez vos gambettes durant vos séances running avec ce legging révolutionnaire",
        price: 15,
        availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
        image: "sweatpants-5974189_1280.jpg",
      },
    ],
  },

  {
    id: 2,
    title: "Sports d'hiver",
    description: "Pour profiter au mieux de la montagne et de la neige",
    items: [
      {
        id: 5,
        title: "Skis",
        description:
          "Parfaits pour vous planter dans un sapin durant vos vacances",
        price: 125,
        availableSizes: ["TU"],
        image: "ski-999705_1280.jpg",
      },
      {
        id: 10,
        title: "Luge",
        description:
          "Prenez vos meilleures accélérations avec cette luge aérodynamique conçue par des ingénieurs de Formule 1",
        price: 40,
        availableSizes: ["TU"],
        image: "sleds-2578283_1280.png",
      },
      {
        id: 11,
        title: "Bâtons de ski",
        description:
          "Pour planter dans la neige. Ne pas jouer aux fléchettes avec.",
        price: 40,
        availableSizes: ["TU"],
        image: "ski-poles-252250_1280.jpg",
      },
      {
        id: 12,
        title: "Raquettes",
        description:
          "Les meilleurs raquettes conçues pour ne pas s'enfoncer dans la neige",
        price: 40,
        availableSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
        image: "snowshoe-588853_1280.jpg",
      },
      {
        id: 13,
        title: "Lunettes de ski",
        description: "Parfaites pour dessiner votre plus beau bronzage au ski",
        price: 40,
        availableSizes: ["TU"],
        image: "ski-7809156_1280.jpg",
      },
      {
        id: 14,
        title: "Gants chauffants",
        description:
          "Pour ne pas perdre vos doigts dans la bataille, ces gants sont tricotés avec la meilleure laine de mouton",
        price: 40,
        availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
        image: "cold-16008_1280.jpg",
      },
      {
        id: 15,
        title: "Bonnet polaire",
        description: "Idéale pour réchauffer vos oreilles",
        price: 15,
        availableSizes: ["TU"],
        image: "hat-6602023_1280.jpg",
      },
      {
        id: 16,
        title: "Veste polaire",
        description: "Equipée d'une vingtaines de poches inutiles",
        price: 40,
        availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
        image: "ski-957899_1280.jpg",
      },
    ],
  },

  {
    id: 3,
    title: "Vélo - Cyclisme",
    description:
      "Le meilleur matériel pour vous accompagner dans vos plus belles balades au fin fond de l'Ardèche",
    items: [],
  },

  {
    id: 4,
    title: "Tennis",
    description: "Pour vous accompagner au mieux dans vos plus beaux smashs.",
    items: [
      {
        id: 2,
        title: "Raquette de Tennis",
        description:
          "Pour jouer vos plus beau matchs, adoptez cette superbe raquette",
        price: 125,
        availableSizes: ["TU"],
        image: "activity-5025174_1280.jpg",
      },
    ],
  },

  {
    id: 5,
    title: "Basketball",
    description: "Réalisez vos meilleurs dunks avec notre matériel.",
    items: [
      {
        id: 6,
        title: "Ballon de basketball",
        description: "Pour un match digne de la NBA.",
        price: 50,
        availableSizes: ["TU"],
        image: "sports-7199150_1280.png",
      },
      {
        id: 7,
        title: "Lot de 4 chasubles",
        description: "Equipez vos équipes avec ces chasubles colorées",
        price: 50,
        availableSizes: ["TU"],
        image: "chasubles.png",
      },
    ],
  },

  {
    id: 6,
    title: "Sports de combat",
    description: "Pour plaquer plus vite l'adversaire au sol.",
    items: [
      {
        id: 8,
        title: "Kimono de judo",
        description: "En coton bio de Bretagne",
        price: 50,
        availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
        image:"kimono.png"
      },
    ],
  },
];
