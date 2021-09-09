import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Error = () => {
  return (
    <div>
      <Container className="error-page">
        <img src="/unplugged.svg" alt="error icon" />
        <h2>Oh no! Something went wrong :(</h2>
        <Button>
          <a href="/">
            Return to Homepage
          </a>
        </Button>
      </Container>
    </div>
  );
};

export default Error;
