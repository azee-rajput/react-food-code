import React, {Component} from 'react';

import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';


class NavbarHead extends Component{
  constructor(props){
    super(props);
    this.state={
      search : '',
      enabled : false
    }
  }
  changed(e){
    this.setState({
      search : e.target.value,
    })

    if(e.target.value===null||e.target.value===""||e.target.value===undefined){
      this.setState({
        enabled : false
      })
    }else{
        this.setState({
          enabled : true
        })
    }
  }

    render(){
      return(
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="/">Title</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Filter By" id="basic-nav-dropdown">
                <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
                <NavDropdown.Item href="/areas">Area List</NavDropdown.Item>
                <NavDropdown.Item href="/ingredients">Ingredients</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search Recipe" className="mr-sm-2" value={this.state.search} onChange={(e)=>this.changed(e)} />
              {this.state.enabled ? <Nav.Link href={"/refresh/"+this.state.search}><Button variant="outline-light">Search</Button></Nav.Link> : null}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      )
    }
}

export default NavbarHead;