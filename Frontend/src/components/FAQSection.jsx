import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";


const FAQSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the Shipping Charges ?
          </Accordion.Header>
          <Accordion.Body>
            Free Home Delivery & All India Delivery Availble.
          </Accordion.Body>
        </Accordion.Item>

         <Accordion.Item eventKey="1">
          <Accordion.Header>
            How do I personalize my wallet or gift set?
          </Accordion.Header>
          <Accordion.Body>
            You can add your name, initials, or message during the customization
            step before checkout at <strong>Customize Club</strong>.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>How long does delivery take?</Accordion.Header>
          <Accordion.Body>
             Delivery takes only 5–7 business days. 
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Do you offer Cash on Delivery (COD)?</Accordion.Header>
          <Accordion.Body>
            We Have Only Prepaid Orders BEcouse these are customize items.       </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Can I return or exchange a customized product?
          </Accordion.Header>
          <Accordion.Body>
            Yes Return available if any product is damaged or
            defective at the time of delivery.Parcel opening video without any cut and pause must for proof.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Do you ship internationally?</Accordion.Header>
          <Accordion.Body>
            Yes, <strong>Customize Club</strong> ships to All countries.
            Shipping charges vary based on location.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Where can I track my order?</Accordion.Header>
          <Accordion.Body>
            You will receive a tracking link via SMS/Email after dispatch.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Can I add a gift note or message with my order?
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can add a special personalized gift note while placing your
            order.
          </Accordion.Body>
        </Accordion.Item>
        
         <Accordion.Item eventKey="8">
          <Accordion.Header>
            How can we contact you?
          </Accordion.Header>
          <Accordion.Body>
           our instagram @customize__Club and our whatsapp Number +91 94671-91644
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
};

export default FAQSection;
