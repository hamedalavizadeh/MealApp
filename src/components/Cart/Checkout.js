import React, { useRef, useState } from 'react';

import classes from './Checkout.module.css';


const Checkout = (props) => {
    const yourName = useRef();
    const yourStreet = useRef();
    const yourPostal = useRef();
    const yourCity = useRef();

    const [data, setData] = useState({
        name: '',
        street: '',
        postal: '',
        city: ''
    });

    const confirmHandler = (event) => {
        event.preventDefault();

        const enterName = yourName.current.value;
        const enterStreet = yourStreet.current.value;
        const enterPostal = yourPostal.current.value;
        const enterCity = yourCity.current.value;


        setData({
            name: enterName,
            street: enterStreet,
            postal: enterPostal,
            city: enterCity
        })

        props.confirm({
            name: enterName,
            street: enterStreet,
            postal: enterPostal,
            city: enterCity
        })

        yourName.current.value = '';
        yourStreet.current.value = '';
        yourPostal.current.value = '';
        yourCity.current.value = '';
    }


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id="name" ref={yourName} />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Your street</label>
                <input type='text' id="street" ref={yourStreet} />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Your postal</label>
                <input type='text' id="postal" ref={yourPostal} />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>Your city</label>
                <input type='text' id="city" ref={yourCity} />
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confrim</button>
            </div>
        </form>
    )
}

export default Checkout;