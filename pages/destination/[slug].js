import Image from 'next/image'
import Layout from "../../components/base/layout";

import Sitios_list from "../../components/list/Sitios_list";
import Category_list from "../../components/list/Category_List";

import Destinos_list from "../../components/list/Destinos_list";

import Destinos_secundarios_list from "../../components/list/Destinos_secundarios_list";
import ReadMore from "../../components/tools/ReadMore";

import {getAllDestacadosByCategoria, getAllDestinations, getAllPersonalizados} from "../../lib/api";



const Destination_detail = ({detail, destinos, destacados}) => {

    return (

       <Layout>

        {/* <pre> {JSON.stringify(detail,null,3)}</pre>*/}

            <section className='section pt-0'>

                <div className='container p-5 custom-background has-background-grey-lighter '>
                    <div className="columns is-centered is-multiline">
                        <div className="column has-text-centered is-full ">
                            <h2 className="is-size-1 has-text-weight-bold has-text-blue-dark lh-1">{detail.title}</h2>
                            <Image src="/img/line_fat.svg"
                                   width={200}
                                   height={50}
                                   alt={'line'}
                                   className={"lh-1"}

                            />

                        </div>

                        <div className="column  is-full">
                            <Sitios_list/>

                        </div>

                        <div className='column is-half-desktop'>
                            <img src={detail.src}
                                   alt={detail.title}


                                   className='br-10 img_resp'/>
                        </div>

                        <div className='column is-half-desktop'>
                            <p className='has-text-purple-enjoy pb-1 title is-3'>Acerca de {detail.title}</p>

                            <ReadMore text={detail.text}/>


                        </div>


                    </div>
                </div>


            </section>
            <section className='section'>
                <div className='container p-5'>
                    <div className='columns is-multiline'>
                        <div className="column  is-full mt-5 mb-5 products">
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

            </section>





        </Layout>
    )



}
/*

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

*/


Destination_detail.getInitialProps = async (ctx) => {



    const res = await fetch(`http://127.0.0.1:3000/api/hotel/${ctx.query.slug}`)
  const post = await res.json()

      console.log(`El post: `);
    console.log(post);

     const allPosts = (await getAllDestinations()) || []

     //console.log(`Los post: `)
    //console.log(allPosts)


     const allDestacados = (await getAllDestacadosByCategoria('Hoteles')) || []


     //console.log(`Los destacados: `)
    //console.log(allDestacados)
     return {  detail:post, destinos: allPosts, destacados: allDestacados}

}

export default Destination_detail;
