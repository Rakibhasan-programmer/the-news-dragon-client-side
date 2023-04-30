import React from 'react';
import RightNav from '../pages/shared/RightNav';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';

const NewsLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg={8}>
                        <Outlet />
                    </Col>
                    <Col lg={4}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default NewsLayout;