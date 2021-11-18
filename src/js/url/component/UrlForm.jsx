import React from "react";
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import "../style/App.css";
import Result from "./Result.jsx";

class UrlForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            shortenedUrlResponse: null,
            urlValidation: false,
            showBanner: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateUrl(url) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        !!pattern.test(url);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (!this.validateUrl(this.state.value)) {
            this.setState({ urlValidation: true });
            this.setState({ showBanner: true });
            this.setState({ shortenedUrlResponse: null });
        }
        if (this.state.urlValidation) {
            this.setState({ urlValidation: false });
            this.setState({ showBanner: false });
            fetch('/urlshortener', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "originalUrl": this.state.value }),
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({ shortenedUrlResponse: data });
                })
                .catch((error) => {
                    this.setState({ error: data });
                });
        }
        event.preventDefault();
    }

    setClose() {
        this.setState({ showBanner: false });
    }

    render() {
        const { shortenedUrlResponse, error, urlValidation, showBanner, error } = this.state;
        return (
            <div>
                <Form className="url-shortener-form-padding" onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs lg="1"><Form.Label>URL</Form.Label></Col>
                        <Col><Form.Control type="text" placeholder="Enter url" value={this.state.value} onChange={this.handleChange} /></Col>
                    </Row>
                    <Row>
                        <Col xs lg="1"></Col>
                        <Col xs lg="2" className="url-shortener-col-padding" >
                            <Button as="input" type="submit" value="Submit" />
                        </Col>
                    </Row>
                </Form>
                {
                    shortenedUrlResponse && <Result shortenedUrlResponse={shortenedUrlResponse} />
                }
                {showBanner && <Alert variant="danger" onClose={() => this.setClose()} dismissible>
                    <Alert.Heading>{urlValidation ? "Validation Error" : "Server Error"}</Alert.Heading>
                    <p>
                        {urlValidation ? "URL validation failed !" : "Failed to process the URL !"}
                    </p>
                </Alert>}
            </div>
        );
    }
}

export default UrlForm;