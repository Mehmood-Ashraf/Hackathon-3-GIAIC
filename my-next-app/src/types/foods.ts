export default interface IFoods{
    name: string,
    category: string,
    price: number,
    originalPrice: number,
    tags: string[],
    image?: string,
    imageUrl?: string,
    description: string,
    available: boolean
}