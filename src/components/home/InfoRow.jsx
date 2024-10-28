import React from 'react'
import style from '../../style/components/Home/InfoRow.module.css'

const InfoRow = ({ title, description, img, side }) => {
    return (
        <>
            { side ?

                <div className={ style.mainContainer }>
                    <div className={ style.firstContainer }>
                        <h2>{ title }</h2>
                        <p>{ description }</p>
                    </div>
                    <div className={ style.secondContainer }>
                        <div className={ style.imgContainer }>
                            <img src={ img } alt="img1" />
                        </div>
                    </div>
                </div>
                :
                <div className={ style.mainContainer }>
                    <div className={ style.secondContainer }>
                        <div className={ style.imgContainer }>
                            <img src={ img } alt="img1" />
                        </div>
                    </div>
                    <div className={ style.firstContainer }>
                        <h2>{ title }</h2>
                        <p>{ description }</p>
                    </div>

                </div> }
        </>
    )
}

export default InfoRow
