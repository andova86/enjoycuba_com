
import Link from 'next/link'


const Destino_Secundario_card = (props) => {
    return (
         <Link href="/destination/[slug]" as={`/destination/${props.slug}`}>
            <a>
                 <div className="card">
                    <h3 className="has-text-weight-medium is-text-overflow mb-0">Viaje a {props.title}</h3>
                </div>
            </a>
        </Link>

    );
}

export default Destino_Secundario_card;