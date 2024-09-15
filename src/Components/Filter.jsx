import React,{useState,useEffect} from 'react'

const Filter = () => {
    const [data, setData] = useState({});
    const Fetch=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
    }
    useEffect(()=>{
        Fetch();
    },[])
  return (
    <div>
{
    data.filter(()=>{
        return data.map((item,index)=>{
           {<p>{item.id}</p>}
            {<h1>{item.title} </h1>}
            })
    })
}

})
    </div>
  )
}

export default Filter