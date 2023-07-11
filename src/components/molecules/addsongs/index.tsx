
import { useEffect, useState } from "react";

import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import data from "../../../../db.json";
import { Buttons } from "../../atoms/button";

 interface AddSongsProps {
  bucketId: number;
  events:any,
 
}

type Song = {
  name: string;
  link: string;
};

type Bucket = {
  id: number;
  name: string;
  songs: Song[];
};

type bucketData ={
  buckets:Bucket[];
}


 export const AddSongs = (props: AddSongsProps) => {
  const [open, setOpen] = useState(false);
  
  const [songname, setSongName] = useState("");
  const [songlink, setSongLink] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
 
  const songLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSongLink(event.target.value);
  };
   const songnamechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSongName(event.target.value);
  };
  const [bucketData, setBucketData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/buckets/');
        setBucketData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const addSongToBucket = async (bucketId: number, song: Song)=>{
  if(songname.length==0 && songlink.length==0){
      setErrmsg("All the (*) marked fields are mandatory")
      if(!pattern.test(songlink)){
        setErrmsg("Invalid Url")
      }
  }
  else{
  if (bucketData) {
    const updatedBuckets = bucketData.map((bucket:any) => {
      if (bucket.id === bucketId) {
        return {
          ...bucket,
          songs: [...bucket.songs, song],
        };
      }
      return bucket;
    });

    const updatedData: bucketData = {
      buckets: updatedBuckets,
    };


    setBucketData(updatedData);
    try {
      for(let i=1;i<=bucketData.length;i++){
      const response = await axios.delete(`http://localhost:5000/buckets/${i}`);
      
      if (response.status === 200) {
        console.log('Data deleted successfully.');
      } else {
        console.log('Failed to delete data.');
      }
      }
    } catch (error) {
      console.error('Error:', error);
    }
   updatedBuckets.map((bucket:Bucket)=>(

    axios.post('http://localhost:5000/buckets',bucket).then(res =>{ console.log('posting data',res)})

   ))
    
  }
  
   
  
  // console.log(bucket);
  
  setOpen(false)
  setSongName("")
  setSongLink("")
  setErrmsg("")
 
}
    

  
  }
  
   return (
    <>{ props.events &&
      <Buttons color="primary" variant={"contained"} sx={{ "width": "150px" }} size="small" onClick={() => { setOpen(true) }}>
        Add Songs
      </Buttons>
 }
      <Dialog open={open} onClose={() => { setOpen(false) }}>
        <DialogTitle>Add Song</DialogTitle>
        <DialogContent>
           <TextField
            sx={{ "marginLeft": "30px" }}
            autoFocus
            margin="dense"
            id="name"
            label="Song Name"
            type="string"
            variant="standard"
            value={songname}
            onChange={songnamechange}
            required
          />
           <TextField
            sx={{ "marginLeft": "30px" }}
            autoFocus
            margin="dense"
            id="songLink"
            label="Song Link"
            type="string"
            variant="standard"
            value={songlink}
            onChange={songLinkChange}
            required
          />
         </DialogContent>
        <DialogActions>
          <Buttons onClick={() => { setOpen(false) }} variant={"contained"} color="error">Cancel</Buttons>
          <Button variant="contained" color="success" onClick={() => {addSongToBucket(props.bucketId, { name: songname, link: songlink })}}>Submit</Button>
        </DialogActions>
        <Typography variant="subtitle1" sx={{ "color": "red", "marginLeft": "30%" }}>{errmsg}</Typography>
      </Dialog>
    </>
  )
}