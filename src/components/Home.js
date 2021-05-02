import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import Clipboard from 'react-clipboard.js'
import Cards from './Cards'

const Home = () => {
    return (
        <Container>
            <h1 className="main-h1">Visualize Data Structures in JavaScript</h1>
            <Jumbotron>
                <h4>Disclaimer</h4>
                <p>
                    If you enjoy learning by Visualizing the stuff, then Super Cool Welcome to "Visualize DS in JS"! I did a lot of research 
                    and used my experience to create this site and the content. I hope this will be useful to you guys. If you want to share 
                    your thoughts, doubts and even complaints, please feel free to email me. 
                    <span>
                        (madhujb01@gmail.com)
                        <Clipboard className="btn" data-clipboard-text="madhujb01@gmail.com" title="Click to copy the mail id">
                            <i className="far fa-clipboard"></i>
                        </Clipboard>
                    </span>
                </p>
                
            </Jumbotron>
            <h5>Here we go...</h5>
            <Cards />
            1. Work more on Definitions
            2. And on data holders
        </Container>
    )
}

export default Home