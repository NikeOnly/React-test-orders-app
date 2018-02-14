import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <Row>
                <Col xs={6} xsOffset={3}>
                    <p className="main-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>

                    <div className="main-buttons-container">
                        <Link to="/orders">
                            <Button bsStyle="primary">
                                Orders
                            </Button>
                        </Link>

                        <Link to="/new-order">
                            <Button bsStyle="primary">
                                New Order
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default App;
