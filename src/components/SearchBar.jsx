import React from 'react';
import { useState } from "react";
import { Search } from '@mui/icons-material';
import { Paper, IconButton} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };
    return (
    <Paper 
    component='form'
    onSubmit={onhandleSubmit}
    sx={{
        borderRadius: '25px',
        border: 'none', 
        boxShadow: 'none', 
        mr:{sm: '5px'}, 
        p: "5px"}}>
        <input placeholder='Search...' className='search-bar'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{p:'10px', color:'red',}}>
            <Search />
        </IconButton>
    </Paper>
)
}

export default SearchBar