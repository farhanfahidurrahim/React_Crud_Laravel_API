import React, { Component } from 'react'
import axios from 'axios';

class Create extends Component {

    state={
        name:'',
        phone:'',
        message:''
    }

    formSubmit=(e)=>{
        e.preventDefault();
        const data={
            name:this.state.name,
            phone:this.state.phone,
        }

        axios.post('/Insert',data)
        .then((response)=>{
            this.setState({message:response.data.message})
            document.getElementById("createForm").reset();
        })
        .catch((error)=>{
            this.setState({message:error.response.data.message})
        });
    }

  render() {

    let message="";
    if (this.state.message) {
        message=(
            <div>
                <div class="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            </div>
        )
    }

    return (
      <div>

        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                        <h1 class="m-0">Create Person</h1>
                        </div>
                        <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Create Person</li>
                        </ol>
                        <a href='/' class='btn btn-success'>All Person</a>
                        </div>
                    </div>
                </div>
            </div>

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-5">
                            {message}
                            <form onSubmit={this.formSubmit} id="createForm">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Person Name</label>
                                    <input type="text" name="name" class="form-control" required onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Phone</label>
                                    <input type="text" name="phone" class="form-control" required onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

      </div>
    )
  }
}

export default Create