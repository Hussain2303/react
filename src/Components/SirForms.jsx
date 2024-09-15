import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const SirForms = () => {
    const [Forms,Setforms]=useState({
        password:'',
        email:'',
    })
    const onChange=(e)=>{
        Setforms({...Forms,[e.target.name]:e.target.value})
    }
    const {password,email}=Forms
    console.log(Forms)
    return (
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={onChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password"  name="password" value={password} onChange={onChange}/>
            </FloatingLabel>
        </div>
    )
}

export default SirForms