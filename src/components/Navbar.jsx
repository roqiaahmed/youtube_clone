import React from 'react'
import { Stack } from '@mui/material';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Router basename="/">
    <Stack
    direction={'row'}
    alignItems={'center'}
    p={2}
    justifyContent={'space-between'}
    sx={{top: '0', position: "sticky", bgcolor: "#000", display: 'flex'}}
    >
      <Link to="/">
        <img 
        style={{width: '40px', height: '40px'}}
        src={logo} alt="Logo" />
      </Link>
      <SearchBar />
    </Stack>
    </Router>
  )
}

export default Navbar