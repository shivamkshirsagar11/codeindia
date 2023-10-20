import React from 'react'

export default function CodeInputArea({props}) {
  function setCode(e){
    // console.log("In code input area", e.target.value)
    props.setUserCode(e.target.value)
  }
  return (
    <>
     <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={setCode}></textarea>
  <label htmlFor="floatingTextarea2">Enter your code here!!</label>
</div> 
    </>
  )
}
