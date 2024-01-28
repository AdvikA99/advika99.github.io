import React, { useState } from 'react';
import './MainBanner.css';
import { Button, MenuItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function MainBanner(props: any) {
  const [isSearchFocused, setSearchFocused] = useState(false);

  return (
    <div id="bannerSection">
      <img id="bannerImage" src="craigslistRedesign/banner_image.jpg"></img>
      <div id="bannerCenterContainer">
        <p id="bannerHeader">Craigslist</p>
        <p id="bannerSubheader">{props.location}</p>
        <div 
          id="bannerSearchBar"
          style={{borderColor: isSearchFocused ? "rgb(150, 50, 255)" : "rgb(40, 40, 40)"}}>
          <SearchIcon id="searchIcon"/>
          <input 
            id="bannerSearchInput"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}/>
            <Button
              id="searchBarButton"
              sx={{
                backgroundColor: "rgb(150, 50, 255)",
                color: "white"
              }}>
                Search
            </Button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
