import React from 'react'
import Navbar from './Navbar'
export default function Home({props}) {
  return (
    <>
      <Navbar props={{logo:props.logo}}/>
      <h1>This is home</h1>
    </>
  )
}
