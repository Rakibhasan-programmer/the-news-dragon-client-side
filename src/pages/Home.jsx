import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './shared/LeftNav';
import RightNav from './shared/RightNav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;