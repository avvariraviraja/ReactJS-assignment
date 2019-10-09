import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";

export class Navigation extends  Component{
    render()
    {
        return(
            <Navbar bg="dark" expand="lg" marginWidth="50px">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" 
                to="/">Home</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" 
                to="/department">About</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" 
                to="/employee">Features</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" 
                to="/employee">Pricing</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" 
                to="/employee">Screenshot</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" 
                to="/employee">Contact</NavLink>

            </Nav>
            </Navbar.Collapse>
            </Navbar>

        )
    }
}