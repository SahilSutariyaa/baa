import React, { useState } from 'react'
import styles from '../style/commen/paymentDetails.module.css'
import axios from 'axios'



const PaymentDetails = () => {
    const [allData, setAllData] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [cvv, setCvc] = useState("")
    const [ok, setOk] = useState(true)
    const [bank, setBank] = useState("")

    const [shipName, setShipName] = useState("")
    const [shipNumber, setShipNumber] = useState("")
    const [shipEmail, setShipEmail] = useState("")
    const [shipAddress, setShipAddress] = useState("")
    const [shipCity, setShipCity] = useState("")
    const [shipState, setShipState] = useState("")
    const [shipPincode, setShipPincode] = useState("")
    const [shipCountry, setShipCountry] = useState("")
    const [shipMessage, setShipMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Name: shipName,
            Number: shipNumber,
            Email: shipEmail,
            Address: shipAddress,
            City: shipCity,
            State: shipState,
            Pincode: shipPincode,
            Country: shipCountry,
            Message: shipMessage,

        }
        axios.post('https://api.sheetbest.com/sheets/3fb716b1-17dd-49c5-8a74-333cc18b2027', data).then((response) => {
            console.log(response.data);
            setShipName('');
            setShipNumber('');
            setShipEmail('');
            setShipAddress('');
            setShipCity('');
            setShipState('');
            setShipPincode('');
            setShipCountry('');
            setShipMessage('');
        })


    };

    const clickTochange = (event) => {
        setAllData(event.target.value)
    }
    const handleChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        let formattedInput = '';
    
        // Format the input
        for (let i = 0; i < input.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formattedInput += ' '; // Add space after every 4 digits
          }
          formattedInput += input[i];
        }
    
        // Update state
        setNumber(formattedInput);
      };
    const clickTodate = (event) => {
        setDate(event.target.value)
    }
    const clickTocvc = (event) => {
        setCvc(event.target.value)
    }

    return (
        <>
            <div className={ styles.mainData }>
                <div className={ styles.formContainer }>

                    <h2>Buyer Shipping Details</h2>
                    <form onSubmit={ handleSubmit }>
                        <div>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={ shipName }
                                    onChange={ (e) => setShipName(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Number:
                                <input
                                    type="text"
                                    name="number"
                                    value={ shipNumber }
                                    onChange={ (e) => setShipNumber(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={ shipEmail }
                                    onChange={ (e) => setShipEmail(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={ shipAddress }
                                    onChange={ (e) => setShipAddress(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Country:
                                <input
                                    type="text"
                                    name="Country"
                                    value={ shipCountry }
                                    onChange={ (e) => setShipCountry(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                State :
                                <input
                                    type="text"
                                    name="State"
                                    value={ shipState }
                                    onChange={ (e) => setShipState(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                City :
                                <input
                                    type="text"
                                    name="City"
                                    value={ shipCity }
                                    onChange={ (e) => setShipCity(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Pincode :
                                <input
                                    type="number"
                                    name="Pincode"
                                    value={ shipPincode }
                                    onChange={ (e) => setShipPincode(e.target.value) }
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={ shipMessage }
                                    onChange={ (e) => setShipMessage(e.target.value) }
                                    required
                                />
                            </label>
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>


                <div className={ styles.cardContainer }>
                    <h2>Payment Details</h2>
                    {
                        <div>
                            {
                                ok ?
                                    <div className={ styles.card }>
                                        <div className={ styles.phto }>

                                            <h3>{ bank === '' ? "Enter Your Bank Name" : bank }</h3>
                                        </div>
                                        <div className={ styles.rccs__number }>{ number === '' ? "•••• •••• •••• ••••" : number }</div>
                                        <div className={ styles.name }>
                                            <div>{ allData === '' ? "Enter your Name" : allData }</div>
                                            <div>
                                                <div>valid thru</div>
                                                <div >{ date === '' ? "••/••" : date }</div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className={ styles.back }>
                                        <div className={ styles.inback }></div>
                                        <div className={ styles.outback }>
                                            <h4>{ cvv.length === 3 ? cvv : "cvv " }</h4>
                                        </div>
                                    </div>
                            }
                        </div>
                    }
                    <div className={ styles.main }>
                        <form action="">
                            <div className={ styles.valid }>
                                <label htmlFor="">
                                    Bank Name:
                                    <input
                                        value={ bank }
                                        onChange={ (e) => setBank(e.target.value) }
                                        required
                                        type="text"
                                        placeholder='Enter your Name' />

                                </label>
                            </div>
                            <div className={ styles.valid }>
                                <label htmlFor="">
                                    Name on card:
                                    <input
                                        value={ allData }
                                        onChange={ clickTochange }
                                        required
                                        type="text"
                                        placeholder='Enter your Name' />

                                </label>
                            </div>
                            <div className={ styles.valid }>

                                <label htmlFor="">
                                    Card Number:
                                    <input
                                        value={ number }
                                        onChange={ handleChange }
                                        required
                                        type="text"
                                        maxLength={19} 
                                        placeholder='EnterCard Number' />

                                </label>
                            </div>
                            <div className={ styles.valid }>

                                <label htmlFor="">
                                    Expiration Date:
                                    <input
                                        value={ date }
                                        onChange={ clickTodate }
                                        required
                                        type="month"
                                        placeholder='Valid Thru' />

                                </label>
                            </div>
                            <div className={ styles.valid }>
                                <label htmlFor="name" >
                                    CVC:
                                    <input
                                        onChange={ clickTocvc }
                                        // onBlur={ () => setBack(true) }
                                        onFocus={ () => setOk(!ok) }
                                        value={ cvv }
                                        required
                                        type="text"
                                        maxLength={3}
                                        placeholder='CVC' />
                                </label>
                                <div className={ styles.validBtn }>
                                    <input type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentDetails

