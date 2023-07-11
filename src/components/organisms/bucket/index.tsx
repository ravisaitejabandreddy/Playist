import { Box, Button } from "@mui/material"
import { TypographyComponent } from "../../atoms/typography"
import { Song } from "../../molecules/song"
import { useState } from "react"
import { CreateBucket } from "../../molecules/createbucket"
import { AddSongs } from "../../molecules/addsongs"

interface BucketProps {
  bucket: any,
  
}
interface song {
  name: string
  link: string
}

interface MyObject {
  id: number
  name: string
  songs: song[]
}
export const Bucket = (props: BucketProps) => {
  const [songbox, setSongbox] = useState<MyObject>({
    id: 100,
    name: "saken",
    songs: [
      {
        name: "",
        link: "Click any of the buckets to see the songs available",
      },
    ],
  })
  const [bucketnumber,setBucketnumber]=useState(1);
  const [event,setEvent]=useState(false);

  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"50% 50%"}>
        <Box>
          
           <center>
           <Box display={'grid'} gridTemplateColumns={"auto auto"} >
            <TypographyComponent
              sx={{ "textShadow": "2px 2px grey" }}
              children={"BUCKETS"}
              variant="subtitle1"
            />
            <CreateBucket lengthofbucket={props.bucket.length} />
            </Box>
            </center>
            
          
          
          {props.bucket.map((bucketitem: any) => (
            <Box
              width="85%"
              height={"40px"}
              marginLeft={"5%"}
              border={"5px solid black"}
              marginTop={"10px"}
              rowGap={"115px"}
              display={"block"}
              textAlign={"center"}
              alignContent={"center"}
              justifyItems={"center"}
              bgcolor={"whitesmoke"}
              onClick={() => {
                
                setSongbox(bucketitem),setBucketnumber(bucketitem.id),setEvent(true)
              }}
            >
              <TypographyComponent
                key={bucketitem.id}
                children={bucketitem.name}
                variant="subtitle1"
              />
              
            </Box>
          ))}
        </Box>
        <Box>
          <center>
          <Box display={'grid'} gridTemplateColumns={"60% 40%"}  alignItems={'right'}>
            <TypographyComponent
              sx={{ "textShadow": "2px 2px grey" }}
              children={"SONGS"}
              variant="subtitle1"
            />
            <AddSongs   bucketId={bucketnumber} events={event}  />
            </Box>
          </center>
          {songbox.songs.map((song: any) => (
            <Box
              width={"85%"}
              height={"auto"}
              marginLeft={"5%"}
              textAlign={"center"}
              justifyContent={"center"}
              alignContent={"center"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <Song Name={song.name} Link={song.link} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}
