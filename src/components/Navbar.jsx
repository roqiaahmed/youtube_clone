import React from 'react'
import { Stack } from '@mui/material';
import {  BrowserRouter as Router,Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
    direction={'row'}
    alignItems={'center'}
    p={2}
    justifyContent={'space-between'}
    sx={{top: '0', position: "sticky", bgcolor: "#000", display: 'flex'}}
    >
      <Router>
      <Link to="/">
        <img 
        style={{    width: '40px', height: '40px'}}
        src={logo} alt="Logo" />
      </Link>
      </Router>
      <SearchBar />
    </Stack>
  )
}

export default Navbar