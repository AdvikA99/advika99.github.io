import React, { useEffect, useState } from 'react';
import './FactDisplay.css';
import { FavoriteFact } from '../DateDetails';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { amber } from '@mui/material/colors';

export interface Fact {
  year: string;
  fact: string;
}

// Formats current date as ddMM
// Used as key for fetching facts related to that date
function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // +1 as Months are zero-based
  const formattedDate = day + month;

  return formattedDate;
}

function FactDisplay(props : any) {
  const [factList, setFactList] = useState<Fact[] | null>(null);
  const [curFactInd, setCurFactInd] = useState(0);
  const [factFavorited, setFactFavorited] = useState(false);
  
  const factListKey = getFormattedDate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/daily_facts.json");
        const data = await response.json();
        setFactList(data[factListKey]);
      } catch (error) {
        console.error('Error loading facts:', error);
      }
    };

    fetchData();
  }, []);

  const setRandomCurFactInd = () => {
    if (factList && factList.length > 0) {
      setCurFactInd(Math.floor(Math.random() * factList.length));
    }
  }

  useEffect(() => {
    setRandomCurFactInd();
  }, [factList]);

  useEffect(() => {
    // Check if fact is favorited or not
    const isFavorited = (props.favoriteFacts as FavoriteFact[]).some(
      fact => { return fact.factInd === curFactInd && fact.factListKey === factListKey });
    setFactFavorited(isFavorited);
  }, [curFactInd, props.favoriteFacts]);

  const handleToggleFavoriteFact = () => {
    if (factFavorited) {
      // Remove from local storage
      const updatedFavoriteFacts = props.favoriteFacts.filter((fact: FavoriteFact) => fact.factListKey !== factListKey || fact.factInd !== curFactInd);

      localStorage.setItem("favoriteFacts", JSON.stringify(updatedFavoriteFacts));
      props.setFavoriteFacts(updatedFavoriteFacts);
      setFactFavorited(false);
    } else {
      // Add to local storage
      const updatedFavoriteFacts = [...props.favoriteFacts, {factListKey: factListKey, factInd: curFactInd}];
      localStorage.setItem("favoriteFacts", JSON.stringify(updatedFavoriteFacts));
      props.setFavoriteFacts(updatedFavoriteFacts);
      setFactFavorited(true);
    }
  }

  return (
    <div>
      {factList && (
          <div id="factContainer">
            <p id="factDate"><em>On this date in <strong>{factList[curFactInd].year}</strong>,</em></p>
            <div id="factRow">
              {!factFavorited && 
                <StarBorderRoundedIcon 
                id="factFavorite" 
                sx={{fontSize: 32, color: amber[500], "&:hover": {color: "white"}}}
                onClick={() => handleToggleFavoriteFact()}/>
              }
              {factFavorited && 
                <StarRateRoundedIcon 
                id="factFavorite" 
                sx={{fontSize: 32, color: amber[500], "&:hover": {color: "white"}}}
                onClick={() => handleToggleFavoriteFact()}/>
              }
              <p id="fact">{factList[curFactInd].fact}</p>
              <RefreshRoundedIcon 
                id="factRefresh" 
                sx={{fontSize: 32, color: amber[500], "&:hover": {color: "white"}}}
                onClick={() => setRandomCurFactInd()}/>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default FactDisplay;
