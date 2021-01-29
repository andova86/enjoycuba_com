import Image from 'next/image'
import Link from 'next/link'


const Personalizado_card = (props) => {
    return (
        <Link href="/trips/[slug]" as={`/trips/${props.slug}`}>
            <a>
                <div className="card" key={props.key}>

                    <div className="card-price mt-3 mr-3 pl-1 pr-1 has-text-purple-dark">
                        <div className="has-text-right mr-1 prefix">
                            <div className="is-uppercase has-text-weight-light ">desde</div>
                            <div className="is-uppercase has-text-weight-bold">usd</div>
                        </div>
                        <div className="price">
                            <span className="has-text-weight-bold">{props.price}</span>
                        </div>
                    </div>

                    <div className="card-image">
                        <figure className="image">
                            <Image src="/img/vinales-cuba.jpeg"
                                alt="9 dias en cuba & Occidente de Cuba" width={247} height={160} />
                        </figure>
                    </div>

                    <div className="card-content">
                        <div className="content">
                            <h3 className="subtitle">{props.days}</h3>

                            <h2 className="title is-text-overflow">{props.title}
                            </h2>

                            <span className="location is-hidden-mobile"><i className="icon-location" /> {props.location}
                            </span>
                            <p>
                                {props.desc}
                            </p>
                            <hr className="m-4 is-hidden-touch" />
                            <div className="media avatar pl-1 pr-1 mb-0 is-hidden-touch">
                                <div className="media-left m-1">
                                    <figure className="image is-48x48 mr-1 ml-1">
                                        <Image className="is-rounded"
                                            src={props.author_img}
                                            alt="img "
                                            width={50}
                                            height={50} />
                                    </figure>
                                </div>
                                <div className="media-content m-1 ">
                                    <h5 className="name mb-0">{props.author}</h5>
                                    <p className="mt-0">{props.author_desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="level is-mobile">
                            <div className="level-left is-hidden-touch">
                                <div className="field is-flex">


                                    <Image src="/img/airplane.svg"
                                        alt="ico exp"
                                        width={24}
                                        height={24}
                                        className={'p-1'}
                                    />

                                    <Image src="/img/bed.svg"
                                        alt="ico taxi"
                                        width={24}
                                        height={24}
                                        className={'p-1'}
                                    />

                                    <Image src="/img/car.svg"
                                        alt="ico taxi"
                                        width={24}
                                        height={24}
                                        className={'p-1'}
                                    />


                                </div>
                            </div>
                            <div className="level-right">
                                <div className="field m-1 is-flex is-align-items-center">
                                    <Image src="/img/comment.svg"
                                        alt="ico comment"
                                        width={16}
                                        height={16} />
                                    <div className="icon ">

                                        <span className="has-text-white has-text-weight-bold is-size-7 ml-2">
                                            {props.comments}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </a>
        </Link>


    );
}

export default Personalizado_card;