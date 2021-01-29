import Viajero_card from "../cards/Viajero_card";

const Viajero_list = () => {

    const data = [
        {
            id: 1,
            title: 'Sol y mar en Varadero',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
            user_img: "/img/avatar-1.jpg",
            user_name: "Óscar Amaya",
            date: "Jun 20, 2021",
        },

        {
            id: 2,
            title: 'Sol y mar en Varadero',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
            user_img: "/img/avatar-1.jpg",
            user_name: "Óscar Amaya",
            date: "Jun 20, 2021",
        },


        {
            id: 3,
            title: 'Sol y mar en Varadero',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
            user_img: "/img/avatar-1.jpg",
            user_name: "Óscar Amaya",
            date: "Jun 20, 2021",
        },

        {
            id: 4,
            title: 'Sol y mar en Varadero',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
            user_img: "/img/avatar-1.jpg",
            user_name: "Óscar Amaya",
            date: "Jun 20, 2021",
        },



    ];


    return (
        <div className="columns mr-0 scroll">


            {
                data.map(
                    (item) =>

                        <div className="column" key={item.id}>

                            <Viajero_card
                                title={item.title}
                                text={item.text}
                                user_img={item.user_img}
                                user_name={item.user_name}
                                date={item.date}


                            />

                        </div>
                )
            }


        </div>
    );
}

export default Viajero_list;