
import { TypographyComponent } from "../../atoms/typography"
import { useState } from "react";
import { DraggableDialog } from "../songdisplayvideo";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import more from "../../../images/more.jpg"
interface SongProps{
Name:string;
Link:string;
}
export const Song = (props:SongProps)=>{
    const [songplay,setSongPlay]=useState(false);
    const [menu,setMenu]=useState(false);
    return(
        <>
        <Box display={'grid'} gridTemplateColumns="300px 100px" border={"5px solid black"} marginTop={"10px"} marginLeft={"170px"} textAlign={"center"} alignItems={'bottom'}  justifyContent={'center'}  bgcolor={'lightgrey'} height={'70px'} width={'400px'} >
           <Box display={'grid'} onClick={()=>{setSongPlay(true)}}  gridTemplateRows={'35px 35px'}>
           <TypographyComponent sx={{'display':'inline-block'}} variant="subtitle1" children={props.Name} />
            <TypographyComponent  variant="caption" children={props.Link} /></Box> 
            <Button onClick={()=>{setMenu(true)}} ><img src={more} width={"50px"} /></Button>
            
        </Box>
        
        {
            songplay && <DraggableDialog setsong={setSongPlay} songname={props.Name} songlink={props.Link} />
        }
        
        </>
    )
}