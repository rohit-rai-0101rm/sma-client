import React from 'react'
import { urlFor } from '../client'

const Pin = ({pin:{postedBy,image,_id,destination}}) => {
    console.log(postedBy)
    return (
        <div>
           <img className='rounded-lg w-full' alt="user-post" src={urlFor(image).width(250).url()}/>
        </div>
    )
}

export default Pin
