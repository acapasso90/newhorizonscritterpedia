import React, {useEffect} from "react"

import { useNavigate, Outlet } from "react-router-dom";

import butterfly from "./Media/butterfly.png";
import octopus from "./Media/octopus.png";
import octopusActive from "./Media/octopusActive.png";
import butterflyActive from "./Media/butterflyActive.png";
import fishActive from "./Media/fishActive.png";
import fish from "./Media/fish.png";

import Container from 'react-bootstrap/Container'

import "./MainNav.css";

function Footer(){
    return(
        <footer>
            All images, information, quotes, and characters found on the app are the sole property of Nintendo and Animal Crossing
            and are only used for non-commercial and educational purpose.
            <div>
            App built by <a href="https://amandacapasso.netlify.app/" target="_blank"  rel="noreferrer">Amanda Capasso</a>
            </div>
        </footer>
    )
}

function NavIcon({
    pathname = 'bug',
    labelName = 'Insects',
    onClick = ()=> console.log('onClick function must be passed in')
}){
    const url = window.location.pathname;
    const isActive = url.includes(pathname);

    let imgSrc;
    switch(pathname){
        case 'bug':
            imgSrc = isActive ? butterflyActive : butterfly;
        break;

        case 'fish':
            imgSrc = isActive ? fishActive : fish;
        break
        
        default:
            imgSrc = isActive ? octopusActive : octopus;
    }


    return(
        <div className="backdrop">  
            <img 
                src={imgSrc} 
                alt={pathname}      
                onClick={()=> onClick()}  
            />
            {isActive && 
                <div className="label" >{labelName}</div>
            }
        </div>
    )
}

function NavBar(){
    const navigate = useNavigate();

    useEffect(() => {
        const url = window.location.pathname;

        if ( url === '/bug'){
            navigate('/bug')
        }
        else if  (url === '/deepsea'){
            navigate('/deepsea')
        }
    }, [navigate])

    return(
        <div className="nav">
            <div className="iconLinks">
                <div className="hrow">
                    <NavIcon pathname='bug' labelName='Insects' onClick={()=> navigate('/bug')} />
                    <NavIcon pathname='fish' labelName='Fish' onClick={()=> navigate('/fish')} />
                    <NavIcon pathname='deepsea' labelName='Sea Creatures' onClick={()=> navigate('/deepsea')} />
            
                </div>
            </div>
            <header>
                New Horizon's Critterpedia
            </header>
        </div>
    )
}

export function MainNav(){
    return(
        <div className="critterpedia">
                <NavBar />
                <Container fluid>

                    <Outlet />
                    <Footer />
                </Container>
        </div>
    )
}