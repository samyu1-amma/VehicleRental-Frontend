import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addPayment } from '../actions/payments';

export default function AddPaymentForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   bookingId:0,
   paymentId:0,
  paymentMode:'',
   paymentDate:"dd-mm-yyy",
   paymentStatus:''

}
 
const [payment,setPayment]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setPayment({...payment,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if(!payment.bookingId || !payment.paymentId || !payment.paymentMode || !payment.paymentDate || 
    !payment.paymentStatus) return;
 console.log(payment+'from AddPaymentForm')
props.addPayment(payment);
dispatch(addPayment(payment));
setPayment(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<h1>Payment Module</h1><br>
</br>

<label>paymentId</label>
<input 
type='number'
name='id'
value={payment.paymentId}
onChange={handleInputChange}/><br></br>
<br></br>

<label>bookingId</label>
<input 
type='number'
name='id'
value={payment.bookingId}
onChange={handleInputChange}/><br></br>
<br></br>

<label>PaymentMode</label>
<select name="Payment Mode" id="Payment Mode">
    <option value="Card">Card</option>
    <option value="Cash">Cash</option>
  </select><br></br>
  <br></br>


<label>paymentDate</label>
<input 
type='date'
name='PayamentDate'
value={payment.paymentDate}
onChange={handleInputChange}/><br></br>
<br></br>

<label>paymentStatus</label>
<input 
type='text'
name='paymentStatus'
value={payment.paymentStatus}
onChange={handleInputChange}/><br></br>
<br></br>

<button>Add Payment</button>

</form>


</>
)


}