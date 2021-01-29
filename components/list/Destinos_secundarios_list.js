import Destino_Secundario_card from "../cards/Destino_secundario_card";

const Destinos_secundarios_list = () => {

    const data = [
        {id:1, name:'Santiago de Cuba'},
        {id:2,name:'Ciénaga de Zapata'} ,
        {id:3, name:'Cayo Largo del Sur'},
        {id:4, name: 'Matanzas'},
        {id:5, name: 'Cayo Coco'},
        {id:6, name: "Marina Heminway"}
    ];


    return (
        <div className="columns  scroll">


            {
                data.map(
                    (item) =>

                        <div className="column" key={item.id}>
                            <Destino_Secundario_card
                                title={item.name}

                            />
                        </div>
                )
            }



        </div>
    );
}

export default Destinos_secundarios_list;