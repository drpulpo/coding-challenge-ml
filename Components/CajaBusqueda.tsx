import styles from '../styles/CajaBusqueda.module.css';
import {useState} from 'react';
import { useRouter } from "next/router";



export default function CajaBusqueda(){
    const [palabraBuscada, setPalabraBuscada] = useState('');
    const router = useRouter();

    const handleSearchClick=(event:any)=>{
        event.preventDefault();
        router.push(`/items?search=${palabraBuscada}`)
    }

    const handlePalabraBuscadaChange=(event:any)=>{
        setPalabraBuscada(event.target.value);
    }

    return(
            <header className={styles.navHeader}>
                <div className={styles.navHeaderContainer}>
                    <div className={styles.navSpacer}>
                    </div>
                    <div className={styles.navLogoSearchContainer}>
                        <a className={styles.navLogo} href="//www.mercadolibre.com.mx" >
                            Mercado Libre México - Donde comprar y vender de todo
                        </a>
                        <div className={styles.searchForm}>
                            <div className={styles.navInputContainer}>
                                <input type="text" className={styles.navSearchInput} value={palabraBuscada} onChange={handlePalabraBuscadaChange} aria-label="Ingresa lo que quieras encontrar" placeholder="Nunca dejes de buscar" />
                            </div>
                            <div className={styles.navButtonContainer}>
                                <button type="submit" className={styles.navSearchButton} onClick={handleSearchClick}>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navSpacer}>
                    </div>
                </div>
            </header>
    )
}