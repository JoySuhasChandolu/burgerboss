import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineEye } from "react-icons/ai"
import { GiArmoredBoomerang } from "react-icons/gi";

const Orders = () => {

    const arr = [1,2,3,4];

  return <section className="tableClass">
        <main>
            <table>

        <thead>
        <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Item Quantity</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>User</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
        arr.map(i=>(
            <tr key={i}>
            <td>#serwfa</td>
            <td>Processing</td>
            <td>23</td>
            <td>₹{34}</td>
            <td>COD</td>
            <td>Abhi</td>
            <td>
                <Link to={`/order/${"asadsaa"}`}>
                <AiOutlineEye />
                </Link>

                <button>
                <GiArmoredBoomerang />
                </button>
            </td>
            </tr>
        ))
        }
        </tbody>


            </table>
        </main>
</section>
}

export default Orders