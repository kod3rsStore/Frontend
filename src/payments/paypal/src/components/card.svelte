<script>
    let paypal = require('paypal-checkout');
    let braintree = require('braintree-web');
    let client = require('braintree-web/client');
    let paypalCheckout = require('braintree-web/paypal-checkout');

    const api_paypal = 'http://localhost:3000/api/payment/paypal/checkout'

    let shippingAddress = {
        recipientName: 'Wilson Torres',
        line1: 'Carrera 20 # 19-56.',
        line2: 'Oficina 1409',
        city: 'Bogotá',
        countryCode: 'CO',
        postalCode: '110919',
        state: 'CU',
        phone: '123.456.7890'
    };

    let amount = '58.00';

    paypal.Button.render({
        braintree:  {
            client: client,
            paypalCheckout: paypalCheckout
        },
        client: {
            production: 'CLIENT_TOKEN_FROM_SERVER',
            sandbox: 'eyJ2ZXJzaW9uIjoyLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNklrRjFkR2g1SW4wLmV5SmxlSEFpT2pFMU9UQTNNakE0TnpFc0ltcDBhU0k2SWpoaE5EbGtabU5oTFRjeE1UZ3ROR1UxTVMwNU5HTTVMVFl5TTJWa04yTTBOR1ptWXlJc0luTjFZaUk2SW1nM2QyTjBNMjAwZERNMWVYQjNNbmdpTENKcGMzTWlPaUpCZFhSb2VTSXNJbTFsY21Ob1lXNTBJanA3SW5CMVlteHBZMTlwWkNJNkltZzNkMk4wTTIwMGRETTFlWEIzTW5naUxDSjJaWEpwWm5sZlkyRnlaRjlpZVY5a1pXWmhkV3gwSWpwbVlXeHpaWDBzSW5KcFoyaDBjeUk2V3lKdFlXNWhaMlZmZG1GMWJIUWlYU3dpYjNCMGFXOXVjeUk2ZTMxOS51bXZrX3hmR1BldnduY2FWdTRpTFdFS3JEVkp4Y0Z1QWJDaVdGOVNhcnBLZ1Jsdi03MFdnWFM2cDF5aFVIamdaRnZWa0hPQmk3MFJsR202TnFsRkJFZyIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9oN3djdDNtNHQzNXlwdzJ4L2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJkYXRlIjoiMjAxOC0wNS0wOCJ9LCJjaGFsbGVuZ2VzIjpbXSwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL2g3d2N0M200dDM1eXB3MngvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vb3JpZ2luLWFuYWx5dGljcy1zYW5kLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vaDd3Y3QzbTR0MzV5cHcyeCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiSm9obiBEb2UncyBUZXN0IFN0b3JlIiwiY2xpZW50SWQiOiJBWTY0dGFkZG1heE5FOTc2cWlhQ09CSENmd25lN3ozNll3RVp3QVVNdUN3QzlOeE1jdEtWWWxIcXE3c0VlaEIzNV94c3QtOHJQOXRtUmw0NSIsInByaXZhY3lVcmwiOiJodHRwczovL2V4YW1wbGUuY29tIiwidXNlckFncmVlbWVudFVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20iLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjpmYWxzZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJVU0QiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6Img3d2N0M200dDM1eXB3MngiLCJ2ZW5tbyI6Im9mZiJ9'
        },
        env: 'sandbox', // Or 'production'
        commit: true, // This will add the transaction amount to the PayPal button

        payment: function (data, actions) {
            return actions.braintree.create({
                flow: 'checkout', // Required
                amount: amount, // Required
                currency: 'USD', // Required
                enableShippingAddress: true,
                shippingAddressEditable: false,
                shippingAddressOverride: shippingAddress
            });
        },

        
        onAuthorize: function (data, actions) {
            const dataTosend = {
                nonce: data.nonce,
                amount: amount,
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
    
</script>


<style>

.Card{
    display: contents;
    width: 100%;
}

.Card-container{
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 20px;
    width: 300px;
    height: fit-content;
    background-color: rgba(128,128,128, 0.9);
}

#paypal-button {
    align-self: center;
}

</style>

<div class="Card">
    <div class="Card-container">
        <img src="https://dummyimage.com/300x300/bd33bd/3b46db.png" alt="product violet">
        <div class="Card--description">
            <h2>Raspberry Pi 4 2GB RAM</h2>
            <h3>{amount + ' USD'}</h3>
        </div>
        <div id="paypal-button"> </div>
    </div>
</div>