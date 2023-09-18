import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
export const Cart = ({onClose}) => {
   
 return <div>
      <IconButton onClick={onClose} color="primary" aria-label="Close">
        <CloseIcon />
      </IconButton>
 </div>
}