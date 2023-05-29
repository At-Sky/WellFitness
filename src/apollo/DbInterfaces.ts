interface ICategory {
    name: string
    id: number
    subCategories: string
}

interface ISubCategory {
    id: number
    name: string
    smallCategories: ISmallCategory[]
}

interface ISmallCategory {
    id: number
    name: string
    img: string
    link: string
}
