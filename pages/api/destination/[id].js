const data = [
    {
        id: '1',
        src: '/img/la-habana.jpg',
        alt: 'img viajes-cuba',
        title: 'La Habana',
        slug: 'la-habana',
        text: 'Lorem ipsum dolor sit amet, est melius feugait ut, at tota movet conceptam vis. Suas maiorum periculis ne sit. Eu ullum omittantur has, et eos ullum noster labores. Nemore debitis comprehensam sed ei, no posse eirmod pro. Sea at homero delicatissimi, fugit zril no vel. Tota prima labore mel ne, mea id reformidans consectetuer, viris sapientem ullamcorper no nam. Putent mnesarchum ea eos. Te vix ocurreret definitiones, ius ex eligendi erroribus.' +
            ' Ne vis eirmod audiam appareat, veniam ocurreret splendide ei vis. No his alii denique mediocritatem, evertitur voluptatibus id sea.Ex dicit graecis partiendo cum, et vel ridens consequuntur, sea te tractatos philosophia. Ei cum velit legere, prima essent insolens ut his, duo graeco verear gloriatur ne. Evertitur comprehensam mel at, ea illum libris quo. Nominavi explicari ea sit. Est ne discere nusquam consequuntur.Quem repudiare ut sea, ex qui ferri dolore laboramus. An ridens voluptua consequuntur vel, ut legere euismod invidunt per. Ad sed homero facilis. ' +
            'Ei nisl pericula mea, ad nonumy corpora sea. No expetendis sadipscing his. Quidam nostrum efficiendi ut nam, sit ocurreret assueverit eu. Mei amet prima no, quis errem mediocritatem mel an, at duo ignota moderatius. In debet utamur eripuit sea. Sea ut consul mediocrem petentium. Ne accusamus principes vim.'
    },

    {
        id: '2',
        src: '/img/varadero.jpg',
        alt: 'img varadero',
        title: 'Varadero',
        slug: 'varadero',
         text: 'Varadero se encuentra en la península de Hicacos, a 130 kilómetros de La Habana. Esta ciudad turística es uno de los destinos más visitados en el Caribe. En este post repasaremos las mejores zonas donde alojarse en Varadero.\n' +
             '\n' +
             'Varadero es la localidad cubana más cercana a la costa de los Estados Unidos y uno de los destinos más ricos en naturaleza marina y reservas de vegetación acuática del mundo. El principal atractivo turístico de Varadero es la Playa Coral Beach, famosa por conservar 50 especies de corales y 300 especies de peces exóticos.\n' +
             '\n' +
             'Otros atractivos naturales de esta zona incluyen la Reserva Natural de Varahicacos, la Cueva de los Musulmanes, la Cueva de Ambrosio y el Parque Josone.\n' +
             '\n' +
             'Como es tradicional de las ciudades del Caribe, Varadero es un destino de veranos largos y un clima tropical, la mejor temporada para visitarla es durante el mes de mayo, cuando el flujo de turistas es menor que en temporada alta.\n' +
             '\n' +
             'El aeropuerto internacional Juan Gualberto Gómez de Varadero es el segundo en número de pasajeros en Cuba. Esta terminal ofrece conexiones a destinos en Canadá, Latinoamérica y Europa.\n' +
             '\n' +
             'Para el traslado interno es recomendable quedarse en una zona con paradas de guaguas (autobús), también se puede coger un taxi, alquilar un coche o incluso disfrutar la experiencia de recorrer la zona en una carreta a caballo.\n' +
             '\n' +
             'La mejores zona donde alojarse en Varadero es el Extremo Oriental, la zona con la mayor oferta de hoteles, conexiones de transporte y cercanía a los atractivos. Ver alojamiento en el Extremo Oriental de Varadero, Cuba.'

    },
]


export default function personHandler({query: {id}}, res) {
    const filtered = data.filter((p) => p.id === id);

    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Hotel with id: ${id} not found.`})
    }
}
