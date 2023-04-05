import { useState } from "react";

function SeatSelect({ setTicketCount, rowList, columnList }) {
  const [seats, setSeats] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleSeat = (seatNum) => {
    if (seats.includes(seatNum)) {
      const filteredSeats = seats.filter((word) => word !== seatNum);
      setSeats(filteredSeats);
    } else {
      setSeats([...seats, seatNum]);
      setIsActive((isActive) => !isActive);
    }

    setTicketCount(seats.length);
  };

  return (
    <div className="seats">
      {columnList.map((letter) => {
        return (
          <div className="row" key={letter}>
            {rowList.map((number) => {
              const seatNumber = `${letter}${number}`;
              const isSelected = seats.includes(seatNumber);

              return (
                <div
                  key={seatNumber}
                  onClick={() => handleSeat(seatNumber)}
                  className="seat"
                  style={{ backgroundColor: isSelected ? "red" : "grey" }}
                >
                  {" "}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default SeatSelect;
