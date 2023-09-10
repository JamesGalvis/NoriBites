import sushi9 from '../assets/sushi-9.png'
import sushi8 from '../assets/sushi-8.png'
import sushi7 from '../assets/sushi-7.png'
import sushi6 from '../assets/sushi-6.png'

import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

const trendingSushis = [
  'Make Sushi',
  'Nigiri Sushi',
  'Oshizushi',
  'Temaki Sushi',
  'Uramaki Sushi',
  'Inari Sushi',
]

const trendingDrinks = [
  'Oruncha',
  'Ofukucha',
  'Sakura Tea',
  'Kombu-cha',
  'Aojiru',
  'Mugicha',
]

const filtersData = [
  {
    text: 'Sushi',
    imagePath: sushi9,
  },
  {
    text: 'Ramen',
    imagePath: sushi8,
  },
  {
    text: 'Udon',
    imagePath: sushi7,
  },
  {
    text: 'Danggo',
    imagePath: sushi6,
  },
]

const PopularCards = [
  {
    imagePath: sushi12,
    title: "Chezu Sushi",
    rating: "4.9",
    price: "$21.00",
  },
  {
    imagePath: sushi11,
    title: "Original Sushi",
    rating: "5.0",
    price: "$19.00",
    active: true,
  },
  {
    imagePath: sushi10,
    title: "Ramen Legendo",
    rating: "4.7",
    price: "$13.00",
  },
]

export { trendingDrinks, trendingSushis, PopularCards, filtersData }
