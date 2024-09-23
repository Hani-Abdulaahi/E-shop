import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingTogle, setBillingTogle] = useState(true)
    const [shibbingTogle, setShibbingTogle] = useState(false)
    const [paymentTogle, setPymentTogle] = useState(false)

    const[paymentMethod, setPaymentMethod] = useState("cod")
    const[shppingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        zip: ""
    })
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()

    const handleOrder = () => {
        const newOder = {
            products: cart.products,
            orderNumber: "12344",
            shippingInformation: shppingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOder)
        navigate('/order-confirmation')
    }
  return (
    <>
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
         <h3 className='text-2xl font-semibold mb-4'>CHECkOUT</h3>
         <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
         <div className='md:w-2/3'>
         <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between'
            onClick={() => setBillingTogle(!billingTogle)}>
                <h3 className='text-lg font-semibold mb-4'>Billing Information</h3>
                {billingTogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingTogle ? "" : "hidden"}`}>
                <div>
                    <label className='block text-gray-700'>Name</label>
                    <input type='text' placeholder='Enter Name' 
                    className='w-full px-3 py-2 border'/>
                </div>
            <div>
                <div>
                    <label className='block text-gray-700'>Email</label>
                    <input type='email' placeholder='Enter Email'
                    className='w-full px-3 py-2 border' />
                </div>
            </div>
            <div>
                <div>
                    <label className='block text-gray-700'>Phone</label>
                    <input type='text' placeholder='Enter Phone Number'
                    className='w-full px-3 py-2 border' />
                </div>
                </div>

            </div>

         </div>
         <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between'
            onClick={() => setShibbingTogle(!shibbingTogle)}>
                <h3 className='text-lg font-semibold mb-4'>Shipping Information</h3>
                {shibbingTogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shibbingTogle ? "" : "hidden"}`}>
                <div>
                    <label className='block text-gray-700'>Address</label>
                    <input type='text' placeholder='Enter Name' 
                    className='w-full px-3 py-2 border'
                    onClick={(e) => setShippingInfo({...shppingInfo, address: e.target.value})}/>
                </div>
            <div>
                <div>
                    <label className='block text-gray-700'>City</label>
                    <input type='email' placeholder='Enter Email'
                    className='w-full px-3 py-2 border' 
                    onClick={(e) => setShippingInfo({...shppingInfo, city: e.target.value})}/>
                </div>
            </div>
            <div>
                <div>
                    <label className='block text-gray-700'>Zip Code</label>
                    <input type='text' placeholder='Enter Phone'
                    className='w-full px-3 py-2 border' 
                    onClick={(e) => setShippingInfo({...shppingInfo, zip: e.target.value})}/>
                </div>
                </div>

            </div>

         </div>
         {/*pyment*/}

         <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between'
            onClick={() => setPymentTogle(!paymentTogle)}>
                <h3 className='text-lg font-semibold mb-4'>Payment Method</h3>
                {shibbingTogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentTogle ? "" : "hidden"}`}>

                <div className='flex items-center mb-2'>
                <input type='radio' name='payment' checked = {paymentMethod === "cod"} 
                onChange={() => setPaymentMethod("cod")}/>
                    <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                </div>

                <div className='flex items-center mb-2'>
                <input type='radio' name='payment' checked = {paymentMethod === "dc"} 
                onChange={() => setPaymentMethod("dc")}/>
                    <label className='block text-gray-700 ml-2'>Debit Card</label> 
                </div>
                {paymentMethod === "dc" && (
                    <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                        <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                            <input type='text' placeholder='Enter Card Number'
                            className='border p-2 w-full rounded' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                            <input type='text' placeholder='Enter card holder name'
                            className='border p-2 w-full rounded' required />
                        </div>
                        <div className='flex justify-between mb-4'>
                            <div className='w-1/2 mr-2'>
                                <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                                <input type='text' placeholder='MM/YY' className='border p-2 w-full rounded' />
                            </div>
                            <div className='w-1/2 ml-2'>
                                <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                <input type='text' placeholder='CVV'
                                className='border p-2 w-full rounded' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
         </div>
         </div>
         <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
         <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
         <div className='space-y-4'>
            {cart.products.map(product => (
                <div key={product.id} className='flex justify-between'>
                    <div className='flex items-center'>
                        <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                        <div className='ml-4'>
                            <h4 className='text-md font-semibold'>{product.name}</h4>
                            <p className='text-gray-600'>
                                ${product.price} x {product.quantity}
                            </p>
                        </div>
                    </div>
                    <div className='text-gray-800'>
                    &{product.price} * {product.quantity}
                    </div>
                </div>
            ))}
         </div>
         <div className='mt-4 border-t pt-4'>
            <div className='flex justify-between'>
                <span className='font-semibold'>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
         </div>
         <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
         onClick={handleOrder}>Place order</button>
         </div>
         </div>
         </div>
    </>
  )
}


export default Checkout;