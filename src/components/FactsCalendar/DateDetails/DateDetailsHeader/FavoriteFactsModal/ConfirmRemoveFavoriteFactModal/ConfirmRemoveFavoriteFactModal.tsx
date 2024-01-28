import React, { ReactNode, useEffect, useState } from 'react';
import './ConfirmRemoveFavoriteFactModal.css';

function ConfirmRemoveFavoriteFactModal(props: any) {

  return (
    <div id="confirmRemoveFavoriteFactModal">
      <p id="confirmRemoveFavoriteFactMessage">Are you sure you want to remove this fact from your favorites?</p>
      <p id="confirmRemoveFavoriteFactSubmessage">This action cannot be undone</p>
      <div id="confirmRemoveFavoriteFactButtonsRow">
        <button id="confirmRemoveFavoriteFactButton" onClick={() => {
          props.onConfirmRemove();
          props.onCancel();
        }}>Unfavorite</button>
        <button id="cancelRemoveFavoriteFactButton" onClick={props.onCancel}>Keep</button>
      </div>
    </div>
  );
}

export default ConfirmRemoveFavoriteFactModal;
