import Link from "next/link";

const Sitio_card = (props) => {

    return (
        <Link href="/">
            <a className='button sitio_card is-primary'>
                <div className='sitio_card_body'>
                     <p className='sitio_card_body_title'>{props.title}</p>
                </div>


            </a>
        </Link>
    )

};
export  default Sitio_card