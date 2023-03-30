

function MoviePrice(prop) {
    const finalTicketPrice =  prop.totalTicket * prop.receivedTicketPrice;

    return (
        <div className="ticket-price">    
            { (prop.receivedTicketPrice > 0) && 
                <div className="ticket">
                    <p>You have booked {prop.totalTicket} tickets and the total amount is ${finalTicketPrice}</p>
                </div>
            }
            <div className="buttons">
                <button  className="resetBtn">reset</button>
                <button  className="nextBtn">next</button>
            </div>
        </div>
    )
};

export default MoviePrice;