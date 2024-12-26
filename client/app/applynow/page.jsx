import ApplyNow from '@/components/ApplyNow'
import SectionHeader from '@/components/Common/SectionHeader'
import React from 'react'

function page() {
  return (
    <div className='mt-24'>

        <SectionHeader title={"Register"} imgURL={"/assets/images/cover.png"}/>
      <ApplyNow/>
    </div>
  )
}

export default page
