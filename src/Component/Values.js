import React from 'react'
import Values01 from "../assest/Rectangle 5972.png"
import Values02 from "../assest/Rectangle 5974.png"

function Values() {
  return (
    <div className='relative top-[2914px] z-10'>
        <div className=''>
            <img src={Values01} alt='' className='w-[1700px] '/>
        </div>
        
            <div className='absolute z-1'>
                <img src={Values02} alt='' className=''/>
            </div>
        
    </div>
  )
}

export default Values