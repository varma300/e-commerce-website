import { useContext } from "react";
import Context from "../Context";
import { Card, Button, Row, Col } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";
import '../App.css'
const Product = () => {
  const productContext = useContext(Context);
  const { products } = productContext;
  const Navigate = useNavigate();
  console.log(products);
  return (
    <div>
      <Row  style={{
        padding: "2rem",
      }}>
        <h1 > Products </h1>
        {products.map((x) => (
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center , g-4 "
            style={{ width: "23rem" }} 
            key={x.id}
          >
            <Card >
              <Card.Img style={{ width: "18rem" }} variant="top" src={x.img} />
              <Card.Body>
                <Card.Title>
                  <p> {x.name} </p>
                </Card.Title>
                <Card.Text>
                  <h4>{x.prize}</h4>
                </Card.Text>
                <Button
                  variant="primary"
                  id={x.id}
                  onClick={() => Navigate(`/view/${x.id}`)}
                >
                  View Iteam
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
