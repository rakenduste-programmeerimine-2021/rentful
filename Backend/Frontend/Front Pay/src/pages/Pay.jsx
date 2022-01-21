import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51K6aAbLlJTZXO5SVDNMwCEVakF0p4UxSO9M6wcyD8915FhtTxc9qeetbJ5OgvbRmiidEs0wdpF5rR5wRC43v0pLJ00SLl2gchh";


const Pay = ()=>{

    const onToken = (token)=>{
        console.log(token)
    }
    return(
        <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}        
        >
        <StripeCheckout
            name = "Rentful"
            image= "not important"
            billingAddress
            shippingAddress
            description="Total is 20 euros!"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
        >
            <button
            style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
            }}
            >



            Pay Now
            </button>
        </StripeCheckout>
        </div>
    );
};

export default Pay;