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

declare type ProductId = number;

//users
declare interface IUser {
    id
    firstName: string;
    lastName: string;
    email: string;
    phone: phone;
}

//likes
declare interface ILike {
    userId: number;
    likesList: ProductId[]
}

//compares
declare interface ICompare {
    userId: number;
    comparesList: ProductId[]
}

//products
declare interface IProduct {
    id: number;
    name: string;
    shortName: string;
    price: number;
    amount: number;
}

//for every list of likes/compares/products/users in db
declare type List<T> = T[]
