import Viajes_card from '../cards/viajes_card'

const Viajes_list = () => {
    return (
        <div className="trip-categories scroll">


            <Viajes_card
                src='/img/viajes-fly-drive.svg'
                alt='icon fly & drive'
                title='Fly & Drive'
                url='/'
            />

            <Viajes_card
                src='/img/viajes-lujo-cuba.svg'
                alt='icon Lujo a Cuba'
                title='Lujo a Cuba'
                url='/'
            />

            <Viajes_card
                src='/img/viajes-LGBTI-cuba.svg'
                alt='icon viajes-LGBTI-cuba'
                title='LGBTI a Cuba'
                url='/'
            />

            <Viajes_card
                src='/img/viajes-accesible-cuba.svg'
                alt='icon viajes-accesible-cuba'
                title='Accesibles'
                url='/'
            />

            <Viajes_card
                src='/img/viajes-grupo-cuba.svg'
                alt='icon viajes-grupo-cuba'
                title='Grupos y Eventos'
                url='/'
            />


            <Viajes_card
                src='/img/viajes-experiencia-cuba.svg'
                alt='icon viajes-experiencia-cuba'
                title='Experiencias'
                url='/'
            />


        </div>

    );
}

export default Viajes_list;