import React, {useState} from 'react';
import Navbar from './Navbar';
import CodeInputArea from '../codeArea/CodeInputArea';
import CodeIAHeader from '../codeArea/CodeIAHeader';
// ------------------actions-----------------------
import { sendCodeCompile } from '../../action/sendCode';
export default function Home({props}) {
  const [lang, setLang] = useState({"lang":"python>=3", "code":5});
  const [userCode, setUserCode] = useState("");
  const sendRunCode = async (input, cargs)=>{
    const res = await sendCodeCompile(userCode, lang["code"], input, cargs);
    console.log("from home, runcode, ", res);
  }
  return (
    <>
      <Navbar props={{logo:props.logo}}/>
      <h1>This is home</h1>
      <h2>{userCode}</h2>
      <h3>Current Language: {lang["lang"]}</h3>
      <CodeIAHeader props={{setLang:setLang, lang:lang}}/>
      <CodeInputArea props={{setUserCode:setUserCode}}/>
      <button className="btn btn-success" onClick={sendRunCode}>Run</button>
    </>
  )
}
