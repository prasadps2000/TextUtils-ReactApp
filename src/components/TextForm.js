import React,{useState} from "react";


export default function TextForm(props) {
    
    
    const handleUpClick=()=>{
    
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase!","success ");
        

    }
    const handleLpClick=()=>{
    
        console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase!","success ");
        

    }
    const handleClearText=()=>{
    
      console.log("cleartext was clicked" + text);
      let newText=("");
      setText(newText);
      props.showAlert("Text Cleared","success ");

      

  }
  const handleCapitalize=()=>{
    
    console.log("capitalize was clicked" + text);
    let newText=text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
    props.showAlert("Text Capitalized!","success ");

    

}
const copyToClipboard=()=>{
    
  console.log("copy to clipboard was clicked" + text);
  let newText;
  // alert("copied");
  


  
  
  if (text.length!==0){
    props.showAlert("copied","success ");
    //alert("copied");
    newText=navigator.clipboard.writeText(text);
  }
  else{
    props.showAlert("Nothing to copy","warning ");
    //alert("nothing to copy");
    
  }
  

  }
  const removeExtraSpaces=()=>{
    
    console.log("remove extra spaces was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces Removed","success ");
    
  
    }
  //setText(newText);
  


    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const[text,setText]=useState("");
    // text="new text"//wrong way to change the state
    // setText=("new text")//correct way to change the state


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        

      </div>

      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-success mx-2"  onClick={handleLpClick}>Convert to Lowercase</button>
      <button className="btn btn-danger mx-2"  onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-info mx-2"  onClick={handleCapitalize}>Captitalize Text</button>
      <button className="btn btn-dark mx-2"  onClick={copyToClipboard}>Copy to Clipboard</button>
      <button className="btn btn-secondary mx-2"  onClick={removeExtraSpaces}>Remove Extra Spaces</button>

      

    
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes reading time </p>
      <p>{text.split("\n").length} Lines</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
    </div>
    </>
  );
}
