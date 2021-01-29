import Layout from "../components/base/layout";
import Viajes_list from '../components/list/Viajes_list';
import Destinos_list from '../components/list/Destinos_list';
import Destinos_secundarios_list from '../components/list/Destinos_secundarios_list';
import Image from "next/image";
import Link from "next/link";
import Personalizados_list from "../components/list/Personalizados_list";

import Viajero_list from "../components/list/Viajero_list";
import Category_list from "../components/list/Category_List";
import {getAllDestacadosByCategoria, getAllDestinations, getAllPersonalizados} from "../lib/api";
import Destinos_card from "../components/cards/destinos_card";
import Destination_detail from "./destination/[slug]";


export default function IndexPage({ destinations, personalizados, destacados  }) {

    return (
        <Layout>

           <section className="section p-0">
                <div className=" container p-5 has-background-grey-lighter custom-background">
                    <Viajes_list />
                    <div className="splash">
                        <h1 className="splash-header is-hidden-desktop is-hidden-tablet mt-4">Viajes a  Cuba  Fligth & Dry</h1>
                        <div className="container">
                            <div className="splash-image">
                                <Image src="/img/viajes-cuba-american-car.svg"
                                    width={480}
                                    height={360} alt={"viajes-cuba-american-car"}/>
                            </div>
                            <div className="splash-content">
                                <h2 className="header is-hidden-touch">Viajes a Cuba</h2>
                                <h2 className="title">100%</h2>
                                <h2 className="subtitle mb-0">auténtico <span className="decorator is-hidden-desktop"></span> carácter cubano</h2>
                                <span className="decorator is-hidden-touch" />
                                <h4 className="description is-hidden-touch">Descubre un país con alma, con mucho ritmo,<br />
                                vistas coloridas y rincones desconocidos.
                            </h4>
                                <button className="button is-hidden-touch has-background-purple has-text-white mt-5">
                                    Solicitar Presupuesto
                            </button>
                            </div>
                        </div>
                        <div className="has-text-centered is-hidden-desktop is-hidden-widescreen mb-5 mt-1">
                            <button className="button has-background-purple has-text-white">
                                Solicitar Presupuesto
                        </button>
                        </div>
                    </div>

                    <div className="main-destinations">
                        <h2 className="title is-5 has-text-weight-normal has-text-purple-dark">Destinos en Cuba</h2>
                        <Destinos_list destinos={destinations} />
                    </div>

                    <div className="other-destinations">
                        <h2 className="title is-6 is-hidden-desktop has-text-centered has-text-weight-normal has-text-purple-dark">Todos los destinos</h2>
                        <Destinos_secundarios_list />
                    </div>

                </div>
            </section>

            <section className="section mt-4 information">
                <div className="container pl-6 pr-6 pt-5 pb-5">
                    <h2 className="header has-text-purple-dark mb-4">Comprometidos de principio a fin</h2>
                    <div className="columns is-flex-mobile">
                        <div className="column">
                            <div className="card">
                                <div className="card-content has-text-centered p-0-mobile">
                                    <figure className="image is-inline-block is-48x48">
                                        <Image src="/img/quote.svg"
                                            alt="Cotización Inmediata"
                                            width={48}
                                            height={48} />
                                    </figure>
                                    <div className="content">
                                        <h4 className="title mb-1 ">Cotización Inmediata</h4>
                                        <p className="is-hidden-mobile ">Nuestro equipo se encuentra
                                        permanentemente
                                        operativo para
                                        darle una
                                        respuesta inmediata ante cualquier necesidad. Le ofrecemos un servicio
                                        totalmente personalizado,
                                        ajustado a sus necesidades, aportándole una cotización de su viaje en tiempo
                                        real.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-centered">
                            <div className="card">
                                <div className="card-content p-0-mobile">
                                    <figure className="image is-inline-block is-48x48">
                                        <Image src="/img/24-services.svg"
                                            alt="Atención Telefónica 24h"
                                            width={48}
                                            height={48} />
                                    </figure>
                                    <div className="content">
                                        <h4 className="title mb-1">Atención Telefónica 24h</h4>
                                        <p className="is-hidden-mobile">Le ofrecemos un servicio de
                                        atención telefónica 24
                                        horas en destino, a través de nuestro teléfono: +53 5 5923956. Mediante el
                                        cual, le acompañaremos en todo momento, para cubrir cualquier consulta o contingencia que pudiese
                                        derivarse, durante su
                                        estancia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-centered">
                            <div className="card">
                                <div className="card-content p-0-mobile">
                                    <figure className="image is-inline-block is-48x48">
                                        <Image src="/img/all-flexibility.svg"
                                            alt="Flexibilidad total"
                                            width={48}
                                            height={48} />
                                    </figure>
                                    <div className="content">
                                        <h4 className="title mb-1">Flexibilidad total</h4>
                                        <p className="is-hidden-mobile">Estamos a su servicio. Antes y durante su
                                        estancia,
                                        podrá
                                        solicitarnos cualquier detalle que requiera: reservas de restaurantes,
                                        servicio de baby sister,
                                        impresión de tarjetas, peticiones especiales todo lo que usted sueñe,
                                        durante su visita lo haremos
                                        realidad. 100% garantizado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section splash-middle">
                <div class="container pl-5 pr-5"> <hr /></div>
                <div className="container p-5 ">
                    <div className="columns is-centered is-mobile">
                        <div className="column has-text-centered">
                            <div class="splash-content">
                                <h2 className="title">Cuba</h2>
                                <h3 className="subtitle">al detalle</h3>
                                <span className="decorator" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container has-text-centered products">
                    <Category_list destacados={destacados} category={'Hotel'} />
                </div>
            </section>

            <section className="section mt-5">
                <div className="container p-5 custom-trips">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title has-text-weight-normal">Viajes Personalizados a Cuba
                            </h2>

                        </div>
                        <div className="level-right is-hidden-mobile">
                            <Link href={'/'}>
                                <a
                                    className="is-underline">
                                    <h4 className="has-text-weight-normal has-text-blue-dark">Ver todos los Viajes
                                    Personalizados »
                                </h4>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Personalizados_list data={personalizados} />
                    <div className="mt-2 is-hidden-desktop has-text-centered">
                        <Link href={'/'}>
                            <a className="is-underline">
                                <h4 className="link has-text-weight-normal has-text-blue-dark">Ver todos los Viajes
                                Personalizados »
                                </h4>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section mt-5">
                <div className="container pt-0 pl-5 pr-5 pb-0 testimonial">
                    <h2 className="title is-5 has-text-weight-normal has-text-purple-dark">De viajero a viajero</h2>
                    <Viajero_list />
                </div>
            </section>
        </Layout>
    )

};


/*export async function getStaticPaths({params}) {


 const res = await fetch('http://127.0.0.1:3000/api/hotel')
  const posts = await res.json()

  console.log(posts)
   // generate the paths
   const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))


    console.log(`Los paths son :`)
    console.log(paths)
   return {
      paths,
      fallback: true
   }
}*/


IndexPage.getInitialProps = async (ctx) => {

     const allPosts = (await getAllDestinations()) || []
     console.log("Los post")
     console.log(allPosts)

     const allPersonalizados = (await getAllPersonalizados()) || []
     const allDestacados = (await getAllDestacadosByCategoria('Hoteles')) || []
  console.log("*************Todos********")
    console.log(allPosts)

 return {
    destinations: allPosts, personalizados: allPersonalizados,destacados: allDestacados // will be passed to the page component as props
  }

}

