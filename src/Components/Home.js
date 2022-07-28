import React, { useEffect, useState } from 'react'
import { storage } from '../Config/FbcConfig'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

const Home = () => {
    const [File, setFile] = useState(null)
    const [list, setList] = useState({
        images:[]
    })

    const folderRef = ref(storage, 'images/')

    const handleChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleClick = () => {
        const uploadRef = ref(storage, `images/${File.name}`)
        if(File !== null){
            uploadBytes(uploadRef, File)
            .then((snapshot)=>{
                getDownloadURL(snapshot.ref)
                .then((url)=>{
                    setList({
                        ...list,
                        images : [...list.images, url]
                    })
                })
            })
        }
    }

    useEffect(() => {
        listAll(folderRef)
        .then((res)=>{
            res.items.forEach((item)=>{
                getDownloadURL(item)
                .then((url)=>{
                    setList({
                        ...list,
                        images : [...list.images, url]
                    })
                })
            })
        })
    }, [])
    
  return (
    <div>
        <input type="file" onChange={handleChange}/>
        <button onClick={handleClick}>Upload</button>
        {list.images.map((url)=>{
            return(
                <img src={url} />
            )
        })}
    </div>
  )
}

export default Home