"use client"
import styles from './HomeScreenHeader.module.css'
import Utilities from '../Utilities';
import Resources from '@/app/resources/resources';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function HomeScreenHeader(
    setOpenMenu: any, 
    isGuestMode: any,
    showDetails: any=null,
    isHomescreen: boolean=false,
    setOpenFilter: any
) {

    let [isGuest, setIsGuest] = useState<boolean>(true)
    //console.log(Object.keys(isGuestMode).length != 0 ? isGuestMode : "no data")
    useEffect(() => {
        if (Object.keys(isGuestMode).length == 0 || isGuestMode["data"]["user"] == null) {
            setIsGuest(true)
        } else {
            setIsGuest(false)
        }
    })
    return (
        <div className={`${styles.homescreen__header}`}>
            <img className={`${styles.header__menuSandwichIcon}`} src={Resources.menuSandwichIcon.src} onClick={
                () => {
                    showDetails? showDetails(false):""
                    setOpenMenu(true)
                }
            }></img>
            {isHomescreen?"":<Link href={"/components/HomeScreen"}>
                <Utilities.VibeLogo></Utilities.VibeLogo>
            </Link>}
            {
                !isGuest ?
                    <Link href={"/components/SearchResults?query=wishlist"}>
                        <img className={`${styles.header__newSearch}`} src={Resources.wishlistIcon.src}></img>
                    </Link> :
                    <div onClick={() => {
                        alert("Please login to access wishlist")
                    }}>
                        <img className={`${styles.header__newSearch}`} src={Resources.wishlistIcon.src}></img>
                    </div>
            }
                <img 
                className={`${styles.header__newSearch}`}
                src={Resources.filterIcon.src}
                onClick={()=>{
                    setOpenFilter? setOpenFilter(true): ''
                }}
                ></img>
            </div>
    )
}