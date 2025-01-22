export default interface IFoods{
    id?: string,
    slug: string,
    name: string,
    category: string,
    price: number,
    originalPrice: number,
    tags: string[],
    image?: string,
    imageUrl?: string,
    description: string,
    available: boolean,
    quantity: number
}