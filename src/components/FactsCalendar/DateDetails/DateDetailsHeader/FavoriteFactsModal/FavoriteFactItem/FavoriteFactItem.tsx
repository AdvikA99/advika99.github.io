import React, { useEffect, useState } from 'react';
import './FavoriteFactItem.css';
import Modal from '@mui/material/Modal';
import ConfirmRemoveFavoriteFactModal from '../ConfirmRemoveFavoriteFactModal/ConfirmRemoveFavoriteFactModal';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';

function FavoriteFactItem(props: any) {
  const theme = useTheme();
  
  const [openConfirmRemoveFavoriteFactModal, setOpenConfirmRemoveFavoriteFactModal] = useState(false);
  const handleOpen = () => setOpenConfirmRemoveFavoriteFactModal(true);
  const handleClose = () => setOpenConfirmRemoveFavoriteFactModal(false);

  return (
    <Box className="favoriteFactItem" sx={{color: theme.palette.primary.contrastText}}>
      <p className="favoriteFactText"><span className="favoriteFactItemYear">({props.fact.year})</span> {props.fact.fact}</p>
      <button className="removeFavoriteFactButton" onClick={handleOpen}>✖</button>

      <Modal
        open={openConfirmRemoveFavoriteFactModal}
        onClose={handleClose}>
          <div><ConfirmRemoveFavoriteFactModal onConfirmRemove={props.onRemoveFavoriteFact} onCancel={handleClose}/></div>
      </Modal>
    </Box>
  );
}

export default FavoriteFactItem;
