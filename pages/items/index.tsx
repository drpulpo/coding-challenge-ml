import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import CajaBusqueda from '../../Components/CajaBusqueda'
import Breadcrumb from "../../Components/Breadcrumb";


// This gets called on every request
export async function getServerSideProps(context:any) {
    // Fetch data from external API
    //console.log(context)
    const res = await fetch(`http://localhost:3000/api/items?q=:${context.query.search}`)
    const data = await res.json()
    const items = data.results.slice(0,4)

    // Pass data to the page via props
    return { props: { items } }
}

export default function ItemListPage({ items }:any) {
    return (
        <div className={styles.container}>
            <Head>
            <title>Create Next App</title>
            <meta name="description" content="code-challenge"/>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <CajaBusqueda/>
                <Breadcrumb />
                <ul>
                    {items.map((item:any) => (
                            <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </main>
        </div>
    )
}
