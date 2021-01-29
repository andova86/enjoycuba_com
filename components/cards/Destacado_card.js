import Image from 'next/image'
import Link from 'next/link'


const Destacado_card = (props) => {


    return (


        <Link href="/destination/[slug]" as={`/destination/${props.slug}`}>
            <a className="text-decoration-none ">
                <div className="destacado_card  mb-3">
                    <div className='destacado_card_header position-relative' key={props.id}>
                        <Image
                            src={props.img}
                            alt="Picture of the author"
                            width={193}
                            height={155}
                            className="img_main"

                        />
                        <div className='star-pos'>
                            <Image
                                src={'/img/star-5.svg'}
                                alt="start"
                                width={24}
                                height={24}

                            />
                        </div>


                    </div>


                    <div className="destacado_card_body ">

                        <p className="destacado_card_place_title">
                            {props.title}
                        </p>
                        <p className="destacado_card_place_subtitle"> {props.subtitle}</p>



                    </div>

                    <div className='destacado_card_footer'>
                        <p className='destacado_card_footer_text has-text-weight-medium '>{props.text}</p>

                        <p className='destacado_card_footer_value'> <span className='destacado_card_footer_currency'>USD</span> {props.value}</p>
                    </div>


                </div>
            </a>


        </Link>


    );
}

export default Destacado_card;