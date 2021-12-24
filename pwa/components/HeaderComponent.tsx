import React, { Component, Props } from "react";

export default class HeaderComponent extends Component {
    render() {
        return <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-xl">
                    <a className="navbar-brand" href="#">Container XL</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown07XL" data-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown07XL">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-md-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container-xl mt-n2 mb-3">
                Matching .container-xl...
            </div>
        </div>
    }
}