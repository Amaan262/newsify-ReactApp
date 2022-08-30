import React from 'react'
import spinner from './../assets/blue_spinner.gif'
const Loading = () => {
  return (
    <>
    <div className='flex  mt-5 justify-center h-[100vh]'>

    <img src={spinner} className="w-[4rem] h-[4rem] " alt="spinner" />
    </div>
    </>
  )
}

export default Loading