import {useState} from "react";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=sum(ticket)===winningSum;

    let buyTicket=()=>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>{ /*Agar random number 15 hoga toh hi message ayega Congratulation!*/}
        </div>
    )
}