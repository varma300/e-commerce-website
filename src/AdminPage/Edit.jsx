import { useContext } from "react";
// import { useParams } from "react-router-dom";
import Context from "../Context";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Edit = () => {
  const contextState = useContext(Context);
  const { products, setProducts, edit } = contextState;
  const inputNameRef = useRef();
  const inputImgRef = useRef();
  const inputPriceRef = useRef();
  const inputQtyRef = useRef();
  const inputGenRef = useRef();

  const editHandler = () => {
    const name = inputNameRef.current.value;
    const img = inputImgRef.current.value;
    const prize = inputPriceRef.current.value;
    const qty = inputQtyRef.current.value;
    const gend = inputGenRef.current.value;
    const id = Math.floor(Math.random() * 101);
    setProducts([...products, { name, prize, qty, img, gend, id }]);
    console.log(products);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1
          style={{
            textAlign: "center",
            paddingBlockStart: "3rem",
            paddingBottom: "8rem",
          }}
        >
          Edit Page
        </h1>
        {edit.map((x) => (
          <div key={x.id} style={{ textAlign: "center" }}>
            <lable>name</lable>
            <br />
            <input ref={inputNameRef} defaultValue={x.name} />
            <br /> <br />
            <lable>image</lable>
            <br />
            <input ref={inputImgRef} defaultValue={x.img} />
            <br />
            <br />
            <lable>price</lable>
            <br />
            <input ref={inputPriceRef} defaultValue={x.prize} />
            <br />
            <br />
            <lable>Qty</lable>
            <br />
            <input ref={inputQtyRef} defaultValue={x.qty} />
            <br />
            <br />
            <lable>Gender</lable>
            <br />
            <input ref={inputGenRef} defaultValue={x.gend} />
            <br />
            <br />
            <br />
            <button onClick={editHandler}>Change</button>
          </div>
        ))}
      </form>
      <Link to="/Admin/product">Back</Link>
    </div>
  );
};

export default Edit;
