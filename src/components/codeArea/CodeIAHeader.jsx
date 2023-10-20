import React,{useState} from 'react'
import {Link} from "react-router-dom";
export default function CodeIAHeader({props}) {
    const currentChoiceOfLanguage = props.setLang
    const [languageObj, _] = useState([["C(gcc)",6], ["C++(gcc)",7], ["Python<3", 5], ["python>=3",24], ["Javascript",17]]);
    
  return (
    <>
<div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    {props.lang["lang"]}
  </button>
  <ul className="dropdown-menu">
  {languageObj && languageObj.map((ele, index)=>{
        return <li key={index}><a className="dropdown-item" onClick={()=>currentChoiceOfLanguage({"lang":ele[0], "code":ele[1]})}>{ele[0]}</a></li>
    })}
  </ul>
</div>
    </>
  )
}
