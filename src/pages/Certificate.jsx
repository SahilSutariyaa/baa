import React from 'react'
import style from '../style/components/Certificate/certificate.module.css'

const Certificate = () => {
    const data = [
        {
            title: "Certificate of Achievement",
            organization: "GST Certification Authority",
            date: "September 26, 2024"
        },
        {
            title: "Trademark Registration",
            organization: "Trademark Office",
            date: "September 26, 2024"
        },
        {
            title: "ISO 9001 Certification",
            organization: "ISO Certification Body",
            date: "September 26, 2024"
        }
    ]
    return (
        <>
            <div>
                <h1 className={style.data}>Certificates</h1>
                { data.map((item, index) => (
                    <div key={ index } className={ style.certificate }>
                        <h2 className={ style.title }>{ item.title }</h2>
                        <p className={ style.organization }>{ item.organization }</p>
                        <p className={ style.date }>{ item.date }</p>
                        <div className={ style.footer }>
                            <p>Authorized Signature</p>
                        </div>
                    </div>
                )) }
            </div>
        </>
    )
}

export default Certificate
