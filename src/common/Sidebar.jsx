import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div class="hold-transition sidebar-mini layout-fixed">


        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" class="brand-link">
            <img src="asset/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
            <span class="brand-text font-weight-light">React JS</span>
            </a>

            <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                <img src="asset/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User"/>
                </div>
                <div class="info">
                <a href="/" class="d-block">FarhaN Fahidur</a>
                </div>
            </div>

            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                <div class="input-group-append">
                    <button class="btn btn-sidebar">
                    <i class="fas fa-search fa-fw"></i>
                    </button>
                </div>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item menu-open">
                    <a href="/" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Dashboard
                    </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="/" class="nav-link">
                    <i class="nav-icon fas fa-copy"></i>
                    <p>
                        Person
                        <i class="fas fa-angle-left right"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="pages/layout/top-nav.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Add Person</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>All Person</p>
                        </a>
                    </li>
                    </ul>
                </li>

                <li class="nav-header">Admin</li>
                <li class="nav-item">
                    <a href="/" class="nav-link">
                    <i class="nav-icon far fa-circle text-danger"></i>
                    <p class="text">Important</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link">
                    <i class="nav-icon far fa-circle text-warning"></i>
                    <p>Warning</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/farhan" class="nav-link">
                    <i class="nav-icon far fa-circle text-info"></i>
                    <p>Informational</p>
                    </a>
                </li>
                </ul>
            </nav>
            </div>
        </aside>


        </div>
      </div>
    )
  }
}

export default Sidebar