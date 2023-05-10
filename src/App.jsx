import Admin from "./AdminPage/AdminPage";
import { Routes, Route, useLocation } from "react-router-dom";
import AddData from "./AdminPage/AddData";
import Context from "./Context";
import { useState, useEffect } from "react";
import Collection from "./Component/Collections";
import Edit from "./AdminPage/Edit";
import SignUp from "./Component/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./AdminPage/Product";
import User from "./AdminPage/User";
import NavBar from "./Component/Nav";
import Home from "./Component/Home";
import View from "./Component/View";
import Cart from "./Component/Cart";
import Kid from "./Component/Kids";
import Women from "./Component/Women";
import Men from "./Component/Men";
import Footer from "./Component/Footer";
import Shoe from "./Component/mocCollections";
import AdminLogin from "./AdminPage/AdminLogin";
import Login from "./Component/SignIn";


export default function App() {
  const [products, setProducts] = useState(Shoe);//product state
  const [user, setUser] = useState([]); // user SignUp state
  const [login, setLogin] = useState([]); // user Signin state
  const [edit, setEdit] = useState([]);  //Product edit state
  const [kart, setKart] = useState([]);  //cart state
  const [change, setChange] = useState(false); // change nav bar of admin and page


  const location = useLocation();
  const globalStates = {
    products,
    setProducts,
    user,
    setUser,
    edit,
    setEdit,
    kart,
    setKart,
    login,
    setLogin
  };

  useEffect(() => {
    if (location.pathname.includes("/Admin")) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [location]); 

  return (
    <div className="App" style={{ paddingTop: "1rem" }}>
      <Context.Provider value={globalStates}>
        {change ? null : <NavBar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kid" element={<Kid />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />

          <Route path="/Admin" element={<Admin />} />
          <Route element={<Admin />}>
            <Route path="/Admin/add" element={<AddData />} />
            <Route path="/Admin/edit/:id" element={<Edit />} />
            <Route path="/Admin/product" element={<Product />} />
            <Route path="/Admin/user" element={<User />} />
            
          </Route>
          <Route>
          <Route path="/adminLogin" element= {<AdminLogin/>}/>
          </Route>
          
        </Routes>
        
        {change ? null : <Footer />}
      </Context.Provider>
    </div>
  );
}
