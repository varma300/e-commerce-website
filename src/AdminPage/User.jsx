import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import Context from "../Context";
import Table from "react-bootstrap/Table";

const User = () => {
  const contextState = useContext(Context);
  const { user } = contextState;
  const [colors, setColors] = useState([])

  const searchRef = useRef();

  const searchHandle = () => {
    const userdata = user.map((e) => e.username);
    const searchData = searchRef.current.value;
    if (userdata.includes(searchData)) {
      setColors(searchData)
    } else {
      alert("user not found");
    }

  };
  return (
    <div style={{ backgroundColor: "lightblue" }}>

      <div style={{ textAlignLast: "center" }}>
        <h1
          style={{
            textAlign: "center",
            paddingBlockStart: "1rem",
            paddingBottom: "5rem",
          }}
        >
          {" "}
          User Admin Page
        </h1>
        <div style={{ textAlignLast: "end", paddingRight: "8rem" }}>
          <input type="text" placeholder="user search" ref={searchRef} />
          <button onClick={searchHandle}>Search</button> <br />
          {colors.length > 0 ? (
            <p>{`${colors} is in the list`}</p>
          ) : null}
        </div>
        <hr />
        <Table striped="columns">
          <thead>
            <tr>
              <th>#</th>
              <th>user Name</th>
              <th>e-mail id</th>
              <th>Password</th>
            </tr>
          </thead>
          {user.map((x) => (
            <tbody key={x.id} >
              <tr>
                <td>1</td>
                <td > {x.username} </td>
                <td> {x.email} </td>
                <td> {x.password} </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div >
      <div style={{ paddingTop: '18rem', paddingBottom: '5rem' }}>
        <Link to={"/Admin"}>back</Link>
      </div>

    </div>
  );
};

export default User;
