import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !", "success");
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !", "success");
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared !", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnCopy = () => { 
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    //Javascript Regex
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !", "success");
    }

    const [text, setText] = useState('Enter text here');
    
    // text = "new text"; //Wrong way to change state
    // setText("mew text");    // Correct way to change the state

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'grey':'white',
                        color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.length===0?0:text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in textbox above to preview"}</p>
    </div>
    </>
    
  )
}
