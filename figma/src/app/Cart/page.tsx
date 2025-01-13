import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  return (
    <div className='flex flex-col md:flex-row p-6 md:space-x-6 space-y-6 md:space-y-0 min-h-screen'>
        <div className='flex-1'>
            <h2 className='font-medium text-[22px] text-[#111111] mb-4'>Bag</h2>
            <div className='
            flex items-center gap-[24px] border-b pb-4 mb-4'>
                <img src="/Image (5).png" alt="Library Stool Chair" className='w-[150px] h-[150px] object-cover' />
                <div className='ml-4 flex-1'>
                    <h3 className='font-normal  text-[16px] text-[#272343]'>Library Stool Chair</h3>
                    <p className='text-[#757575] text-[15px] font-normal'>Ashen Slate/Cobalt Bliss</p>
                    <p className='gap-[0.2px] text-[#757575] text-[14px] font-normal'>Size L Quantity 1</p>
                    <p className='flex gap-[16px] '><FaRegHeart />  <RiDeleteBin6Line /></p>
                </div>
                <div>
                    <p className='text-[15px] font-normal text-right text-[#111111]'>MRP: $99</p>
                </div>
            </div>
            <div className='
            flex items-center gap-[24px] border-b pb-4 mb-4'>
                <img src="/Image (8).png" alt="Library Stool Chair" className='w-[150px] h-[150px] object-cover' />
                <div className='ml-4 flex-1'>
                    <h3 className='font-normal  text-[16px] text-[#272343]'>Library Stool Chair</h3>
                    <p className='text-[#757575] text-[15px] font-normal'>Ashen Slate/Cobalt Bliss</p>
                    <p className='gap-[0.2px] text-[#757575] text-[14px] font-normal'>Size L Quantity 1</p>
                    <p className='flex gap-[16px] '><FaRegHeart />  <RiDeleteBin6Line /></p>
                </div>
                <div>
                    <p className='text-[15px] font-normal text-right text-[#111111]'>MRP: $99</p>
                </div>
            </div>
        </div>

        <div className='w-dull md:w-1/3 p-6 shadow-lg rounded-lg'>
            <h2 className='text-[21px] font-medium text-[#111111] mb-6'>Summary</h2>
            <div className='flex justify-between mb-4'>
                <p className='text-[14px] font-normal text-[#111111]'>Subtotal</p>
                <p className='font-medium text-[14px] text-right text-[#111111]'>$198.00</p>
            </div>
            <div className='flex justify-between mb-4'>
            <p className='text-[#111111] text-[15px] font-normal'>Estimated Delivery & Handling</p>
            <p className='text-[#111111] text-[15px] font-normal'>Free</p>
            </div>
            <div className='flex justify-between text-right text-[14px] font-normal text-[#111111]'>
            <p>Total</p>
            <p>$198.00</p>
            </div>
            <button className='mt-6 w-full py-3 bg-[#029FAE] text-[#FFFFFF] rounded-lg font-medium text-[15px] hover:bg-teal-600'>Member Checkout</button>
        </div>
      
    </div>
  )
}

export default Cart
