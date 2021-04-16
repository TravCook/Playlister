import React from "react"
import "./navbar.css"
import Navbar from "react-bootstrap/Navbar"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Navigation(){
    return(
        <Navbar>
            <Navbar.Brand className="brand" href="/">Playlister</Navbar.Brand>
            <Col>
                <Button className="btnMargin">View Top Playlists</Button>
                <Button className="btnMargin">Create Your Own Playlist</Button>
                <Button className="btnMargin">Head over to Deezer</Button>
            </Col>
            <Col lg={2}>
                <Button className="signIn">Sign In</Button>
                <Button className="signUp">Sign Up</Button>
            </Col>
        </Navbar>
    )
}

export default Navigation