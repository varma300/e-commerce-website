import { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import '../App.css'

const Kid = () => {
  const { products } = useContext(Context);
  const filterdKid = products.filter((iteam) => iteam.gend === "kid");
  const Nav = useNavigate();

  return (
    <Row
    style={{
      textAlign: "center",
      padding: "2rem",
      paddingBottom: "5rem",
      backgroundColor:'lightgreen' 
    }}>
      <h3
        style={{
          textAlign: "center",
          paddingBlockStart: "3rem",
          paddingBottom: "8rem",
        }}
      >
        {" "}
        Kids Collections{" "}
      </h3>
      {filterdKid.map((x) => (
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center , g-4 card"
          style={{ width: "23rem" , backgroundColor:'lightgreen' }} 
          key={x.id}
        >
          <Card>
            <Card.Img style={{ width: "18rem" }} 
            variant="top" src={x.img} />
            <Card.Body>
              <Card.Title>{x.name}</Card.Title>
              <Card.Text>
                <h2>$ {x.prize}</h2>
              </Card.Text>
              <Button variant="primary" 
              onClick={() => Nav(`/view/${x.id}`)}>
                View Iteam
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Kid;
