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
         text: 'Lorem ipsum dolor sit amet, est melius feugait ut, at tota movet conceptam vis. Suas maiorum periculis ne sit. Eu ullum omittantur has, et eos ullum noster labores. Nemore debitis comprehensam sed ei, no posse eirmod pro. Sea at homero delicatissimi, fugit zril no vel. Tota prima labore mel ne, mea id reformidans consectetuer, viris sapientem ullamcorper no nam. Putent mnesarchum ea eos. Te vix ocurreret definitiones, ius ex eligendi erroribus.' +
            ' Ne vis eirmod audiam appareat, veniam ocurreret splendide ei vis. No his alii denique mediocritatem, evertitur voluptatibus id sea.Ex dicit graecis partiendo cum, et vel ridens consequuntur, sea te tractatos philosophia. Ei cum velit legere, prima essent insolens ut his, duo graeco verear gloriatur ne. Evertitur comprehensam mel at, ea illum libris quo. Nominavi explicari ea sit. Est ne discere nusquam consequuntur.Quem repudiare ut sea, ex qui ferri dolore laboramus. An ridens voluptua consequuntur vel, ut legere euismod invidunt per. Ad sed homero facilis. ' +
            'Ei nisl pericula mea, ad nonumy corpora sea. No expetendis sadipscing his. Quidam nostrum efficiendi ut nam, sit ocurreret assueverit eu. Mei amet prima no, quis errem mediocritatem mel an, at duo ignota moderatius. In debet utamur eripuit sea. Sea ut consul mediocrem petentium. Ne accusamus principes vim.'

    },

    {
        id: '3',
        src: '/img/vinales.jpeg',
        alt: 'img vinales',
        title: 'Viñales',
        slug: 'vinales',
         text: 'Lorem ipsum dolor sit amet, est melius feugait ut, at tota movet conceptam vis. Suas maiorum periculis ne sit. Eu ullum omittantur has, et eos ullum noster labores. Nemore debitis comprehensam sed ei, no posse eirmod pro. Sea at homero delicatissimi, fugit zril no vel. Tota prima labore mel ne, mea id reformidans consectetuer, viris sapientem ullamcorper no nam. Putent mnesarchum ea eos. Te vix ocurreret definitiones, ius ex eligendi erroribus.' +
            ' Ne vis eirmod audiam appareat, veniam ocurreret splendide ei vis. No his alii denique mediocritatem, evertitur voluptatibus id sea.Ex dicit graecis partiendo cum, et vel ridens consequuntur, sea te tractatos philosophia. Ei cum velit legere, prima essent insolens ut his, duo graeco verear gloriatur ne. Evertitur comprehensam mel at, ea illum libris quo. Nominavi explicari ea sit. Est ne discere nusquam consequuntur.Quem repudiare ut sea, ex qui ferri dolore laboramus. An ridens voluptua consequuntur vel, ut legere euismod invidunt per. Ad sed homero facilis. ' +
            'Ei nisl pericula mea, ad nonumy corpora sea. No expetendis sadipscing his. Quidam nostrum efficiendi ut nam, sit ocurreret assueverit eu. Mei amet prima no, quis errem mediocritatem mel an, at duo ignota moderatius. In debet utamur eripuit sea. Sea ut consul mediocrem petentium. Ne accusamus principes vim.'

    },
]


export default function personHandler({query: {id}}, res) {
    const filtered = data.filter((p) => p.slug === id);

    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Hotel with id: ${id} not found.`})
    }
}
