import { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import '../App.css'

const Wemen = () => {
  const { products } = useContext(Context);
  const filterdWomen = products.filter((iteam) => iteam.gend === "women");
  const Nav = useNavigate();
  return (
    <div>
      <Row  style={{
        textAlign: "center",
        padding: "2rem",
        paddingBottom: "5rem",
        backgroundColor:'cornsilk' 
      }}>
        <h3
          style={{
            textAlign: "center",
            paddingBlockStart: "3rem",
            paddingBottom: "8rem",
          }}
        >
          {" "}
          Her Collections{" "}
        </h3>
        {filterdWomen.map((x) => (
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center , g-4 card "
            style={{ width: "23rem" }} 
            key={x.id}
          >
            <Card>
              <Card.Img
                style={{ width: "18rem" }}
                variant="top"
                src={x.img}
              />
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <Card.Title>{x.prize}</Card.Title>

                <Button variant="primary" onClick={() => Nav(`/view/${x.id}`)}>
                  {"  "}
                  view item{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Wemen;
