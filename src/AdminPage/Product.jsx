import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import Context from "../Context";
import { BsSearch } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";


const Product = () => {
  const Navigate = useNavigate();
  const contextState = useContext(Context);
  const { products, setProducts, setEdit } = contextState;
  const [searchdata, setSearch] = useState([])

  const searchRef = useRef();
  
  const searchHandle = () => {
    const productNames = products.map((product) => product.name);
    const searchName = searchRef.current.value;

    if (productNames.includes(searchName)) {
     setSearch(searchName)
    } else {
      alert("Product is not in the list");
    }
  };

  const productDelet = (element) => {
    const removeID = parseInt(element.target.id);
    const filterdata = products.filter((e) => e.id != removeID);
    setProducts(filterdata);
  };

  const productEdit = (element) => {
    const removeID = parseInt(element.target.id);
    const editData = products.filter((e) => e.id === removeID);
    const filterdata = products.filter((e) => e.id !== removeID);
    setProducts(filterdata);
    setEdit(editData);
    console.log(editData);

    Navigate("/Admin/edit/:id");
  };

  console.log(products);
  return (
    <div style={{backgroundColor:'lightblue'}}>
      <h1
        style={{
          textAlign: "center",
          paddingBlockStart: "1rem",
          paddingBottom: "5rem",
          backgroundColor: "lightblue",
        }}
      >
        {" "}
        Product Admin{" "}
      </h1>

      <button onClick={() => Navigate("/Admin/add")}>
        
        Add Product
      </button>
      <div style={{ paddingTop:'2rem' }}>
      <Button>
      <Link to={"/"} style={{color: "white"}} >
      Home
      </Link>
      </Button>
      </div>
      <div style={{ textAlignLast: "end", paddingRight: "8rem" }}>
        <input type="text" ref={searchRef} placeholder="Product Search" />
        <button onClick={searchHandle} style={{ border: "20p" }}>
          <BsSearch />
        </button>
        {searchdata.length > 0 ? (
            <p>{`${searchdata} is in the list`}</p>
          ) :null}
      </div>

      <hr />
      <div style={{ textAlignLast: "center" }}>
        <Table striped="columns">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Gender</th>
            </tr>
          </thead>
          {products.map((e) => (
            <tbody key={e.id}>
              <tr>
                <td>1</td>
                <td><img src={e.img} style={{width:'5rem'}} />  </td>
                <td> {e.name} </td>
                <td>$ {e.prize} </td>
                <td> {e.gend} </td>
                <Button id={e.id} onClick={productEdit}>
                  Edit
                </Button>
                <Button id={e.id} onClick={productDelet}>
                  Delete
                </Button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    
    </div>
  );
};

export default Product;
