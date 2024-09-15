import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

const User = () => {
    const [user, setUser] = useState({
        name: "Hussain",
        age: 21,
        email: "hussainajmal6780@gmail.com"
    })
    const {name, age, email} = user;
    const [ismarried, setismarried] = useState(false)
    const married = () => {
        setismarried(!ismarried)
    }
    return (
        <div>
            <Button className='btn btn-success d-flex justify-content-center align-items-center m-4 gap-3' onClick={married}>Show Data</Button>
            {
                ismarried ? (
                    <>
                        <h3>Name:{name}</h3>
                        <h5>Age:{age}</h5>
                        <h5>Email:{email}</h5>
                    </>
                ) :
                    null
            }
        </div>
    )
}
export default User