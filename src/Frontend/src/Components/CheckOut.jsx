import React, {useState, useEffect}  from 'react';
import '../Styles/components/checkOut.css';
import { Link } from 'react-router-dom';

const CheckOut = (props) => {
    const {total} = props; 


    

      return(
      
        <section className="CheckOut">
            <div className="CheckOut-container">
                <div className="CheckOut-total">
                    <div>Order amount --> {total}</div>
                </div>
                <div className="CheckOut-form-address-container">
                    <form className="CheckOut-form-address">
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Address Line1:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Address Line2:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            City:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Phone:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            email Address:
                            <input type="text" name="name" />
                        </label>
                    </form>
                </div>
                <div className="CheckOut__payment-options">
                    <div id="paypal-button">

                    </div>
                </div>
            </div>
        </section>
      
    );
  }

  export default CheckOut;
