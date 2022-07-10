import React, { Component } from 'react'
import {Col, Card, Button, Image} from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete'
import InfoIcon from '@mui/icons-material/Info'
import './styles/imageBlock.scss'

type Props = {
    name: string,
    url: string,
    id: number
};
type State = {};

export default class ImageBlock extends Component<Props, State> {
  render() {
    return (
        <Col id={this.props.name}>
            <Card 
                className='image-card ratio ratio-1x1'>

                <Image 
                    src={this.props.url} 
                    className='img-block' 
                    id={this.props.id.toString()} 
                />

                <Button 
                    variant='outline-primary' 
                    id={this.props.id.toString()} 
                    className='p-0 btn-inform'>

                    <InfoIcon />

                </Button>

                <Button 
                    variant='outline-danger' 
                    id={this.props.id.toString()} 
                    className='p-0 btn-remove'>
                    
                    <DeleteIcon /> 
                
                </Button>
            </Card>
        </Col>
    )
  }
}
