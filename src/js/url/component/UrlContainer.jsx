import React from "react";
import { Container } from 'react-bootstrap';
import "../style/App.css";
import UrlForm from "./UrlForm.jsx";

class UrlContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shortenedUrlResponse } = this.props;
    return (
      <Container className="url-shortener-container-border">
        <UrlForm />
      </Container>
    );
  }
}

export default UrlContainer;