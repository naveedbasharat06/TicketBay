import React from 'react'
import TicketSummury from '@/components/checkout'
import { useRouter } from "next/router";

function CheckOut() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>
      <TicketSummury id={id}/>
    </div>
  )
}

export default CheckOut