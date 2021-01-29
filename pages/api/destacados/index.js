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
        id: 1,
        img: '/img/casa-josefina.jpg',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '87',
        text: 'Por noche',
         category: 'Casas',
    },
    {
        id: 2,
       img: '/img/casa-josefina.png',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '87',
        text: 'Por noche',
        category: 'Casas',
    },
    {
        id: 3,
        img: '/img/casa-josefina.png',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '87',
        text: 'Por noche',
        category: 'Casas',
    }
];




export default (req, res) => {
    res.statusCode = 200;


    res.json(data)
}

