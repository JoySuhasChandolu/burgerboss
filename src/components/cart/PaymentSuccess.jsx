import React from 'react'
import { Link } from "react-router-dom";

const PaymentSucces = () => {
  return <section className="paymentsuccess">

      <main>
        <h1>Order Confirmed</h1>
        <p>Order Place Successfully,You can check order status below</p>
        <Link to="/myorders">Check Status</Link>
      </main>

    </section>
}

export default PaymentSucces