import React from "react";
import { Row, Col, Alert } from 'react-bootstrap';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBanner: true,
        };
    }

    setClose() {
        this.setState({ showBanner: false });
    }

    render() {
        const { shortenedUrlResponse } = this.props;
        return (
            <div>

                <Alert variant="success">
                    <Alert.Heading>URL Result</Alert.Heading>
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
                                <Col><a href={shortenedUrlResponse.url} target="_blank">{shortenedUrlResponse.shortenedUrl}</a></Col>
                            </Row>
                        </Col>
                    </Row>
                </Alert>
            </div>)
    }
}
export default Result;