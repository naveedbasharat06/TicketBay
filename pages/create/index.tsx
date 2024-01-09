import React from 'react'
import Category from '@/components/createEvent/category'
import BasicDetails from '@/components/createEvent/basicDetails'
import EventDescription from '@/components/createEvent/eventDescription'
import EventLocation from '@/components/createEvent/eventLocation'
import OrganizerDetails from '@/components/createEvent/organizerDetails'
import Coupons from '@/components/createEvent/coupons'
import OtherSettings from '@/components/createEvent/otherSettings'

function index() {
  return (
    <div className='p-1'>
        <Category></Category>
        <BasicDetails></BasicDetails>
        <EventDescription></EventDescription>
        <EventLocation></EventLocation>
        <OrganizerDetails></OrganizerDetails>
        <Coupons></Coupons>
        <OtherSettings></OtherSettings>
    </div>
  )
}

export default index