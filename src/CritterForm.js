import Modal from 'react-bootstrap/Modal'
import classNames from "classnames";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { 
  useNavigate,
    useOutletContext, 
    useLocation,
    useParams } from 'react-router-dom'

import "./CritterForm.css";

export function CritterForm(){
    const {availability, selected} = useOutletContext()
    const {name} = useParams();
    const english = "name-USen";

    if (selected.name[english] !== name){
      return(null)
    }
    const navigate = useNavigate();

    const flick = "price-flick";
    const cj = "price-cj";
    const phrase = "catch-phrase";
    const rarity = selected.availability.rarity;
    const realisticImage = selected.image_uri;
    const priceNormal = selected.price;
    const priceFlick = selected[flick];
    const priceCJ = selected[cj];
    const catchphrase = selected[phrase];
    const speed = selected.speed;
    const shadow = selected.shadow;

    const monthArray = [{id: 1, name: "January"}, {id: 2, name: "February"}, {id: 3, name: "March"}, {id: 4, name: "April"}, {id: 5, name: "May"}, {id: 6, name: "June"}, {id: 7, name: "July"}, {id: 8, name: "August"},{id: 9, name: "September"}, {id: 10, name: "October"}, {id: 11, name: "November"}, {id: 12, name: "December"}]

    return(
        <Modal
        show={true}
        onHide={() => navigate(-1)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="capitalize">
          <Modal.Title>{name}</Modal.Title>
          <button className="clickable" onClick={() => navigate(-1)}> x</button>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Row>
            <Col>
              <img src={realisticImage} alt={name} /> 
              <br />
              {catchphrase}
            </Col>
            <Col >
              <ul>
                {(selected.availability.location || selected.availability.time) && <li><header>Found: </header>{selected.availability.location}{selected.availability.time ? ` from ${selected.availability.time}` : "" }  </li>}
                {rarity && <li><header>Rarity:</header> {rarity} </li>}
                <li><header>Sell price:</header> {priceNormal} bells</li>
                {priceFlick && <li><header>Flick&apos;s Price:</header> {priceFlick} bells</li>}
                {priceCJ && <li><header>CJ&apos;s Price:</header> {priceCJ} bells</li>}
                {speed && <li><header> Speed:</header> {speed}</li>}
                {shadow && <li><header> Shadow: </header> {shadow} </li>}
              </ul>
            </Col>
          </Row>
          <div className="month-display">
            <header> Available In: </header>
            <div className="month-grid">
              { monthArray.map((month ) => {
                var monthClass = classNames('month', {
                  'available-month': availability?.includes(month.id),
                });
                  return(                  
                      <span key={month.name} className={monthClass}>{month.name}</span>          
                  )
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
}