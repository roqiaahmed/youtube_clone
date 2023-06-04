import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from "../utils/constants";
import { Link } from 'react-router-dom';

const ChannelCard = ({channelDetail}) => {
  return (
    <Box
    sx={{
      display: 'flex',
      boxShadow: 'none',
      borderRadius: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto'
    }}
    >
      <Card sx={{ background: '#000'}}>
          <CardContent 
          sx={{display: 'flex', flexDirection: 'column',
            justifyContent: 'center', textAlign: 'center'
          }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardMedia 
        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        alt={channelDetail?.snippet?.channelTitle}
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        />
        <Typography variant="h6" sx={{color: '#fff'}}>
          {channelDetail?.snippet?.channelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
        </Link>
          </CardContent>
      </Card>
    </Box>
  )
}

export default ChannelCard