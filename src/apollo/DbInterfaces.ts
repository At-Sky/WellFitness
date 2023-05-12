export interface ICategory {
    name: string
    id: number
    subCategories: string
}

export interface ISubCategory {
    id: number
    name: string
    smallCategories: ISmallCategory[]
}

export interface ISmallCategory {
    id: number
    name: string
    img: string
    link: string
}
