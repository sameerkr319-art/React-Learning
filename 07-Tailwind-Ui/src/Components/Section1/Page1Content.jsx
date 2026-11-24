import React from 'react'
import LeftContent from './LeftContent'
import { RightContent } from './RightContent'
import 'remixicon/fonts/remixicon.css'

const page1content = (props) => {
  return (
    <div className='pb-16 px-18 pt-6 gap-10 h-[90vh] items-center flex justify-between'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default page1content