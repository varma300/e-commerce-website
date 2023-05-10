import { useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Context from '../Context'


const Add = ( )=> {
  const nameRef = useRef()  
  const prizeRef = useRef()
  const imgRef = useRef()
  const qtyRef = useRef()
  const genderRef = useRef()
  const contextState = useContext(Context)
  const {products, setProducts} = contextState

  
  const Navigate = useNavigate()

const AddProduct = ()=> {
    const randomNum = Math.floor(Math.random() * 101); // generates a random integer between 0 and 100 (inclusive)
    const name = nameRef.current.value;
    const prize = prizeRef.current.value;
    const qty = qtyRef.current.value;
    const img = imgRef.current.value;
    const gend = genderRef.current.value;
    const id = randomNum
     setProducts([...products, {name, prize,qty,img,gend,id}]) 
     
     Navigate('/Admin/product')
  }
  

  console.log(products);
  
  return (
    <div style={{textAlign:"center", backgroundColor:'lightblue', padding: '8rem'}}>
      <h1 style={{textAlign:'center',paddingBlockStart:'3rem' ,paddingBottom:'3rem'}}> Add Data </h1>
      <lable> Product Name </lable><br/>
      <input type='text' ref={nameRef} /> <br/><br/>
      <lable> Product Prize </lable><br/>
      <input type='text' ref={prizeRef} /> <br/><br/>
      <lable> image </lable><br/>
      <input type='text' ref={imgRef} /> <br/><br/>
      <lable> Product Quantity </lable><br/>
      <input type='text' ref={qtyRef} /> <br/><br/>
      <lable> Gender </lable><br/>
      <input type='text' ref={genderRef} /> <br/><br/><br/>
      <button onClick={AddProduct} >Add Product</button><br/><br/>
      <button onClick={ ()=> Navigate('/Admin/product') } >Back</button>
   
      </div>
  )
}


export default Add

