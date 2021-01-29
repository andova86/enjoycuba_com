import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand is-align-items-center">
                    <Link href='/'>
                        <a>
                            <Image src='/img/logo.svg'
                                width={163}
                                height={40}
                                alt={'logo'} />
                        </a>
                    </Link>

                    <div className='is-flex is-hidden-mobile is-align-items-center'>
                        <Link href='/'>
                            <a>
                                <h1 className="subtitle has-text-weight-normal mb-0"><strong className="title ">
                                    Viajes a Cuba </strong> a la Medida ›

                                </h1>
                            </a>
                        </Link>

                        <p className="navbar-item is-hidden-mobile has-text-blue-dark has-text-weight-normal">
                            de Lujo
                        </p>


                    </div>


                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input has-background-grey-lighter"
                                        type="text"
                                        placeholder="Search" />
                                    <span className="icon is-samll is-left">
                                        <Image src="/img/search.svg"
                                            width={36}
                                            height={36}
                                            alt={'Search'} />
                                    </span>
                                    <span className="icon is-small is-right">
                                        <Image src="/img/custom-search.svg"
                                            width={36}
                                            height={36}
                                            alt={'Custom Search'} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;