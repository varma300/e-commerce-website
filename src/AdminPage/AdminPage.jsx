import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link, Outlet } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { RiProductHuntFill } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";

function AdminPage() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" style={{ backgroundColor: "lightblue" }}>
      <Row >
        <Col >
          <div style={{ fontSize: "20px", backgroundColor: "lightblue" }}>
            <Nav variant="stacked" defaultActiveKey="/home" >
              <Nav.Item>
                <Nav.Link as={Link} to="/Admin/product">
                  {" "}
                  <RiProductHuntFill /> Products{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/Admin/user">
                  {" "}
                  <VscAccount /> Users{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <FcMoneyTransfer /> Revanue{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
      </Row>
      <Outlet />
    </Tab.Container>
  );
}

export default AdminPage;
