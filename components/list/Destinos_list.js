import Destinos_card from "../cards/destinos_card";
import React from "react";


const Destinos_list = (props) => {
    return (
        <div className='destinations scroll '>


            {
                props.destinos.map(
                    (item) =>

                     <div key={item.id}>
                        <Destinos_card
                            id={item.id}
                            src={item.src}
                            alt={item.title}
                            title={item.title}
                            slug={item.slug}



                        />
                     </div>
                )
            }


            {/* <Destinos_card
                id='1'
                src='/img/la-habana.jpg'
                alt='img viajes-cuba'
                title='La Habana'
                slug='la-habana'


            />



            <Destinos_card
                id='2'
                src='/img/varadero.jpg'
                alt='img varadero'
                title='Varadero'
                slug='varadero'
            />



            <Destinos_card
                src='/img/casa-maria.jpg'
                alt='img viajes-cuba'
                title='Cayo Santa Maria'
                slug='cayo-santa-maria'
            />



            <Destinos_card
                id='3'
                src='/img/la-habana.jpg'
                alt='img viajes-cuba'
                title='Trinidad'
                slug='trinidad'
            />



            <Destinos_card
                id='4'
                src='/img/la-habana.jpg'
                alt='img viajes-cuba'
                title='Viñales'
                slug='vinales'
            />



            <Destinos_card
                id='5'
                src='/img/la-habana.jpg'
                alt='img viajes-cuba'
                title='Cayo Coco'
                slug='cayo-coco'
            />*/}

        </div>


    );
}

export default Destinos_list;