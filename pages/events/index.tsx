import React from 'react'
import EventsSlider from '../../components/event/eventsSlider'
import EventDiscovery from '../../components/event/eventDiscovery'
import NewsLetter from '@/components/defaultComponents/newsLetter'

function Event() {
  return (
    <div>
        <EventsSlider/>
        <EventDiscovery/>
        <NewsLetter/>
    </div>
  )
}

export default Event