import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function CustomerQuery() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-5">
              <h2 className="text-center mb-3 fw-bold text-dark"> Customer Query</h2>
              <p className="text-center text-muted mb-4">
                Have a question or a custom gift idea in mind? <br /> Contact us below and we’ll get back to you soon!
              </p>

              <Form>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-semibold">Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="rounded-3 shadow-sm" 
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-semibold">Your Email/Whatsapp Number</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email address / Whatsapp Number " 
                    className="rounded-3 shadow-sm" 
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-semibold">Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here..."
                    className="rounded-3 shadow-sm"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="px-5 py-2 rounded-3 shadow-sm"
                  >
                     Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerQuery;
