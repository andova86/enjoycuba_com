import Image from 'next/image'
import Link from 'next/link'




const Destinos_card = (props) => {




    return (
         <Link
            href={{
              pathname: '/destination/[slug]',
              query: { slug: props.slug, id: props.key,},

            }}
            as={`/destination/${props.slug}`}
          >

            <a>
                <div className="card ">
                    <div className="card-image">
                    <Image
                                        src={props.src}
                                       layout='fill'
                                        alt={props.alt}
                                    />

                    </div>
                    <div className="card-content">
                        <div className="content">

                                <h3 className="title is-text-overflow mb-0"><span className="subtitle">Viaje a</span>
                                    <br /> {props.title}
                                </h3>

                        </div>
                    </div>
                </div>
            </a>
        </Link>

    );
}

export default Destinos_card;