import React, {useState, useEffect}  from 'react';
import '../Styles/components/checkOut.css';
import Paypal from 'paypal-checkout';
import Braintree from 'braintree-web';
import Client from 'braintree-web/client';
import paypalCheckout from 'braintree-web/paypal-checkout';
import {Elements, CardElement,  useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

 
const stripePromise = loadStripe('pk_test_Qy6uIqE3a6pG8GzGH4Xx1QCr00SK89OIVE');

const CheckOut = (props) => {
    const [name, setName] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    let shippingAddress = {
        recipientName: name,
        line1: add1,
        line2: add2,
        city: city,
        countryCode: 'CO',
        postalCode: '110919',
        state: 'CU',
        phone: phone,
        email: email
    };


    const total = props.location.cost;
    const api_paypal = 'https://api.kod3rsstore.com/api/payment/paypal/checkout'
    const api_token = 'https://api.kod3rsstore.com/api/payment/paypal/client-token'
    
    async function startPaypal(){
        let client_key_token;
        try{
            const response = await fetch(api_token);
            const data = await response.json();
            client_key_token = data.body;
        }catch(error){
            throw error;
        }

        Paypal.Button.render({
            braintree:  {
                client: Client,
                paypalCheckout: paypalCheckout
            },
            client: {
                production: 'CLIENT_TOKEN_FROM_SERVER',
                sandbox: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNklrRjFkR2g1SW4wLmV5SmxlSEFpT2pFMU9URXpOelV3TVRZc0ltcDBhU0k2SWpneU1qRmxPVEk0TFdWak4yWXRORGd6WkMwNE1HTmxMV1l6T0RFME1qVXhNall5TUNJc0luTjFZaUk2SW1nM2QyTjBNMjAwZERNMWVYQjNNbmdpTENKcGMzTWlPaUpCZFhSb2VTSXNJbTFsY21Ob1lXNTBJanA3SW5CMVlteHBZMTlwWkNJNkltZzNkMk4wTTIwMGRETTFlWEIzTW5naUxDSjJaWEpwWm5sZlkyRnlaRjlpZVY5a1pXWmhkV3gwSWpwbVlXeHpaWDBzSW5KcFoyaDBjeUk2V3lKdFlXNWhaMlZmZG1GMWJIUWlYU3dpYjNCMGFXOXVjeUk2ZTMxOS5qQWV4cDdQREFrbGk5ckoyY08zanNkNkZvWWtOWlhpNkRiU2tqRDRnVXJNY196anhDcmZ5Yjd5cFFXZ1ZjUXFiVWQ2OU5WZ0I4V3VLUXoweC1GNDhsQSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9oN3djdDNtNHQzNXlwdzJ4L2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJmZWF0dXJlcyI6WyJ0b2tlbml6ZV9jcmVkaXRfY2FyZHMiXSwiZGF0ZSI6IjIwMTgtMDUtMDgifSwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL2g3d2N0M200dDM1eXB3MngvY2xpZW50X2FwaSIsImVudmlyb25tZW50Ijoic2FuZGJveCIsIm1lcmNoYW50SWQiOiJoN3djdDNtNHQzNXlwdzJ4IiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJ2ZW5tbyI6Im9mZiIsImNoYWxsZW5nZXMiOltdLCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vb3JpZ2luLWFuYWx5dGljcy1zYW5kLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vaDd3Y3QzbTR0MzV5cHcyeCJ9LCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJlbnZpcm9ubWVudE5vTmV0d29yayI6ZmFsc2UsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJhbGxvd0h0dHAiOnRydWUsImRpc3BsYXlOYW1lIjoiSm9obiBEb2UncyBUZXN0IFN0b3JlIiwiY2xpZW50SWQiOiJBWTY0dGFkZG1heE5FOTc2cWlhQ09CSENmd25lN3ozNll3RVp3QVVNdUN3QzlOeE1jdEtWWWxIcXE3c0VlaEIzNV94c3QtOHJQOXRtUmw0NSIsInByaXZhY3lVcmwiOiJodHRwczovL2V4YW1wbGUuY29tIiwidXNlckFncmVlbWVudFVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20iLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJtZXJjaGFudEFjY291bnRJZCI6IlVTRCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9fQ=='
                //sandbox: client_key_token,
            },
            env: 'sandbox', // Or 'production'
            commit: true, // This will add the transaction amount to the PayPal button

            payment: function (data, actions) {
                    return actions.braintree.create({
                        flow: 'checkout', // Required
                        amount: total, // Required
                        currency: 'USD', // Required
                        enableShippingAddress: true,
                        shippingAddressEditable: false
                    });
            },

            
            onAuthorize: function (data, actions) {
                    const dataTosend = {
                        nonce: data.nonce,
                        amount: total,
                    }
                    fetch(api_paypal, {
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(dataTosend), // data can be `string` or {object}!
                        headers:{
                            'Content-Type': 'application/json'
                        }
                        }).then(res => res.json())
                        .catch(error => console.error('Error:', error))
                        .then(response => console.log('Success:', response));
            },
        }, '#paypal-button');

    }
    
    useEffect(() => {   
            startPaypal();        
    }, [])

      function handleChange(event){
        switch(event.target.name){
            case 'email':
                setEmail(event.target.value)                
            break;
            case 'add1':
                setAdd1(event.target.value)  
                console.log(typeof(add1))              
            break;
            case 'add2':
                setAdd2(event.target.value)                
            break;
            case 'name':
                setName(event.target.value)                 
            break;
            case 'phone':
                setPhone(event.target.value)                
            break;
            case 'city':
                setCity(event.target.value)                
            break;
            default:
                break;
        }
      }

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
                            <input onChange={handleChange} type="text" name="name" />
                        </label>
                        <label>
                            Add Line1:
                            <input onChange={handleChange} type="text" name="add1" />
                        </label>
                        <label>
                            Add Line2:
                            <input onChange={handleChange} type="text" name="add2" />
                        </label>
                        <label>
                            City:
                            <input onChange={handleChange} type="text" name="city" />
                        </label>
                        <label>
                            Phone:
                            <input onChange={handleChange} type="text" name="phone" />
                        </label>
                        <label>
                            email:
                            <input onChange={handleChange} type="text" name="email" />
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
