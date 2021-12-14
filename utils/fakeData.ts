import { menuOptionType, pizzaType } from "./types"

const lorem = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'

  export const cheapest:pizzaType[] = [
    {
      name: 'Neapolitan Pizza',
      imageSrc: '/palermo.jpg',
      heat: 3,
      price: 15,
      currency: '$',
      description:lorem
    },
    {
      name: 'California Pizza',
      imageSrc: '/pizza6.jpg',
      heat: 2,
      price: 9,
      currency: '$',
      description:lorem
    },
    {
      name: 'New York-Style Pizza',
      imageSrc: '/pizza7.jpg',
      heat: 2,
      price: 9,
      currency: '$',
      description:lorem
    },
    {
      name: 'Volcano',
      imageSrc: '/pizza8.jpg',
      heat: 2,
      price: 9,
      currency: '$',
      description:lorem
    },
  ]

  export const trending:pizzaType[] = [
    {
      name: 'Sicilian Pizza',
      imageSrc: '/pizza1.jpg',
      heat: 3,
      price: 15,
      currency: '$',
      description:lorem
    },
    {
      name: 'Havaian',
      imageSrc: '/pizza2.jpg',
      heat: 2,
      price: 9,
      currency: '$',
      description:lorem
    },
    {
      name: 'Detroit Pizza',
      imageSrc: '/palermo2.jpg',
      heat: 1,
      price: 25,
      discount: -10,
      currency: '$',
      description:lorem
    },
  ]

  export const best:pizzaType[] = [
    {
      name: 'Chicago Pizza',
      imageSrc: '/pizza3.jpg',
      heat: 3,
      price: 15,
      currency: '$',
      description:lorem
    },
    {
      name: 'Greek Pizza',
      imageSrc: '/pizza4.jpg',
      heat: 2,
      price: 9,
      currency: '$',
      description:lorem
    },
    {
      name: 'Types of Pizza Crust',
      imageSrc: '/pizza5.jpg',
      heat: 2,
      price: 9,
      currency: '$',
      description:lorem
    },
  ]

export const menuOptions:menuOptionType[] = [
    {
      name: 'Home',
      sections: [
        {
          name: 'Best',
          list: best
        },
        {
          name: 'Trending',
          list: trending
        },
        {
          name: 'Cheapest',
          list: cheapest
        }
      ] 
    },
    {
      name: 'Vegan',
      sections: [
        {
          name: 'Fully vegan',
          list: cheapest
        },
        {
          name: 'No meat',
          list: cheapest
        }
      ] 
    },
    {
      name: 'Cheezy',
      sections: [
        {
          name: 'Parmesan',
          list: cheapest
        },
        {
          name: 'Mix',
          list: cheapest
        }
      ] 
    },
  ]

  export const all = trending.concat(best,cheapest);