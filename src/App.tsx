import "./styles.css"
import approv from "./appr.jpg"
import { Song } from "./components/molecules/song"
import { useEffect, useState } from "react"
import { Bucket } from "./components/organisms/bucket"
import axios from "axios"
import { Test } from "./components/atoms/test"

export const App = () => {
  
  const [bucket,setBucket]=useState<any[]>([]);
 
   useEffect( () =>{
       axios.get('http://localhost:5000/buckets').then(res =>{
        setBucket(res.data);
        
       }).catch(err =>{
        console.log(err);
       })
       
    },[])
  return (
    <>
    {/* {<Test/>} */}
      
      <Bucket  bucket={bucket} />
     
    </>
  )
}
