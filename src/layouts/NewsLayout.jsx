import React from 'react';
import LeftNav from '../pages/shared/LeftNav';
import RightNav from '../pages/shared/RightNav';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const NewsLayout = () => {
    return (
        <>
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
        </>
    );
};

export default NewsLayout;