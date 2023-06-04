import React from 'react'
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
    return (
    <Stack direction="row"
    sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
    }}>
        {categories.map((categorie) => (
        <button className='category-btn'
            onClick={() => setSelectedCategory(categorie.name)}
            key={categorie.name}
            style={{
            background: categorie.name === selectedCategory && "#FC1503",
            color: "white",
        }}>
            <span style={{color: categorie.name === selectedCategory ? "#fff" : "red"}}>{categorie.icon}</span>
            <span style={{marginLeft: "10px", opacity: categorie.name === selectedCategory ? "1" : '0.8'}}>{categorie.name}</span>
        </button>
        ))}
    </Stack>
)
}

export default Sidebar