import {useEffect, useState} from "react";
import {ScoreboardListItem} from "./ScoreboardListItem";

export function Scoreboard() {

    const [entries, setEntries] = useState([])

    useEffect( () => {
        fetch(process.env.API_HOSTNAME + "/leaderboard")
            .then(res => res.json())
            .then(result => {
                setEntries(result);
            })
            .catch(error => {
                console.log(error);
            })
    });

    return(
        <div>
            {entries.map(entry => (
                <ScoreboardListItem props={entry}/>
            ))}
        </div>
    );

}