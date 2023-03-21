

function MoviePrice(prop) {
    const finalTicketBooked = (prop.totalTicket).length;
    const finalReceivedPrice = prop.receivedTicketPrice;
    const ultimateTicketPrice =  finalTicketBooked * finalReceivedPrice;


    return (
        <div className="ticket-price">
            <div className="ticket">
                <p>You have booked {finalTicketBooked} and the total amount is ${ultimateTicketPrice}</p>
            </div>
            <div className="buttons">
                <button  className="resetBtn">reset</button>
                <button  className="nextBtn">next</button>
            </div>
        </div>
    )
};

export default MoviePrice;