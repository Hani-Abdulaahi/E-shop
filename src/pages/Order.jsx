import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Order = ({order}) => {
    const navigate = useNavigate()
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>Thank you for you Order</h2>
        <p>Your order has been placed successfuly you will receive an email confirmation shortly</p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
            <h3 className='texty-lg font-semibold mb-2'>Order Summary</h3>
            <p>Order Number: {order.oderNumber}</p>
            <div>
                <h2 className='text-md font-semibold mb-2'>Shipping information</h2>
                <p>{order.shippingInformation.address}</p>
                <p>{order.shippingInformation.city}</p>
                <p>{order.shippingInformation.zip}</p>
            </div>
            <div className='mt-4'>
                <h3 className='text-md font-semibold mb-4'>Products order</h3>
                {order.products.map(product => (
                    <div key={product.id} className='flex justify-between mt-2'>
                        <p>{product.name} x {product.quantity}</p>
                        <p>{product.price} * {product.quantity}</p>
                    </div>
                ))}
            </div>
            <div className='mt-4 flex justify-between'>
                <span>Total Price:</span>
                <span className='font-semibold'>{order.totalPrice}</span>
            </div>
            <div className='mt-6'>
                <button className='bg-green-500 text-white py-2 px-4 hover:bg-red-800'>Order tracking</button>
                <button className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800'
                onClick={() => navigate("/")}>Cotinue Shopping</button>
            </div>
        </div>
    </div>
  )
}

export default Order