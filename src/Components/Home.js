import React, { useState } from 'react'
import { storage } from '../Config/FbcConfig'
import { ref, uploadBytes } from 'firebase/storage'

const Home = () => {
    const [File, setFile] = useState(null)

    const handleChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleClick = () => {
        const uploadRef = ref(storage, `images/${File.name}`)
        uploadBytes(uploadRef, File)
        .then((response)=>{
            console.log(response);
        })
    }
  return (
    <div>
        <input type="file" onChange={handleChange}/>
        <button onClick={handleClick}>Upload</button>
    </div>
  )
}

export default Home