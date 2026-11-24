import React from 'react'
import RightCard from './RightCard'

export const RightContent = (props) => {
  return (
    <div id='right'   className='h-full w-2/3 p-6 rounded-4xl flex flex-nowrap overflow-x-auto gap-10'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
        })}


    </div>

  )
}
