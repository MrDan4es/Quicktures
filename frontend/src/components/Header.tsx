import React, { Component } from 'react'
import { Button, Switch } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    componentDidMount () {
        const script = document.createElement('script')
        script.src = 'switch.js'
        script.async = true
        document.body.appendChild(script)
    }

    render() {
        return (
            <Row 
                className='align-items-center mt-1 pb-1' 
                style={{borderBottom: '1px solid #dee2e680'}}>
                
                <Button 
                    className='col-2'
                    style={{lineHeight: 2, color: 'gray'}}
                    variant='text' 
                    size='small' 
                    href='/logout/'
                    endIcon={<LogoutIcon />}>
                    admin
                </Button>
                
                <Link 
                    className='col text-center display-6'
                    style={{ textDecoration: 'none', color: '#4D7A0B' }}
                    to='/'>
                        QuickTures
                </Link>
                
                <Switch  
                    className='col-1 offset-1'
                    id='lightSwitch'
                />
                    
            </Row>
        )
    }
}
