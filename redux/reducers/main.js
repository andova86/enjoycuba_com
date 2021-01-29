import * as t from "../types";

const d_list = [
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
    }
];


const data_casas = [
    {
        id: 1,
        img: '/img/casa-josefina.jpg',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '87',
        text: 'Por noche',
    },
    {
        id: 2,
       img: '/img/casa-josefina.png',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '87',
        text: 'Por noche',
    },
    {
        id: 3,
        img: '/img/casa-josefina.png',
        title: 'Iberostart Costa Azul',
        subtitle: 'Varadero',
        value: '87',
        text: 'Por noche',
    }
];

const main = (state = {
    name: "Hoteles",
    loading: false,
    error: null,
    data: d_list


}, action) => {
    switch (action.type) {
        case t.SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case t.SET_DATA:
            return {
                ...state,
                data: action.payload
            };

        default:
            return { ...state };
    }
};

export default main;