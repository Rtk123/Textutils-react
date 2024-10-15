import React, { useState } from 'react';

export default function Text(props) {
    const [text, setText] = useState("");
    const [readingTime, setReadingTime] = useState(0);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText); 
        calculateReadingStats(newText); // Update reading time after transformation
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText); 
        calculateReadingStats(newText); // Update reading time after transformation
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        calculateReadingStats(newText); // Calculate reading stats as text changes
    }

    const handleClearClick = () => {
        setText("");
        setReadingTime(0); // Reset reading time when clearing text
        props.showAlert("Text has cleared !", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
        props.showAlert("Clipboard Copied !", "success");
    }

    const handlePasteClick = async () => {
        const clipboardText = await navigator.clipboard.readText();
        setText(clipboardText);
        calculateReadingStats(clipboardText); // Update reading stats after pasting
        props.showAlert("Clipboard pasted", "success");
    }

    const handlePronounceClick = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
        props.showAlert("You are listening !", "success");
    }

    const calculateReadingStats = (textToAnalyze = text) => {
        const words = textToAnalyze.trim().split(/\s+/).filter(word => word.length > 0).length; // Filter out empty strings
        const averageReadingSpeed = 250; // words per minute
        const time = words / averageReadingSpeed;
        setReadingTime(time.toFixed(2));
        props.showAlert("Calculation has started !", "success");
    };
    const handleRemoveSpaces = () => {
        setText(text.replace(/\s+/g, ' ')); // Removes all spaces from the text
        props.showAlert("Removed extra spaces !", "success");
      };
      const capitalizeFirstLetter = () => {
        const capitalizedText = text
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        setText(capitalizedText);
        props.showAlert("Capitalized first letter !", "success");
      };
    
    

    return (
        <>
            <div>
                <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading} </h1>
                <div className="mb-3">
                <div className="mb-3">
                
          <textarea className="form-control" value={text} onChange={handleOnChange} id="" rows="8" placeholder='Enter you text which do you want to write..'style={{backgroundcolour: props.mode==='dark'? 'white': '#42743', color:props.mode=== 'dark'?'grey': 'black'}} ></textarea>
                      </div>
                        
                    
                    
                </div>
                
                
                
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-info mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-warning mx-2" onClick={handlePasteClick}>Paste</button>
                <button className="btn btn-success mx-2" onClick={calculateReadingStats}>Calculate</button>
                 <button className="btn btn-light mx-2 " onClick={handlePronounceClick}>Pronounce</button> 
                 <button className='btn btn-secondary btn-lg active mx-2' onClick={handleRemoveSpaces}>Remove Spaces</button>
                 <button className='btn btn-info mx-2' onClick={capitalizeFirstLetter}>Capitalize First Letter</button>
               
                
            </div>
            <div className="container"style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter(word => word.length > 0).length} Words and {text.length} Characters</p>
                <p>Estimated Reading Time: {readingTime} Minutes</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here."}</p>
            </div>
        </>
    );
}
