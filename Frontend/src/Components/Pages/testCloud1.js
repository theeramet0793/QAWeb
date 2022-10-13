import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "./firebase";
import { ref } from "firebase/storage";

const TestStorage = () => {

  const [progress, setProgress] = useState(0);
  const [urlPath, setUrlPath] = useState('');

  const formHandler = (e) =>{
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    UploadFile(file)
  }

  const UploadFile = (file) => {
    if(!file) return;
    const storageRef = ref(storage,`/mainBucket/subBucket/${file.name}`)
    const uploadTask = uploadBytesResumable( storageRef, file)

    uploadTask.on("state_changed", (snapshot)=>{
      const prog = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes)*100 )
      setProgress(prog)
    }, 
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then( url => {
        console.log('url =',url) 
        setUrlPath(url)})
    }
    )
  }

  return(
    <div>
        <form onSubmit={formHandler}>
          <input type={'file'} className='input'/>
          <button type='submit'>Upload</button>
        </form>
        <hr/>
        <h3>Uploaded{progress}%</h3>
        <div style={{width:"100px", height:"100px"}}>
          <img src={urlPath} alt="pic here"/>
        </div>
    </div>
  )
}

export default TestStorage;