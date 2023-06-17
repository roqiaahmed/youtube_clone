import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from "../utils/constants";
import { Link } from 'react-router-dom';

const ChannelCard = ({channelDetail, marginTop}) => {
  console.log("channelDetail is ",channelDetail);
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent 
            sx={{display: 'flex', flexDirection: 'column',
              justifyContent: 'center', textAlign: 'center', color: '#fff'
            }}>
          <CardMedia 
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          alt={channelDetail?.snippet?.channelTitle}
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          />
          <Typography variant="h6" sx={{color: '#fff'}}>
            {channelDetail?.snippet?.title}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
          </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard