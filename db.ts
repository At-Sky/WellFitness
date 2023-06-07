module.exports = {
    categories: [
        {
            name: 'Для дома', id: 1, subCategories: [
                {
                    id: 1, name: "Кардиотренажеры",
                    smallCategories: [
                        {id: 1, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 2, name: 'Эллиптические тренажеры', img: '', link: ''},
                        {id: 3, name: 'Велотренажеры', img: '', link: ''},
                        {id: 4, name: 'Степперы', img: '', link: ''},
                    ]
                },
                {
                    id: 2, name: "Свободные веса",
                    smallCategories: [
                        {id: 1, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 2, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 3, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 4, name: 'Беговые дорожки', img: '', link: ''},
                    ]
                }
            ]
        },
        {
            name: 'Для фитнесс клуба', id: 2, subCategories: [
                {
                    id: 1, name: "Силовые тренажеры",
                    smallCategories: [
                        {id: 1, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 2, name: 'Эллиптические тренажеры', img: '', link: ''},
                        {id: 3, name: 'Велотренажеры', img: '', link: ''},
                        {id: 4, name: 'Степперы', img: '', link: ''},
                    ]
                },
                {
                    id: 2, name: "Кардиотренажеры",
                    smallCategories: [
                        {id: 1, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 2, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 3, name: 'Беговые дорожки', img: '', link: ''},
                        {id: 4, name: 'Беговые дорожки', img: '', link: ''},
                    ]
                }
            ]
        },
    ],
    users: [
        {id: 1, firstName: "John", lastName: 'Doe', email: 'asdas@gmail.com', phone: '88888888'},
        {id: 2, firstName: "Ivjvn", lastName: 'Icnrvs', email: 'asdas@gmail.com', phone: '88888888'},
        {id: 3, firstName: "Pdvff", lastName: 'Pasdas', email: 'asdas@gmail.com', phone: '88888888'},
        {id: 4, firstName: "Aasdasd", lastName: 'Vxvcx', email: 'asdas@gmail.com', phone: '88888888'}
    ],
    likes: [
        {userId: 1, likesList: [1, 2, 3]},
        {userId: 2, likesList: [3, 1, 2]},
        {userId: 3, likesList: [4, 3, 5]},
    ],
    compares: [
        {userId: 1, comparesList: [
            [1, 2], [3, 4]
        ]},
        {userId: 2, comparesList: [
            [2, 3], [4, 5]
        ]},
        {userId: 3, comparesList: [
            [4, 5], [2, 3]
        ]},
    ],
    products: [
        {id: 1, name: 'asdasd', shortName: 'ads', price: 100, amount: 100},
        {id: 2, name: 'asdasd', shortName: 'ads', price: 100, amount: 100},
        {id: 3, name: 'asdasd', shortName: 'ads', price: 100, amount: 100},
        {id: 4, name: 'asdasd', shortName: 'ads', price: 100, amount: 100},
        {id: 5, name: 'asdasd', shortName: 'ads', price: 100, amount: 100},
    ]
}
