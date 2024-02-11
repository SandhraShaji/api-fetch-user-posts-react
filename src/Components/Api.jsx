import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Api.css';
function Api() {
    const base_url = 'https://jsonplaceholder.typicode.com/posts'
    const[posts, setPost]=useState([])
    const fetchdata=async()=>{
       const response = await fetch(base_url)
       .then(response=>response.json())
       .then(posts=>setPost(posts))
    }
    console.log(posts);
    useEffect(()=>{
        fetchdata()
    },[])
  return (
          <div className='cards'>
            {
            posts.map(item=>(
              <Card className='card1' style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{item.id}</Card.Subtitle>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
              </Card.Body>
              </Card>
            ))
            }
          </div>
  )
}

export default Api