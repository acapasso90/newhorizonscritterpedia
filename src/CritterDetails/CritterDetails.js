import React from 'react';
import {useParams, useNavigate, useOutletContext} from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'


import "./CritterDetails.css";

const ListItem = ({
    label,
    header
}) => {

    if (!label){
        return null
    }

    // label may come in as array or single item, format all to be an array
    const formattedLabel = Array.isArray(label) ? label : [label];

    return(
        <div className='item'>
            <header>{header}</header>
            <ul className='label'>
                {formattedLabel.map((x) => 
                        <li key={x}>{x}</li>)
                }
            </ul>
        </div>
    )
}

export function CritterDetails(){
    const navigate = useNavigate();
    const {name} = useParams();
    const {critterList} = useOutletContext();
    // find our selected critter from the full list passed in through outlet context
    const selected = critterList.find((x) => x.name === name)

    if (!selected){
        return null
    }

    const {availability} = selected
    const realisticImage = selected.critterpediaImage;
    const catchphrase = selected.catchPhrase[0];
    const speed = selected.speed;
    const shadow = selected.shadow;

    const itemArray = [
        {header: 'Found', label: selected.whereHow},
        {header: "Weather", label: selected.weather},
        {header: 'Catch Difficulty', label: selected.catchDifficulty},
        {header: 'Sell Price', label: `${selected.sell} bells`},
        {header: 'Speed', label: speed},
        {header: 'Shadow', label: shadow},
        {header: 'Available In', label: availability.months},
        {header: 'Available Time', label: availability.time},

    ]

    const details = itemArray.map((item) => 
        <ListItem header={item.header} key={item.header} label={item.label} />
    )

    return(
        <Offcanvas backdrop={false} scroll={true} placement='end' show={true} onHide={()=> navigate(-1)} >
            <Offcanvas.Header closeButton>
                {name}
            </Offcanvas.Header>
            <Offcanvas.Body >
                {details}
                <footer className="d-flex flex-column align-items-center text-center">
                    <img src={realisticImage} alt={name} /> 
                    <div>
                        {catchphrase}
                    </div>
                </footer>
            </Offcanvas.Body>

        </Offcanvas>
    )
}