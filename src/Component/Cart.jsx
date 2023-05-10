import { useContext, useEffect } from "react";
import Context from "../Context";
import { Card, Col, Button, Container } from "react-bootstrap/";
import '../App.css'

const Cart = () => {
  const { setKart, kart } = useContext(Context);
  console.log(kart);
  useEffect(() => {
    document.title = `${kart.length} iteam(s) carted`;
  });

  const removeCart = (element) => {
    const removeID = parseInt(element.target.id);
    setKart(kart.filter((item) => item.id !== removeID));
  };

if(kart.length ===0){
  return (<h1 style={{ textAlign: "center", padding: '5rem', paddingBottom:'20rem', color:'lightgray' }}>cart is empty</h1>)
}else{
  return (
    <Container style={{ display: 'flex' }}>
      <div style={{ textAlign: "center", padding: '5rem', paddingBottom:'20rem' }}>
        <h1 > Cart</h1>
    
       <div>
          {
            kart.map((x) => (
              <Col
                md={6}
                className="d-flex align-items-center justify-content-center,gap-4 card"
                style={{ textAlign: "center", width: "15rem", }}
                key={x.id}
              >
         
                <Card>
                  <Card.Img style={{ width: "3rem" }} variant="top" src={x.img} />
                  <Card.Body>
                    <Card.Text>
                      <h6>{x.name}</h6>
                    </Card.Text>
                    <Button>
                      {"  "}
                      Buy{" "}
                    </Button>
                    <Button onClick={removeCart} id={x.id} className="gap-4">
                      {"  "}
                      Remove{" "}
                    </Button>
                  </Card.Body>
                </Card>
                
              </Col>
            ))
          }
       </div>
      </div>
      <div>
        <h1>text</h1>
      </div>
    </Container>
  );}
};

export default Cart;
