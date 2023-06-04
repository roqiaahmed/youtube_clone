import React from 'react'
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import {demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle} from '../utils/constants'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
    return (
    <Card sx={{ width: {md:'320px', xs: '100%', sm: '358px'} }}>
        <Link to={videoId ? `/video/${videoId}` : {demoVideoUrl}}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        sx={{width:'358px', height: '180px'}}
        alt={snippet?.title}
        />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : {demoVideoUrl}}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : {demoChannelUrl}}>
            <Typography variant="subtitle2" color="gray">
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            </Typography>
            </Link>
        </CardContent>
    </Card>
)
}

export default VideoCard