import React from 'react'
import Lottie from 'lottie-react';
import loadingJson from "src/assets/lottie/loading.json"

const LoadingModal = () => {
  return (
    <div className='flex flex-1 justify-center items-center'>
        <Lottie
            className="w-[200px] h-[200px]"
             animationData={loadingJson} loop={true} />
    </div>
  )
}

export default LoadingModal;