import { useNavigate, useParams } from 'react-router-dom';

import classNames from 'classnames';

export default function CritterEntry({
  selected = {},

}){
    const {name} = useParams();
    const navigate = useNavigate();

    if (!selected){return null}

    const {iconImage, timeAvailable, monthAvailable} = selected


return(
    <div className="critter-info">
        <button className={classNames('critter-icon', {active: name === selected.name})} onClick={() => navigate(selected.name, {replace: name})} >
            <img 
                src={iconImage} 
                alt="critter icon" 
                className={
                    classNames({
                        fishPicture: monthAvailable && timeAvailable,
                        fishPicture2: !monthAvailable || !timeAvailable,
                    })
                } 
            /> 

        </button>
    </div>
)}