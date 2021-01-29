import Head from 'next/head';
import Navbar from "./navbar";
import Footer from "./footer";



export default function Layout({children}) {
    return (
        <div>
            <Head>
                 <meta name="viewport"
                      content="width=device-width, initial-scale=1"/>
                 <meta property="og:title"
                      content="Enjoy Cuba"
                      key="cuba"/>

                <meta name="title"
                      content="Enjoy - Viajes a Cuba"/>
                <meta name="description"
                      content="Descubre un país con alma, con mucho ritmo, vistas coloridas y rincones desconocidos"/>


                <meta property="og:type"
                      content="website"/>
                <meta property="og:url"
                      content="https://metatags.io/"/>
                <meta property="og:title"
                      content="Enjoy - Viajes a Cuba"/>
                <meta property="og:description"
                      content="Descubre un país con alma, con mucho ritmo, vistas coloridas y rincones desconocidos"/>
                <meta property="og:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>


                <meta property="twitter:card"
                      content="summary_large_image"/>
                <meta property="twitter:url"
                      content="https://metatags.io/"/>
                <meta property="twitter:title"
                      content="Enjoy - Viajes a Cuba"/>
                <meta property="twitter:description"
                      content="Descubre un país con alma, con mucho ritmo, vistas coloridas y rincones desconocidos"/>
                <meta property="twitter:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
                <title>Enjoy - Viajes a Cuba</title>

                <link rel="preconnect"
                      href="https://fonts.gstatic.com/"
                      crossOrigin/>

                <link rel="preload" href="http://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap" as="font"
                      crossOrigin/>

            </Head>

            <Navbar/>

            <main className='main'>
                {children}
            </main>

            <Footer/>
        </div>
    )
}