import React, { useEffect, useState } from 'react'
import styles from "../style/commen/downToUp.module.css"
import { FaCircleChevronUp } from 'react-icons/fa6';

function DownToUp() {

    const [scroll, setScroll] = useState(window.scrollY)


    function handleTop() {
        window.scroll(0, 0)
    }


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
    }, [scroll])

    return (
        <div >
            { scroll > 400 && <button className={ styles.container } onClick={ handleTop }><FaCircleChevronUp /></button> }
        </div>
    )
}

export default DownToUp

