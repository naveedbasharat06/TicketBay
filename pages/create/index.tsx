import React from 'react'
import Category from '@/components/createEvent/category'
import BasicDetails from '@/components/createEvent/basicDetails'
import EventDescription from '@/components/createEvent/eventDescription'

function index() {
  return (
    <div className='p-1'>
        <Category></Category>
        <BasicDetails></BasicDetails>
        <EventDescription></EventDescription>
    </div>
  )
}

export default index