import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";
import "./index.css";
function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
