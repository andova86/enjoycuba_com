 const data = [
        {
            id: 1,
            price: '89',
            comments: '24',
            days: '7 días en Varadero',
            title: 'Vive Cuba al descubierto desde la raíz',
            location: "Varadero, Mar del Sur y Melena",
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
            author: 'Maria de los Angeles',
            author_desc: 'Especialista en viajes clásicos y grupales',
            author_img: '/img/avatar-2.jpg',
            slug: 'vive-cuba-al-descubierto'
        },

        {
            id: 2,
            price: '49',
            comments: '24',
            days: '7 días en Varadero',
            title: 'Vive Cuba al descubierto desde la raíz',
            location: "Varadero, Mar del Sur y Melena",
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
            author: 'Maria de los Angeles',
            author_desc: 'Especialista en viajes clásicos y grupales',
            author_img: '/img/avatar-2.jpg',
            slug: 'vive-cuba-al-descubierto'
        },

        {
            id: 3,
            price: '37',
            comments: '24',
            days: '7 días en Varadero',
            title: 'Vive Cuba al descubierto desde la raíz',
            location: "Varadero, Mar del Sur y Melena",
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
            author: 'Maria de los Angeles',
            author_desc: 'Especialista en viajes clásicos y grupales',
            author_img: '/img/avatar-2.jpg',
            slug: 'vive-cuba-al-descubierto'

        },

        {
            id: 4,
            price: '112',
            comments: '24',
            days: '7 días en Varadero',
            title: 'Vive Cuba al descubierto desde la raíz',
            location: "Varadero, Mar del Sur y Melena",
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
            author: 'Maria de los Angeles',
            author_desc: 'Especialista en viajes clásicos y grupales',
            author_img: '/img/avatar-2.jpg',
            slug: 'vive-cuba-al-descubierto'
        },

        {
            id: 5,
            price: '112',
            comments: '24',
            days: '7 días en Varadero',
            title: 'Vive Cuba al descubierto desde la raíz',
            location: "Varadero, Mar del Sur y Melena",
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
            author: 'Maria de los Angeles',
            author_desc: 'Especialista en viajes clásicos y grupales',
            author_img: '/img/avatar-2.jpg'
        },
    ];


export default (req, res) => {
    res.statusCode = 200


    res.json(data)
}

