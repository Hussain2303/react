import React, { useState, useEffect } from 'react'
import{NavLink} from 'react-router-dom'
const Cards = () => {
    const [data,setData] = useState([])
    const [loader,setLoader]=useState(false)
    const dataFetch = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        setLoader(true)
        const data = await response.json()
        setData(data)
        setLoader(false)
        console.log(data)
    };
    useEffect(() => {
        dataFetch()
    }, [])
return (
     <div className="d-flex flex-wrap justify-content-evenly">
        {data.map((item) => {
            return (
                <div className="card mt-4 p-4" style={{ width: "18rem" }} key={item.id}>
                    <img
                        src={item.image} style= {{height:"300px"}} 
                        className="card-image-top"
                        width={"300px"}
                        height={"300px"}
                        alt=""
                    />
                    <div className='card-body' key={item.id}>
                        <h5 className='card-title'>{item.title}</h5> }
                        {  <p className='card-text'> {item.description.slice(0, 100)}</p> }
                        <NavLink to={`${item.id}`} className='btn btn-primary'>
                            {"$" + item.price}
                        </NavLink>
                    </div>
                </div>
            );
        })}
    </div>
)
}

export default Cards