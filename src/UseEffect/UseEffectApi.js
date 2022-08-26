import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

  const [users, setUsers] = useState([])



  const getUsers = async () => {
    try {
      const response = await fetch("http://api.github.com/users");
      // const response = await fetch("http://jsonplaceholder.typicode.com/photos");
      setUsers(await response.json());
    } catch (error) {
      console.log(error)
    }

  }
  console.log(users)

  useEffect(() => {
    getUsers();
  }, [])

  // const getUsers = () => {
  //   axios.get("http://api.github.com/users")
  //   axios.get("http://jsonplaceholder.typicode.com/photos")
  //     .then(res => {
  //       if (res.data) {
  //         setUsers(res.data)
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  // console.log(users)

  return (
    <div className='App'>
      <h2>List of GitHub Users</h2>
      <div className='container-fluid mt-3'>
        <div className="row text-center">
          {
            users.map((d, i) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-4 mt-3">
                  <div className="card">
                    <div className="d-flex align-items-center">
                      <div className="image w-100 h-100">
                        <img src={d.avatar_url} alt="" className="rounded w-100 h-100" />
                      </div>
                      <div className="mt-3 w-100">
                        <h4 className="text-left text-dark">{d.login}</h4>
                        <span className="text-left text-dark">Lorem ipsum dolor sit amet.</span>
                        <div className="p-2 m-1 bg-primary d-flex justify-content-center rounded text-white">
                          <div className="d-flex flex-column "><span className="articles">Articles</span></div>
                          <div className="d-flex flex-column"><span className="rating">Rating</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default UseEffectApi