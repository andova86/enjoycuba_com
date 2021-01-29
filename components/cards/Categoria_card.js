import {useEffect} from 'react';


const Categoria_card = (props) => {


    const adb = props.title + "_cat"

    useEffect(() => {
        console.log("using effect");
        handleContentLoaded();
    }, []);


    const handleContentLoaded = () => {
        if (props.ch === 'yes') {


            const radio = document.getElementById(adb);
            if (radio) {

                radio.checked = true;

                radio.parentElement.querySelector('.img_cat').classList.add('d-none')
                radio.parentElement.querySelector('.img_cat_hover').classList.remove('d-none')

                radio.parentElement.querySelector('.categoria_card_title').classList.add('has-text-blue-dark');
                radio.parentElement.querySelector('.categoria_card_title').classList.add('has-text-weight-semibold');


            }
        }
    };


    const handleClick = (e) => {
        e.preventDefault();
        delete_active()
         //console.log(e.target.parentElement)
        const title = e.target.parentElement.parentElement.querySelector('.categoria_card_title')

        props.handler(title.innerHTML);
        // e.target.src = props.icon_hover;
        title.classList.add('has-text-blue-dark');
        title.classList.add('has-text-weight-semibold');
        e.target.parentElement.querySelector('.img_cat').classList.add('d-none')
        e.target.parentElement.querySelector('.img_cat_hover').classList.remove('d-none')


    }

    function delete_active() {

        const all = document.querySelectorAll('.categoria_card');



        // var all = e.target.parentElement.parentElement.querySelectorAll('.categoria_card_body');
        //console.log(all)

        all.forEach(item => {

            item.querySelector('.img_cat_hover').classList.add('d-none')
            item.querySelector('.img_cat').classList.remove('d-none')

            const title = item.parentElement.querySelector('.categoria_card_title')
            title.classList.remove('has-text-blue-dark');
            title.classList.remove('has-text-weight-semibold');

        })
    }

    /* function Icono() {
         if (props.type === "Hotel") {
             return (
                 <Hotel_svg color={'#3273DC'}
                            h={'32px'}
                            w={'32px'}/>
             )
         }

         if (props.type === "Casa") {
             return (
                 <House_svg color={'#3273DC'}
                            h={'32px'}
                            w={'32px'}/>
             )

         }

         if (props.type === "Traslado") {
             return (
                 <Traslados_svg color={'#3273DC'}
                                h={'32px'}
                                w={'32px'}/>
             )

         }

         if (props.type === "Auto") {
             return (
                 <Autos_svg color={'#3273DC'}
                            h={'32px'}
                            w={'32px'}/>
             )

         }

         if (props.type === "Excursion") {
             return (
                 <Excursiones_svg color={'#3273DC'}
                                  h={'32px'}
                                  w={'32px'}/>
             )

         }

         if (props.type === "Paquete") {
             return (
                 <Paquetes_svg color={'#3273DC'}
                                  h={'32px'}
                                  w={'32px'}/>
             )

         }

         if (props.type === "Vuelo") {
             return (
                 <Vuelos_svg color={'#3273DC'}
                                  h={'32px'}
                                  w={'32px'}/>
             )

         }
     }*/


    return (


        <div className="control control-radio category_card_radio">
            <input
                type="radio"
                className='pr-0 '
                name="category_card_radio"
                id={adb}
                value={props.title}
                //onClick={handleClick}

            />
            <label className="radio pr-0"
                   htmlFor={adb}>


                <div className="categoria_card">
                    <div className='categoria_card_body'>
                         <img src={props.icon}
                         alt={props.title}

                         className='categoria_card-body-img img_cat'
                         onClick={handleClick}/>

                    <img src={props.icon_hover}
                         alt={props.title}

                         className='categoria_card-body-img img_cat_hover d-none'
                         onClick={handleClick}/>
                    </div>




                    <p className='categoria_card_title'>{props.title}</p>
                </div>
            </label>
        </div>


    );


};

/*const mapStateToProps = state => ({
    userInfo: state.main
});

const mapDispatchToProps = {
    setInfo: setInfo,
    setData: setData
};*/

export default Categoria_card

//export default connect(mapStateToProps, mapDispatchToProps)(Categoria_card)

