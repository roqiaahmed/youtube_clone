import React from 'react'
import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Sidebar from './Sidebar';
import Videos from './Videos';
import FetchFromAPI from '../utils/FetchFromAPI';
const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('JS Mastery');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      FetchFromAPI(`search?q=${selectedCategory}&part=snippet`)
      .then((data) => setVideos(data.items))
    },
    [selectedCategory]);
  return (

    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'#fff'}}>
          {selectedCategory}
          <span style={{color: "#f31503", marginLeft: '7px'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed