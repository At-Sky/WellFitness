declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.scss';
declare module '*.tsx';
declare module '*.svg';
declare module '*.ts';

declare interface ICategory {
    name: string
    id: number
    subCategories: string
}

declare interface ISubCategory {
    id: number
    name: string
    smallCategories: ISmallCategory[]
}

declare interface ISmallCategory {
    id: number
    name: string
    img: string
    link: string
}
