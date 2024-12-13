import React, {useState, useEffect} from "react";
import { CritterDisplay } from "./CritterDisplay/CritterDisplay.js";

import FishInfo from './JSON/fish.json'
import InsectInfo from './JSON/insect.json'
import SeaCreatures from './JSON/seacreatures.json'


export function DisplayCritters({
    keyword = "fish",
}){
    const [critterInfo, setCritterInfo] = useState([]);

    useEffect(() => {
        let mounted = true;
        const fetchData = () => {
            switch (keyword){
                case "bug":
                    return InsectInfo
        
                case "deep sea creature":
                    return SeaCreatures

                default:
                    return FishInfo
            }
        }
        const data = fetchData()
        if (mounted) {
            setCritterInfo(data.sort((a, b) => a.num - b.num));
        }
        return() => {
            mounted = false;
            setCritterInfo([]);
        }
    }, [keyword]);

    if (!setCritterInfo.length){
        return (  
            <div className="text-center">
                <h1>Loading Current {keyword}{keyword !== "fish" ? "s" : null}</h1>
            </div>
            )
    }

    return(
        <CritterDisplay data={critterInfo} keyword={keyword} />
    )
}