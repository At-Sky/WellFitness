import {gql} from "@apollo/client";

export const ALL_CATEGORIES = gql`
    query AllCategories {
        allCategories{
            name
            id
            subCategories
        }
    }
`


