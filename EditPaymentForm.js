import React , {useContext, useEffect, useState} from 'react'

export default function EditPaymentForm(props){
     const [payment,setPayment] =useState(props.currentPayment)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setPayment({...payment,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updatePayment(payment.id,payment);
    }


   

     return (
        <form onSubmit={submitHandler}>
         
<label>Id</label>
<h1>{props.currentPayment.id}</h1>

<label>paymentMode</label>
<input 
type='text'
name='PaymentMode'
value={product.paymentMode}
onChange={handleInputChange}/>


<label>paymentDate</label>
<input 
type='date'
name='paymentDate'
value={product.paymentDate}
onChange={handleInputChange}/>


<label>paymentStatus</label>
<input 
type='text'
name='paymentStatus'
value={payment.paymentStatus}
onChange={handleInputChange}/>


<button>Update Product</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




}