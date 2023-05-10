import { useContext, useRef } from "react";
import Context from "../Context";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const userRef = useRef();
  const emailRuf = useRef();
  const passwordRuf = useRef();
  const loginContext = useContext(Context);
  const { user, setUser } = loginContext;
  const Navigate = useNavigate();

  const Login = () => {
    const username = userRef.current.value;
    const email = emailRuf.current.value;
    const password = passwordRuf.current.value;
    const id = Math.floor(Math.random() * 100);

    setUser([...user, { username, email, password, id }]);
    console.log(username);
    console.log(password);

    Navigate('/signin')
  };

  return (
    <div>
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        textAlign: "center",
        paddingBlockStart: "100px",
    
        paddingBottom: "8rem",
      }}
    >
      <h3> SignUp Page </h3>
      <br />
      <br />
      <lable>user name : </lable>
      <br />
      <input type="text" ref={userRef} />
      <br />
      <br />
      <lable>E-mail: </lable>
      <br />
      <input type="email" ref={emailRuf} />
      <br />
      <br />
      <lable>Password</lable>
      <br />
      <input type="password" ref={passwordRuf} />
      <br />
      <br />
      <br />
      <button onClick={Login}>SignUp</button>
      <br />
      <br />
      <button onClick={() => Navigate("/")}>back</button>
    </form>

        </div>
  );
};

export default SignUp;
