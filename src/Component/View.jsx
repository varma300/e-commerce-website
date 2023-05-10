import { Card, Button, Row, Col } from "react-bootstrap/";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

const View = () => {
  const { kart, products, setKart, login } = useContext(Context);
  const Nav = useNavigate();
  const { id } = useParams();
  const Data = products.filter((x) => x.id === parseInt(id));
  console.log(Data);
  useEffect(() => {
    console.warn(kart);
  }, [kart]);

  const AddToCart = () => {
    const [view] = Data;
    setKart([...kart, view])
    {login.length == 0 ? 
    Nav("/signin"):( Nav("/cart"))
  }
  };
  return (
    <div>
      <Row>
        {Data.map((x) => (
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center , g-4 "
            style={{ width: "80rem", padding:'5rem', alignContent:'center' }} 
            key={x.id}
            
          >
            <Card>
              <Card.Img style={{ width: "30rem" }} variant="top" src={x.img} />
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <Card.Text>
                  <h2>{x.prize}</h2>
                </Card.Text>
                <Button variant="primary" onClick={AddToCart}>
                  {"  "}
                  Add to Cart{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default View;
