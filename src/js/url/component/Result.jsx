import React from "react";
import { Row, Col, Alert } from 'react-bootstrap';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { shortenedUrlResponse } = this.props;
        return (
            <div>
                    <Row>
                        <Col xs lg="1"></Col>
                        <Col xs lg="5">
                            <Row>
                                <Col>Original URL</Col>
                            </Row>
                            <Row>
                                <Col>{shortenedUrlResponse.url}</Col>
                            </Row>
                        </Col>
                        <Col xs lg="6">
                            <Row>
                                <Col>Shortened UR</Col>
                            </Row>
                            <Row>
                                <Col><a href={"https://"+shortenedUrlResponse.url} target="_blank">{shortenedUrlResponse.shortenedUrl}</a></Col>
                            </Row>
                        </Col>
                    </Row>
            </div>)
    }
}
export default Result;