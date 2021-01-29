import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (

        <section className="section has-background-white footer p-0">
            <div className="container pt-0 pr-5 pb-0 pl-5">
                <hr />
                <div className="has-text-centered mt-6 mb-6 is-hidden-desktop">
                    <figure className="image is-inline-block logo mb-3">
                        <Link href='/'>
                            <a>
                                <Image src='/img/logo-footer.svg'
                                    width={163}
                                    height={40}
                                    alt={'logo footer'} />
                            </a>
                        </Link>
                    </figure>

                    <div className="field has-text-grey-darker">
                        <Link href='/'>
                            <a>
                                <span className="icon">
                                    <i className="icon-twitter has-text-purple"
                                        title="Twitter" />
                                </span>
                            </a>
                        </Link>

                        <Link href='/'>
                            <a>
                                <span className="icon">
                                    <i className="icon-facebook has-text-purple"
                                        title="Facebook" />
                                </span>
                            </a>
                        </Link>


                        <Link href='/'>
                            <a>
                                <span className="icon">
                                    <i className="icon-instagram has-text-purple"
                                        title="Instagram" />
                                </span>
                            </a>
                        </Link>


                        <Link href='/'>
                            <a>
                                <span className="icon">
                                    <i className="icon-linkedin has-text-purple"
                                        title="Linkedin" />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="columns mt-1 mb-1 is-flex-mobile">
                    <div className="column is-5 is-hidden-mobile">
                        <figure className="image logo mb-3">
                            <Link href='/'>
                                <a>
                                    <Image src='/img/logo-footer.svg'
                                        width={115}
                                        height={45}
                                        alt={'logo'} />
                                </a>
                            </Link>
                        </figure>
                        <div className="field has-text-grey-darker">

                            <Link href='/'>
                                <a>
                                    <span className="icon">
                                        <i className="icon-twitter has-text-purple"
                                            title="Twitter" />
                                    </span>

                                </a>
                            </Link>


                            <Link href='/'>
                                <a>
                                    <span className="icon">
                                        <i className="icon-facebook has-text-purple"
                                            title="Facebook" />
                                    </span>
                                </a>
                            </Link>


                            <Link href='/'>
                                <a>
                                    <span className="icon">
                                        <i className="icon-instagram has-text-purple"
                                            title="Instagram" />
                                    </span>
                                </a>
                            </Link>

                            <Link href='/'>
                                <a>
                                    <span className="icon  ">
                                        <i className="icon-linkedin has-text-purple"
                                            title="Linkedin" />
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="column is-hidden-touch">
                        {/* <h3 className="title">Productos</h3>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <a>Hoteles</a>
                                </Link>

                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Casas Particulares</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Excursiones</a>

                                </Link></li>
                            <li>
                                <Link href='/'>
                                    <a>Traslados</a>

                                </Link></li>
                        </ul> */}
                    </div>
                    <div className="column">
                        <h6 className="title">Enjoy</h6>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <a>España</a>
                                </Link></li>
                            <li>
                                <Link href='/'>
                                    <a>México</a>
                                </Link>

                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Colombia </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Italia </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Portugal </a>
                                </Link>

                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Rusia </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Chile
                                    </a>
                                </Link>

                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h6 className="title">Más</h6>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <a>About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <a>Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Contact</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a >Mapa del Sitio</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Privacidad</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Terminos & Condiciones</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-2 has-bg-blue-footer">
                <div className=" has-text-centered">
                    <span className="font-10">© {new Date().getFullYear()} Enjoy Cuba. Todos los derechos reservados.</span>
                </div>
            </div>
        </section>

    )
}

export default Footer;