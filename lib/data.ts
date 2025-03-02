import type { Destination } from "./types"

export const destinations: Destination[] = [
  {
    id: "paris",
    name: "Paris",
    clues: [
      "I am home to an iconic iron tower that was initially criticized by locals.",
      "My river divides me into the Left Bank and Right Bank.",
      "I am known as the 'City of Light'.",
    ],
    funFacts: [
      "The Eiffel Tower was supposed to be a temporary installation for the 1889 World's Fair.",
      "Paris has only one stop sign in the entire city.",
      "There are 6,100 streets in Paris, and the shortest one, Rue des Degrés, is just 5.75 meters long.",
    ],
    options: ["Rome", "London", "Berlin", "Madrid"],
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    clues: [
      "I am a 15th-century citadel perched high in the mountains.",
      "I was built by an ancient empire but abandoned during Spanish conquest.",
      "I remained hidden from the outside world until 1911.",
    ],
    funFacts: [
      "Machu Picchu was built without the use of wheels, iron tools, or mortar.",
      "The site contains over 100 separate flights of stairs, many carved from a single slab of stone.",
      "Despite its age, the drainage system still works and prevents the site from flooding during heavy rains.",
    ],
    options: ["Angkor Wat", "Petra", "Chichen Itza", "Taj Mahal"],
  },
  {
    id: "sydney",
    name: "Sydney",
    clues: [
      "I am home to a famous opera house with sail-shaped shells.",
      "My harbor bridge is nicknamed 'The Coathanger'.",
      "I hosted the Summer Olympics in 2000.",
    ],
    funFacts: [
      "The Sydney Opera House has over one million roof tiles.",
      "Sydney's Bondi Beach is one of the most famous beaches in the world.",
      "Sydney Harbour Bridge is the world's largest (but not longest) steel arch bridge.",
    ],
    options: ["Melbourne", "Auckland", "Singapore", "Hong Kong"],
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon",
    clues: [
      "I am a steep-sided canyon carved by a river over millions of years.",
      "I am 277 miles long and up to 18 miles wide.",
      "My colorful landscape ranges from Kaibab Limestone to Vishnu Schist.",
    ],
    funFacts: [
      "The Grand Canyon is neither the deepest nor the longest canyon in the world, but it's valued for its combination of size, depth, and exposed colorful layers of rock.",
      "The temperature at the bottom can be over 20°F (11°C) warmer than at the rim.",
      "There are approximately 1,000 caves in the Grand Canyon, but only 335 have been documented.",
    ],
    options: ["Yellowstone", "Yosemite", "Zion", "Bryce Canyon"],
  },
  {
    id: "venice",
    name: "Venice",
    clues: [
      "I am built on more than 100 small islands in a lagoon.",
      "I have canals instead of roads and boats instead of cars.",
      "My carnival is famous for elaborate masks.",
    ],
    funFacts: [
      "Venice is sinking at the rate of 1-2 millimeters per year.",
      "The city has over 400 bridges and 150 canals.",
      "Venetian gondolas are always painted black, following a law from the 16th century.",
    ],
    options: ["Amsterdam", "Copenhagen", "Stockholm", "Bruges"],
  },
  {
    id: "great-wall-of-china",
    name: "Great Wall of China",
    clues: [
      "I am a series of fortifications made of stone, brick, and other materials.",
      "I was built to protect against nomadic groups and military incursions.",
      "Contrary to popular belief, I am not visible from the moon with the naked eye.",
    ],
    funFacts: [
      "The Great Wall is not a single wall but a collection of walls built by various dynasties.",
      "The total length of all sections is approximately 13,171 miles (21,196 kilometers).",
      "During its construction, sticky rice was used as a binding material for the bricks.",
    ],
    options: ["Taj Mahal", "Colosseum", "Petra", "Angkor Wat"],
  },
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    clues: [
      "I am home to a giant statue of Christ with outstretched arms.",
      "My famous beach is named after a neighborhood and shaped like a crescent.",
      "I hosted the Summer Olympics in 2016.",
    ],
    funFacts: [
      "The Christ the Redeemer statue was struck by lightning during a violent electrical storm in 2014, damaging one of the thumbs.",
      "Rio has the largest urban forest in the world, the Tijuca Forest.",
      "The city's name means 'January River' in Portuguese, though there is no river there.",
    ],
    options: ["Buenos Aires", "São Paulo", "Lima", "Bogotá"],
  },
  {
    id: "santorini",
    name: "Santorini",
    clues: [
      "I am a volcanic island with white-washed buildings and blue domes.",
      "My sunset views are considered among the most beautiful in the world.",
      "I may be the inspiration for the lost city of Atlantis.",
    ],
    funFacts: [
      "Santorini's unique soil due to volcanic ash makes it perfect for growing wine grapes.",
      "The island's official name is Thira, though it's commonly known as Santorini.",
      "Houses are painted white to reflect the sun's heat during hot summers.",
    ],
    options: ["Mykonos", "Crete", "Cyprus", "Malta"],
  },
]

