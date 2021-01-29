import Personalizado_card from "../cards/Personalizado_card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Personalizados_list = (props) => {


 const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5.5
        },

        desktop: {
            breakpoint: {max: 2000, min: 1024},
            items: 4.5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3.5
        },
        mobile: {
            breakpoint: {max: 464, min: 331},
            items: 1.3,

        },
        mini_mobile: {
            breakpoint: {max: 330, min: 0},
            items: 1,

        }
    };

    return (
         <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            autoPlay={false}
            centerMode={false}
            arrows={true}


            ssr={true} // means to render carousel on server-side.
            infinite={false}
            //autoPlay={this.props.deviceType !== "mobile"}
            autoPlaySpeed={5000}
            //keyBoardControl={true}


            containerClass="container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            //itemClass="border-primary"
            responsive={responsive}

        >



            {
                props.data.map(
                    (item) =>

                        <div className="column" key={item.id}>
                            <Personalizado_card
                                price={item.price}
                                comments={item.comments}
                                days={item.days}
                                title={item.title}
                                location={item.location}
                                desc={item.desc}
                                author={item.author}
                                author_desc={item.author_desc}
                                author_img={item.author_img}
                                slug={item.slug}



                            />
                        </div>
                )
            }



              </Carousel>
    );
}

export default Personalizados_list;