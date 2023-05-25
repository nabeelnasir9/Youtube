import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utilis/contants';
import { Category } from '@mui/icons-material';



const SelectedCategory = 'New';
const Sidebar = () => {
  
  return (
    <Stack 
    direction="row"
    sx={{overflowY:'auto', height:{sx:'auto', md:'95%'}, flexDirection:'column'}}>

     {categories.map((category)=>(
        <button
        style={{background: category.name === SelectedCategory && '#FC1503', color:'white'}}
        className="category-btn"
        key={category.name}>
            <span style={{color: category.name === SelectedCategory ? 'white' : 'red', marginRight:'15px'}}>{category.icon}</span>
            <span style={{opacity:category.name=== SelectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
     ))}
    </Stack>
  )
}

export default Sidebar
