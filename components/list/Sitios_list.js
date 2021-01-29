
import Sitio_card from "../cards/Sitios_card";

const Sitios_list = () => {

    const data = [
        {
            id: 1,
            title: 'Sitios de Interes',
            slug:'sitios-de-interes'
        },

        {
            id: 2,
            title: 'Restaurantes y Bares',
             slug:'restaurantes-y-bares'
        },

        {
            id: 3,
            title: 'Centros Nocturnos',
             slug:'centros-nocturnos'
        },

        {
            id: 4,
            title: 'Centros culturales',
             slug:'centros-culturales'
        },
        {
            id: 5,
            title: 'Excursiones',
             slug:'excursiones'
        },
        {
            id: 6,
            title: 'Experiencias',
             slug:'experiencias'
        },
        {
            id: 7,
            title: 'Descubrir más...',
             slug:''
        },


    ];


    return (
        <div className="is-flex is-justify-content-space-between  scroll">


            {
                data.map(
                    (item) =>

                       
                           <Sitio_card title={item.title} slug={item.slug} key={item.id}/>

                )
            }


        </div>
    );
}

export default Sitios_list;