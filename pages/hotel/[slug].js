import Image from 'next/image'
import Layout from "../../components/base/layout";
import HotelDetailsMenu_List from "../../components/list/HotelDetailsMenu_List";


const HotelDetails = ({ detail }) => {
    return (
        <Layout>
            <section className='section'>
                <div className='container p-5 custom-background has-background-grey-lighter '>
                    <div className="columns is-centered is-multiline">
                        <div className="column  is-full">
                            <HotelDetailsMenu_List />
                        </div>
                        <div className='column is-half-desktop'>
                            <img src={detail.src} alt={detail.title} className='br-10 img_resp' />
                        </div>

                        <div className='column is-half-desktop'>
                            <p className='has-text-purple-enjoy pb-1 title is-3'>Acerca de {detail.title}</p>
                            <ReadMore text={detail.text} />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='section'>
                <div className='container'>
                    <div className='columns is-multiline'>
                        <div className="column  is-full">
                            <Category_list destacados={destacados} category={'Hoteles'}/>

                        </div>

                        <div className='column is-full'>
                            <div className="main-destinations">
                                <div className="destinations">
                                    <h2 className="title is-5 has-text-weight-normal has-text-purple-dark">Destinos en Cuba</h2>
                                     <Destinos_list destinos={destinos}/>
                                </div>
                            </div>

                            <div className="other-destinations mt-6 mb-6">

                                <Destinos_secundarios_list/>
                            </div>

                        </div>
                    </div>
                </div>

            </section> */}
        </Layout>
    )
}

export async function getStaticPaths() {


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
}



export async function getStaticProps({ params }) {

    console.log(`El contexto: `)
    console.log(params)

    const res = await fetch(`http://127.0.0.1:3000/api/hotel/${params.slug}`)
    const post = await res.json()

    const allPosts = (await getAllDestinations()) || []
    const allDestacados = (await getAllDestacadosByCategoria('Hoteles')) || []


    console.log(`Los destacados: `)
    console.log(allDestacados)
    return { props: { detail: post, destinos: allPosts, destacados: allDestacados } }

}

export default HotelDetails;
