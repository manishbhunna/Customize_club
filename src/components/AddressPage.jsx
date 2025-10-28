import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands",
  "Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir",
  "Ladakh","Lakshadweep","Puducherry"
];

const AddressPage = ({ address, setAddress }) => {
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <>
      <h4 className="mb-3" style={{ fontSize: "1.2rem" }}>
        Delivery Address
      </h4>

      <Form>
        {/* Receiver Name */}
        <Form.Group className="mb-2">
          <Form.Label style={{ fontSize: "0.9rem" }}>Receiver Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={address.name}
            onChange={handleAddressChange}
            required
            style={{ fontSize: "0.85rem" }}
          />
        </Form.Group>

        {/* House / Flat */}
        <Form.Group className="mb-2">
          <Form.Label style={{ fontSize: "0.9rem" }}>House No. / Street No.</Form.Label>
          <Form.Control
            type="text"
            name="flat"
            value={address.flat}
            onChange={handleAddressChange}
            required
            style={{ fontSize: "0.85rem" }}
          />
        </Form.Group>

        {/* Landmark */}
        <Form.Group className="mb-2">
          <Form.Label style={{ fontSize: "0.9rem" }}>Sector / Colony / Village</Form.Label>
          <Form.Control
            type="text"
            name="landmark"
            value={address.landmark}
            onChange={handleAddressChange}
            style={{ fontSize: "0.85rem" }}
          />
        </Form.Group>

        {/* City + State */}
        <Row className="mb-2">
          <Col xs={12} sm={6} className="mb-2 mb-sm-0">
            <Form.Label style={{ fontSize: "0.9rem" }}>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              required
              style={{ fontSize: "0.85rem" }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label style={{ fontSize: "0.9rem" }}>State / UT</Form.Label>
            <Form.Select
              name="state"
              value={address.state}
              onChange={handleAddressChange}
              required
              style={{ fontSize: "0.85rem" }}
            >
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* PIN + Phone */}
        <Row className="mb-2">
          <Col xs={12} sm={6} className="mb-2 mb-sm-0">
            <Form.Label style={{ fontSize: "0.9rem" }}>PIN Code</Form.Label>
            <Form.Control
              type="text"
              name="pin"
              value={address.pin}
              onChange={handleAddressChange}
              pattern="\d{6}"
              maxLength={6}
              placeholder="6-digit PIN"
              required
              style={{ fontSize: "0.85rem" }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Form.Label style={{ fontSize: "0.9rem" }}>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleAddressChange}
              pattern="[6-9]\d{9}"
              placeholder="10-digit phone number"
              required
              style={{ fontSize: "0.85rem" }}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddressPage;
