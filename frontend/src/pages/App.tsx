import React from 'react'
import { Container } from 'react-bootstrap'
import AddImageBtn from '../components/AddImageBtn';
import Header from '../components/Header';
import ImageList from '../components/ImageList'

function App() {
    return (
        <Container>
            <Header />
            <AddImageBtn />
            <ImageList />
        </Container>
    )
}

export default App
