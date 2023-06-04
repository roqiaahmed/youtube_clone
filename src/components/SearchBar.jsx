import React from 'react'
import { Search } from '@mui/icons-material';
import { Paper, IconButton} from "@mui/material";
const SearchBar = () => {
    return (
    <Paper sx={{borderRadius: '25px', border: 'none', boxShadow: 'none', mr:{sm: '5px'}, p: "5px"}}>
        <input placeholder='Search...' className='search-bar'
        value="" onChange={()=>{}}
        />
        <IconButton type='submit' sx={{p:'10px', color:'red',}}>
            <Search />
        </IconButton>
    </Paper>
)
}

export default SearchBar