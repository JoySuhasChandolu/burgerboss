import React from 'react'
import me from "../../assets/founder.webp"

const Users = () => {

    const arr = [1,2 ,3 ,4];

  return <section className="tableClass">
    <main>
      <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Role</th>
                    <th>Since</th>
                </tr>
            </thead>
            <tbody>
            {
                arr.map(i=>(
                <tr key={i}>
                    <td>#serwfa</td>
                    <td>Joy</td>
                    <td>
                        <img src={me} alt="image_temp" />
                    </td>
                    <td>Admin</td>
                    <td>{24-2-2023}</td>
                </tr>
                ))
            }
            </tbody>
        </table>
    </main>
  </section>
}

export default Users