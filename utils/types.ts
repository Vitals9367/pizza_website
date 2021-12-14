export type pizzaType = {
    name: string,
    imageSrc: string,
    heat: number,
    price: number,
    discount?: number,
    currency: string,
    description: string,
}

export type cartitemType = {
    pizza: pizzaType,
    amount: number,
}

export type section = {
    name:string,
    list:pizzaType[]
}
  
export type menuOptionType = {
    name:string,
    sections:section[]
}