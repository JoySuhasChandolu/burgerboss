import React from 'react'

const OrderDetails = () => {
  return <section className="orderDetails">
    <main>
        <h1>Order Details</h1>
        <div>
            <h1>Shipping</h1>
            <p>
                <b>Address</b>
                {"sjfsd o4-re sdim"}
            </p>
        </div>
        <div>
            <h1>Contact</h1>
            <p>
                <b>Name</b>
                {"Joy Suhas"}
            </p>
        </div>
        <div>
            <h1>Contact</h1>
            <p>
                <b>Phone</b>
                {"9121487507"}
            </p>
        </div>
        <div>
            <h1>Status</h1>
            <p>
                <b>Order Status</b>
                {"Processing"}
            </p>
            <p>
                <b>Placed At</b>
                {"23-03-2022"}
            </p>
            <p>
                <b>Delivered At</b>
                {"23-03-2003"}
            </p>
        </div>

        <div>
            <h1>Payment</h1>
            <p>
                <b>Payment Method</b>
                {"Online"}
            </p>
            <p>
                <b>Payment Reference</b>#{"asadaffdf"}
            </p>
            <p>
                <b>Payed At</b>
                {"23-03-2003"}
            </p>
        </div>

        <div>
            <h1>Amount</h1>
            <p>
                <b>Items Total</b>₹{2132}
            </p>
            <p>
                <b>Shipping Charges Total</b>₹{200}
            </p>
            <p>
                <b>Tax </b>₹{232}
            </p>
            <p>
                <b>Total Amount </b>₹{2132 + 200 + 232}
            </p>
        </div>
        

        <article>
            <h1>Ordered Items</h1>

            <div>
                <h4>CheeseBurger</h4>
                <div>
                    <span>{12}</span> x {" "}<span>{232}</span>
                </div>
            </div>

            <div>
                <h4>Veg CheeseBurger</h4>
                <div>
                    <span>{10}</span> x {" "}<span>{502}</span>
                </div>
            </div>

            <div>
                <h4>Chicken CheeseBurger with fries</h4>
                <div>
                    <span>{5}</span> x {" "}<span>{1800}</span>
                </div>
            </div>

            <div>
                <h4 
                    style={{
                        fontweight: 800,
                }}>Sub Total</h4>
                <div 
                    style={{
                        fontweight: 800,
                }}
                >₹{232}
                </div>
            </div>
        </article>
    </main>
  </section>
}

export default OrderDetails