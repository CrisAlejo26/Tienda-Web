import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <img src="./images/Logo.png" width="50px" height="50px" alt='Logo tienda'></img>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div className="input-gropu grid">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder="¿Que producto Busca?"></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn-warning btn">
                                <i class="fa fa-search" aria-hidden="true"> Buscar</i>
                            </button>    
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center ">
                    <button className="btn btn-primary" id="login-btn">Inicie Sesión</button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                    <span className="ml-1" id="cart_count">2</span>
                </div>
            </nav>
        </Fragment>
    )
    }

export default Header