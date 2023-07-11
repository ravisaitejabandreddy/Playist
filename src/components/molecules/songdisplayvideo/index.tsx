import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { Buttons } from '../../atoms/button';

interface DraggableDialogProps{
  songname:string,
  songlink:string
  setsong:any;
  }
function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export const DraggableDialog = (props:DraggableDialogProps)=> {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setsong(false);
  };

  return (
    <div>
      
      <Dialog
        open={open}
        
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle display={'grid'} gridTemplateColumns={"90% 10%"} style={{ cursor: 'move' }} id="draggable-dialog-title">
        {props.songname}
        
         <Buttons variant='contained' color='primary' onClick={handleClose}>
            Cancel
          </Buttons>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <iframe height={'400px'}  width={'500px'} src={props.songlink}>
          </iframe>
          </DialogContentText>
        </DialogContent>
        
         
          
        
      </Dialog>
    </div>
  );
}