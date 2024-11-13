import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <p>Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} /> //the key prop is a special attribute used to uniquely identify elements in a list.
      ))}
    </div>
  );
}
