import Image from 'next/image'
import Link from 'next/link'

const Viajes_card = (props) => {
    return (
        <Link href={props.url}>
            <a>
                <div className="card shadow-sm">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <Image
                                    src={props.src}
                                    width={32}
                                    height={32}
                                    alt={props.alt}
                                />
                            </div>
                            <div className="media-content">
                                <h2 className="is-text-overflow">
                                    <p className="title">Viajes</p>
                                    <p className="subtitle">{props.title}</p>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default Viajes_card;