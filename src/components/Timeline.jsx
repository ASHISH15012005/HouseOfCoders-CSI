
import React from 'react'
import { Timeline1 } from './ui/timeline'



const Timeline = () => {

  const data = [
    {
      title: "Day 1",
      content: (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      )

    },
    {
      title: "Day 2",
      content: (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      )

    },
    {
      title: "Day 3",
      content: (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      )

    }
  ]

  return (
    <div id='timeline'>
      <Timeline1
        data={data}
      />
    </div>
  )
}

export default Timeline

