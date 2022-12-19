import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Swal from 'sweetalert2'
class Home extends Component {

  state={
    person:[]
  }

  componentDidMount(){
    axios.get('person')
      .then((response)=> {
        this.setState({person:response.data})
      })
      .catch((error)=> {
        console.log(error);
      })
  }

  deleteData=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      axios.get('delete/'+id)
        .then((response)=> {
          let person=this.state.person;
          for (var i=0;i<person.length;i++){
              person.splice(i,1);
              this.setSate({person:person})
          }
        })
        .catch((error)=> {
          console.log(error);
        })
    })
  }

  render() {

    const person = this.state.person;
    const allperson=person.map((person,idx)=>{
      return(
        <div>
          <tr>
            <td>{person.name}</td>
            <td>{person.phone}</td>
            <td>
              <Link to={"edit"+person.id} class="btn btn-sm btn-info">Edit</Link>
              <button class="btn btn-sm btn-danger" onClick={this.deleteData.bind(this,person.id)}>Delete</button>
            </td>
          </tr>
        </div>
      )
    })

    return (
      <div>

        <div class="content-wrapper">
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0">All Persons</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">All Persons</li>
                  </ol>
                <a href='/create' class='btn btn-success'>Add New</a>
                </div>
              </div>
            </div>
          </div>

          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-8">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allperson}
                    </tbody>
                  </table>
                  </div>
              </div>
            </div>
          </section>
        </div>


      </div>
    )
  }
}

export default Home