import React from 'react'
import './work.css'

import works from '../../assets/work'

const work = () => {
    return (
        <div className='works'>
            <div className='text'>
                <h1 className='text-4xl ' >Threads that tell story </h1>
                <p className='text-3xl'>Stitching your style precision passion  </p></div>
            <div className="image-cont">

                {works.map((work, index) => {
                    return (
                        <div key={index} className='card'>
                            <img src={work.w_img} />
                            <h1> {work.w_name}</h1>
                            <p></p>
                        </div>

                    )
                }
                )}
                
            </div>
            <hr />



        </div>

    )
}

export default work
