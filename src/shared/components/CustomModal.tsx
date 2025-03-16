import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { ReactNode } from 'react';

interface ICustomDialogProps {
  open: boolean;
  title: string;
  content: ReactNode;

}

const CustomModal = ({ open, title, content }: ICustomDialogProps) => {
  return (
    <Dialog open={open}>
      <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
      <DialogTitle sx={{p:1}}>{title}</DialogTitle>
      <DialogContent sx={{pt:'10px !important'}}>{content}</DialogContent>
      </Box>
      
    </Dialog>
  );
};

export default CustomModal;
