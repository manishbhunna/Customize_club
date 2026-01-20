import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Image, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddressPage from "./AddressPage";
import PayNowButton from "../components/ProductDetails/PayNowButton";
import { addToCart, updateQty, removeFromCart } from "../Redux/cartSlice";

const CartPage = () => {
  const location = useLocation();
  const productFromProductPage = location.state?.product;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const [dataField, setDataField] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    flat: "",
    landmark: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
  });

  useEffect(() => {
    if (productFromProductPage) {
      dispatch(addToCart(productFromProductPage));
    }
  }, [productFromProductPage, dispatch]);

  const handleQtyChange = (id, qty) => {
    dispatch(updateQty({ id, qty }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  const handleCheckout = () => {
    if (!address.name || !address.city || !address.state || !address.pin || !address.phone) {
      setDataField(false);
      alert("⚠️ Please fill the delivery address before proceeding.");
      return;
    }

    if (cart.length === 0) {
      alert("⚠️ Your cart is empty.");
      return;
    }

    const orderData = {
      address,
      cart,
      totalAmount,
    };

    console.log("Order Placed ✅:", orderData);
    setDataField(true);
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Left Section - Address */}
        <Col xs={12} md={6}>
          <Card className="p-3 shadow-sm">
            <AddressPage address={address} setAddress={setAddress} />
          </Card>
        </Col>

        {/* Right Section - Cart + Order Summary */}
        <Col xs={12} md={6}>
          <Card className="p-3 shadow-sm">
            <h4 className="mb-4 text-center" style={{ fontWeight: "600" }}>
              🛒 Order Summary
            </h4>

            {cart.length > 0 ? (
              <>
                {cart.map((item) => (
                  <Card className="mb-3 shadow-sm" key={item.id}>
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col xs={4} sm={3} className="text-center">
                          <Image src={item.images?.[0] || item.img} alt={item.name} fluid rounded />
                        </Col>
                        <Col xs={8} sm={4}>
                          <h6>{item.name}</h6>
                          <p className="text-muted mb-1">₹{item.price}</p>
                        </Col>
                        <Col xs={6} sm={3}>
                          <Form.Control
                            type="number"
                            value={item.qty}
                            min="1"
                            onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value))}
                            style={{ width: "70px" }}
                          />
                        </Col>
                        <Col xs={6} sm={2} className="text-end">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}

                {/* Order Summary */}
                <Card className="p-3 shadow-sm">
                  <h5>Order Summary</h5>
                  <ListGroup variant="flush" className="mt-3">
                    {cart.map((item) => (
                      <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                        <span>
                          {item.name} x {item.qty}
                        </span>
                        <strong>₹{item.price * item.qty}</strong>
                      </ListGroup.Item>
                    ))}
                    <ListGroup.Item className="d-flex justify-content-between fw-bold">
                      <span>Total</span>
                      <span>₹{totalAmount}</span>
                    </ListGroup.Item>
                  </ListGroup>

                  <PayNowButton
                    dataField={dataField}
                    handleCheckout={handleCheckout}
                    amount={totalAmount}
                    productName={"Sketch Wallet"}
                  />
                </Card>
              </>
            ) : (
              <Card className="p-3 text-center shadow-sm">
                <h5>Your cart is empty 😔</h5>
              </Card>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
