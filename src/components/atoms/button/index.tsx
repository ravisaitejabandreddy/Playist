import { Button as MuiButton } from "@mui/material"

interface ButtionProps{
  children: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  component?: HTMLElement;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  sx?: {};
  variant: "contained" | "outlined" | "text";
  onClick?:  (() => void);
}
export const Buttons = (props:ButtionProps)=>{
return(
  <>
  <MuiButton {...props} >{props.children}</MuiButton>
  </>
)
}