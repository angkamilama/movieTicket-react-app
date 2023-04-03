function MoviePrice({ totalTicket, receivedTicketPrice }) {
  const finalTicketPrice = totalTicket * receivedTicketPrice;

  return (
    <div className="ticket-price">
      {receivedTicketPrice > 0 && (
        <div className="ticket">
          <p>
            You have booked {totalTicket} tickets and the total amount is $
            {finalTicketPrice}
          </p>
        </div>
      )}
      <div className="buttons">
        <button className="resetBtn">reset</button>
        <button className="nextBtn">next</button>
      </div>
    </div>
  );
}

export default MoviePrice;
