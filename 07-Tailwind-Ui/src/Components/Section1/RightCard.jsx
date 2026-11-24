import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-cyan-600 overflow-hidden relative rounded-4xl shrink-0'>
        <img className='h-full w-full object-cover ' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard