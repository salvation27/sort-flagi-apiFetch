import React from 'react'

export default function SerchInput({...any}) {
  console.log(any);
  return (
    <div>
      <input type="text" {...any}/>
    </div>
  )
}
