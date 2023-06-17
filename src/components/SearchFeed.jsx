import React from 'react'
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Videos from './Videos';
import FetchFromAPI from '../utils/FetchFromAPI';
import { useParams } from 'react-router';
const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
      FetchFromAPI(`search?q=${searchTerm}&part=snippet`)
      .then((data) => setVideos(data.items))
    },
    [searchTerm]);
  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'#fff'}}>
          Search Results For:
          <span style={{color: "#f31503", marginLeft: '7px'}}> {searchTerm} </span>
          videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed