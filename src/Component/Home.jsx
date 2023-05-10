import { useContext } from "react";
import { Card, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Context from "../Context";
import '../App.css'


const Home = () => {
  return (
    <div style={{ padding: '2rem',}}>
      <div
        style={{
          backgroundImage: `url("https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: '120rem',
          height: '60rem'
        }}
      >
        <div style={{ paddingLeft: '20rem', paddingTop: '20rem' }}><b>
          <h1 style={{ color: 'white' }}>Love the Planet </h1></b>
          <h1 style={{ color: 'white' }}>
            we walk on
          </h1>

          <h5 style={{ color: 'white', paddingRight: '15pix' }}>Bibendum fermentum, aenean donec pretium aliquam blandit <br />
            tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</h5>
        </div>
        <div  style={{ display: 'flex', paddingLeft: '20rem',}}>
          <Button as={Link} to='/men'>SHOP MEN</Button>{" "}
          <Button as={Link} to='/women' className="ms-4">SOPE WOMEN</Button>{" "}
          <Button as={Link} to='/kid' className="ms-4"> SHOPE KIDS </Button>

        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', color: 'white' }} >
        <div className="card">
          <Card style={{ width: '18rem', backgroundImage: `url('https://sc04.alicdn.com/kf/H13deaae58af44210ae0da9583da5f562A.jpg')`, backgroundSize: '100%' }}>
            <Card.Body >
              <Card.Title>MEN COLLECTIONS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link as={Link} to='/men'>  SHOP MORE</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: '18rem', backgroundSize: '100%', backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSj3aCc_FgUjPyXzzd1HItkyJLqrf90qFhmrfhGP_JwEwTEWE4J2B7hQPiN6RBBdf6dk&usqp=CAU')` }}>
            <Card.Body>
              <Card.Title>WOMEN COLLECTIONS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link as={Link} to='/women'>SHOP MORE</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: '18rem', backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22DgeMyNYmlwS0OBsDC5h3AvS-G_PC4t1lg&usqp=CAU')`, backgroundSize: '100%' }}>
            <Card.Body>
              <Card.Title>KIDS COLLECTIONS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link as={Link} to='/kid'>SHOP MORE</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Home;
