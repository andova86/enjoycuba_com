const data = [
    {
        id:1,
        src: '/img/la-habana.jpg',
        alt: 'img viajes-cuba',
        title: 'La Habana',
        slug: 'la-habana'
    },

     {
        id:2,
        src: '/img/varadero.jpg',
        alt: 'img viajes-cuba',
        title: 'Varadero',
        slug: 'varadero'
    },

     {
        id:3,
        src: '/img/vinales.jpeg',
        alt: 'img vinales',
        title: 'Viñales',
        slug: 'vinales'
    },
]


export default (req, res) => {
    res.statusCode = 200


    res.json(data)
}

