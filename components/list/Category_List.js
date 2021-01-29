import Categoria_card from "../cards/Categoria_card";
import DestacadosList from "./Destacados_list";
import {useEffect,useState} from "react"
import {getAllDestacadosByCategoria} from "../../lib/api";

const Category_list = (props) => {

    const data = [
        {id: 1, title: 'Hoteles', type: 'Hotel', ch: 'yes', icon:'/img/hotel-service.svg', icon_hover:'/img/hotel-service-active.svg'},
        {id: 2, title: 'Casas', type: 'Casa', ch: 'no', icon:'/img/house-service.svg', icon_hover:'/img/house-service-active.svg'},
        {id: 3, title: 'Autos', type: 'Auto', ch: 'no', icon:'/img/car-service.svg', icon_hover:'/img/car-service-active.svg'},
        {id: 4, title: 'Traslados', type: 'Traslado', ch: 'no', icon:'/img/transfer-service.svg', icon_hover:'/img/transfer-service-active.svg'},
        {id: 5, title: 'Vuelos', type: 'Vuelo', ch: 'no', icon:'/img/flight-service.svg', icon_hover:'/img/flight-service-active.svg'},
        {id: 6, title: 'Paquetes', type: 'Paquete', ch: 'no'  , icon:'/img/package-service.svg', icon_hover:'/img/package-service-active.svg'},
        {id: 7, title: 'Excursiones', type: 'Excursion', ch: 'no', icon:'/img/experience-service.svg', icon_hover:'/img/experience-service-active.svg'},
    ];

    const [category, setCategory] = useState(props.category)
      const [listD, setlistD] = useState(props.destacados)



  const  handleUpdate = async (param) => {
      setCategory(param)

      const res = (await getAllDestacadosByCategoria(param)) || []
      console.log(res)
      setlistD(res);

  }



    return (
        <div className='mt-3'>

        <div className='category_list  scroll  '>



            {
                data.map(
                    (item) =>

                            <Categoria_card
                                title={item.title}
                                type={item.type}
                                ch={item.ch}
                                key={item.id}
                                icon={item.icon}
                                icon_hover={item.icon_hover}
                                handler={handleUpdate}

                            />

                )
            }


        </div>

        <DestacadosList category={category} listDestacados={listD} />


        </div>

    )

};

export default Category_list