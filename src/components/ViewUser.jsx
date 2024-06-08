import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewUser = () => {
    const [todos,changeTodos]=useState([])
        
            const fetchData=() =>{
                axios.get("https://jsonplaceholder.typicode.com/todos").then(
                    (response)=>{
                        changeTodos(response.data)
                    }
                ).catch()
            }
            useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <h5><center>VIEW ALL USERS</center></h5>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">USER ID</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">TITLE</th>
                                        <th scope="col">COMPLETED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.map(
                                        (value,index) => {
                                    return <tr>
                                        <td scope="row">{value.userId}</td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.completed}</td>
                                    </tr>
                                           
                                                               }
                                    )
                                    }

                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser