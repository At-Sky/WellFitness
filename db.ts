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
        {id: 123, name: "John Doe"},
        {id: 456, name: "ASvfvfv Lkrtwrw"},
        {id: 4234, name: "Asdad Asdasd"},
        {id: 234234, name: "Xvcvxc Qeqda"}
    ],
    likes: [
        {userId: 123, productsList: [123, 321, 312]},
        {userId: 4234, productsList: [123, 321, 312]},
        {userId: 456, productsList: [123, 321, 312]},
    ],
    compares: [
        {userId: 123, comparesList: [
            [123, 321], [312, 321]
        ]},
        {userId: 4234, comparesList: [
            [123, 321], [312, 321]
        ]},
        {userId: 456, comparesList: [
            [123, 321], [312, 321]
        ]},
    ],
    products: [
        {id: 123, name: 'asdasd', shortName: 'ads', price: 100, amount: 100},
    ]
}
