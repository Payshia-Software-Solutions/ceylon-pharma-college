import React from 'react'

function Counter() {
  return (
    <div>
        <div className='w-full flex justify-center  px-8 py-12'>
            <div className='grid  grid-cols-2  md:grid-cols-3 justify-center  gap-4 md:gap-[150px]'>
                <div>
                    <h2 className='text-4xl font-bold mt-4'>1234 <span>+</span></h2>
                    <p className='text-lg uppercase font-semibold    '>Over <span>12345</span> students</p>
                </div>
                {/*2 */}
                <div>
                    <h2 className='text-4xl font-bold mt-4'>1234 <span>+</span></h2>
                    <p className='text-lg uppercase font-semibold    '>Over <span>12345</span> students</p>
                </div>
                {/*3 */}

                <div>
                    <h2 className='text-4xl font-bold mt-4'>1234 <span>+</span></h2>
                    <p className='text-lg uppercase font-semibold    '>Over <span>12345</span> students</p>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Counter
