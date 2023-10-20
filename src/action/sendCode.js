const sendCodeCompile =  async(userCode, languageCode, input, carg)=>{
    try{
        const data = {
            "LanguageChoice": `${languageCode}`,
			    "Program": userCode,
			    "Input": input,
			    "CompilerArgs" : carg
        }
        const header = {
            "Content-Type": "application/json",
        }
        const options = {
            mode: 'no-cors',
            method: "POST",
            headers:header,
            body: data
        }
        const res = await fetch("https://rextester.com/rundotnet/api",options)
        const resJson = await res.json();
        return resJson;
    }catch(err){
        console.log(err);
    }
}
export {sendCodeCompile};