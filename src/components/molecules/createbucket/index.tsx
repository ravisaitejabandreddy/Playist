import { useState } from "react"

import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";

import React from "react";
import { Buttons } from "../../atoms/button";
import axios from "axios";
import { TypographyComponent } from "../../atoms/typography";
interface CreateBucketProps{
    lengthofbucket:any;
}
interface song {
    name: string
    link: string
  }
export const CreateBucket = (props:CreateBucketProps)=>{
    const [open, setOpen] = React.useState(false);
    const [name,setName]=useState("");
    const [songname,setSongName]=useState("");
    const [songlink,setSongLink]=useState("");
    const [errmsg,setErrmsg]=useState("");


    var songs = [{
        "name":songname,
        "link":songlink
    }]
    var id=props.lengthofbucket+1;
    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };
    const songNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSongName(event.target.value);
      };
      const songLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSongLink(event.target.value);
      };
    
      const Create = () =>{
        if(name.length==0 && songname.length==0 && songlink.length==0){
            setErrmsg("All the (*) marked fields are mandatory")
        }
     else{
        axios.post('http://localhost:5000/buckets',{
            id,
            name,
            songs
        }).then(res =>{ console.log('posting data',res)})
        setOpen(false)
        setName("")
        setSongName("")
        setSongLink("")
        setErrmsg("")
    }
    }
    
  
  
    return (
      <div>
        <Buttons color="primary" variant={"contained"} sx={{"width":"200px"}} size="small" onClick={()=>{setOpen(true)}} >
          Create Bucket
        </Buttons>
        <Dialog open={open} onClose={()=>{setOpen(false)}}>
          <DialogTitle>Create Bucket</DialogTitle>
          <DialogContent >
          
          <TextField
              maxRows={"40px"}
              autoFocus
              margin="dense"
              id="id"
              label="Bucket Id"
              type="number"
              variant="standard"
              value={id}
              disabled
            />
            <TextField
              sx={{"marginLeft":"30px"}}
              autoFocus
              margin="dense"
              id="Name"
              label=" Bucket Name"
              type="string"
              variant="standard"
              value={name}
              onChange={nameChange}
              required
            />
            <TextField
              sx={{"marginLeft":"7px"}}
              autoFocus
              margin="dense"
              id="SongName"
              label=" Song Name"
              type="string"
              variant="standard"
              value={songname}
              onChange={songNameChange}
              required
            />
            <TextField
              sx={{"marginLeft":"30px"}}
              autoFocus
              margin="dense"
              id="SongLink"
              label=" Song Link"
              type="string"
              variant="standard"
              value={songlink}
              onChange={songLinkChange}
              required
            />
           
          </DialogContent>
          <DialogActions>
          <Buttons onClick={()=>{setOpen(false)}} children="Cancel"  variant={"contained"} color="error"></Buttons>
          <Buttons onClick={Create} children="Submit" variant={"contained"} color="success"></Buttons>
          </DialogActions>
          <TypographyComponent children={errmsg}   variant="subtitle1" sx={{"color":"red","margin-left":"30%"}} />
        </Dialog>
      </div>
    )
    
}
