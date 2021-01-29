import Sitio_card from "../cards/Sitios_card";

const HotelDetailsMenu_List = () => {
    const data = [
        {
            id: 1,
            title: 'Mapa',
            slug: 'mapa'
        },
        {
            id: 2,
            title: 'Sitios de interés',
            slug: 'sitios-de-interes'
        },
        {
            id: 3,
            title: 'Servicios del hotel',
            slug: 'servicios-del-hotel'
        },
        {
            id: 4,
            title: 'Habitaciones',
            slug: 'habitaciones'
        },
        {
            id: 5,
            title: 'Gastronomía',
            slug: 'gastronomia'
        },
        {
            id: 6,
            title: 'Términos y Condiciones',
            slug: 'terminos-condiciones'
        },
        {
            id: 7,
            title: 'Ofertas especiales',
            slug: 'ofertas-especiales'
        },
    ];


    return (
        <div className="is-flex is-justify-content-space-between  scroll">
            {
                data.map(
                    (item) =>
                        <Sitio_card title={item.title} slug={item.slug} key={item.id} />
                )
            }
        </div>
    );
}

export default HotelDetailsMenu_List;