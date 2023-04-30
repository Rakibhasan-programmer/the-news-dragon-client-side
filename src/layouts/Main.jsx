import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav';
import RightNav from '../pages/shared/RightNav';

const Main = () => {
    return (
        <>
           <Header />
           <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
           <Footer /> 
        </>
    );
};

export default Main;