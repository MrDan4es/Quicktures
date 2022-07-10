import React, { Component } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button'
import './styles/AddImageBtn.scss'

export default class AddImageBtn extends Component {
    render() {
        return (
            <Button 
                className='col-12 mt-2 p-0 addImageBtn' 
                variant='text'>

                <AddCircleOutlineIcon 
                    sx={{ fontSize: 40 }} 
                    color='success'
                />
                
            </Button>
        )
    }
}
