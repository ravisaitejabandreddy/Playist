
import { Typography } from '@mui/material';
import React from 'react';
interface TypographyProps {
  children: string;
  noWrap?: boolean;
  paragraph?: boolean;
  sx?: {};
  variant?:
    | 'h1'
    | 'h2'
    | 'subtitle1'
    | 'body1'
    | 'body2'
    | 'caption';
  variantMapping?: {};
}
export const TypographyComponent = ({
  children,
  ...props
}: TypographyProps) => {
  return (
  <Typography {...props}>{children}</Typography>
  )
}
