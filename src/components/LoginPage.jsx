import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";


const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile:", mobile, "Password:", password);
    // Add login API call here
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Row className="w-100">
        <Col xs={12} sm={10} md={6} lg={4} className="mx-auto">
          <Card className="shadow p-4 border-0 rounded-4">
            <Card.Body>
              <h3 className="text-center mb-4 fw-bold">Login</h3>
              <Form onSubmit={handleSubmit}>
                
                {/* Mobile Input */}
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                  />
                </Form.Group>

                {/* Password Input */}
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 rounded-pill fw-semibold"
                >
                  Login
                </Button>
              </Form>

              {/* Extra Links */}
              <div className="text-center mt-3">
                <a href="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
              <div className="text-center mt-2">
                <span>Don’t have an account? </span>
                <a href="/signup" className="fw-semibold text-decoration-none">
                  Sign Up
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
