
        import React from "react";
        import domtoimage from 'dom-to-image';
        import flier from "../src/assets/main_flier.jpg"
        import avatar from "../src/assets/avatar.jpg"
       
        const previewContainer = document.getElementById('preview-container');
        const imagePreview = document.getElementById('image-preview');
        
        
        
export default function AppFunction(){
  const [imageValue, setImageValue] = React.useState(avatar)

  function previewRun(){
    const fileInput = document.getElementById('file-upload');
    if(fileInput){
/* console.log(fileInput) */

      fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
          console.log(file)
            // Create a URL for the selected file
            const objectURL = URL.createObjectURL(file);
            console.log(objectURL)
            // Set the image source to the object URL
            setImageValue(prevImageValue=> prevImageValue= objectURL)
            
            // Show the preview container
           /*  previewContainer.style.display = 'block'; */
        }
    });


    }
    

  }//end of preview function


  function downloadDivAsImage() {
    
          console.log('got to download');
      
         // const div = document.getElementById("formtodownload");
      
      
        // Get the div you want to download
const element = document.getElementById('formtodownload');  

// Options (optional)
const options = {
  quality: 0.95,
  width: element.scrollWidth * 8, // Scale up for better quality
  height: element.scrollHeight * 8,
  style: {
    transform: 'scale(8)',
    transformOrigin: 'top left'
  }
};

// Download as PNG
domtoimage.toPng(element, options)
  .then(function (dataUrl) {
    const link = document.createElement('a');
    link.download = 'my-div-image.png';
    link.href = dataUrl;
    link.click();
  })
  .catch(function (error) {
    console.error('Error generating image:', error);
  });
        
        }

return(


<>

<div className="container">
<h1>Make your flier by clicking on the avatar or "Choose File"</h1>

<div className="preview-container" id="preview-container">
            <img id="image-preview" className="preview-image" src={imageValue} alt="Preview"/>
        </div>
        
        <input type="file" id="file-upload" name="file" className="file-input"/>
        
        <label onClick={previewRun} for="file-upload" className="file-upload-btn">Choose File</label>
        
       
  <div className="imagediv" id="formtodownload">

<label onClick={previewRun} for="file-upload" >
  <img className="testing" src={imageValue} alt="" />


  </label>

  <img className="flier" src={flier} alt="" />


  
  </div>
  
  <button onClick={downloadDivAsImage} className="download">Download Flier</button>

</div>




</>




)




}