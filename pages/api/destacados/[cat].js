const data = [
    {
        id: 1,
        img: '/img/habana2.jpeg',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '87',
        text: 'Por noche',
        category: 'Hoteles',
        slug:'varadero',
    },
    {
        id: 2,
         img: '/img/la-habana.jpeg',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '57',
        text: 'Por noche',
        category: 'Hoteles',
        slug:'costa-azul',
    },
    {
        id: 3,
        img: '/img/hotel-nacional.jpg',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '135',
        text: 'Por noche',
        category: 'Hoteles',
        slug:'costa-red',
    },
     {
        id: 6,
        img: '/img/casa-maria.jpg',
        title: 'Casa de maria',
        subtitle: 'Guanabo',
        value: '87',
        text: 'Por noche',
         category: 'Casas',
    },
    {
        id: 7,
       img: '/img/casa-josefina.jpg',
        title: 'Casa de Josefina',
        subtitle: 'Centro habana',
        value: '56',
        text: 'Por noche',
        category: 'Casas',
    },
    {
        id: 8,
        img: '/img/casa-estrella.jpeg',
        title: 'Casa de Estrella',
        subtitle: 'Matanzas',
        value: '87',
        text: 'Por noche',
        category: 'Casas',
    },

     {
        id: 9,
        img: '/img/GeelyCK.jpg',
        title: 'Geely CK',
        subtitle: 'Habana',
        value: '35',
        text: 'Por día',
        category: 'Autos',
    },

     {
        id: 10,
        img: '/img/KIAPicanto.jpg',
        title: 'Kia Picanto',
        subtitle: 'Miramar - La Habana',
        value: '66',
        text: 'Por día',
        category: 'Autos',
    },

    {
        id: 11,
        img: '/img/santiago2.jpeg',
        title: 'Viaje a Santiago',
        subtitle: 'La Habana -Santiago',
        value: '359',
        text: 'Por semana',
        category: 'Traslados',
    },

    {
        id: 12,
        img: '/img/trinidad-cuba.jpeg',
        title: 'Vuelo a Trinidad',
        subtitle: 'Sancti Spíritus',
        value: '120',
        text: 'Por vuelo',
        category: 'Vuelos',
    },

     {
        id: 12,
        img: '/img/viajes-personalizados-3.jpg',
        title: 'Cayo Coco-Varadero',
        subtitle: 'vuelo auto hotel',
        value: '120',
        text: 'Por noche',
        category: 'Paquetes',
    },

    {
        id: 13,
        img: '/img/vinales-cuba.jpeg',
        title: 'Excursión a Viñales',
        subtitle: 'vuelo auto hotel',
        value: '79',
        text: 'Por noche',
        category: 'Excursiones',
    }
];









export default function personHandler({query: {cat}}, res) {


    const filtered = data.filter((p) => p.category === cat);

    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res.status(404).json({message: `Destacados with cat: ${id} not found.`})
    }
}
