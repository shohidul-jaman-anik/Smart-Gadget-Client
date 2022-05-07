import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './SubHeaders.css'


const SubHeaders = () => {
    return (
        <div>
            <Row className='sub-header'>
                <Col className='location'><p>1010 Avenue of the Moon, New York</p></Col>
                <Col className='office-days'><p>  Mon - Sat 8.00 - 18.00. Sunday CLOSED</p></Col>
                <Col className='phone'><p>(123) 456-7890 ##</p></Col>
            </Row>
        </div>
    );
};

export default SubHeaders;