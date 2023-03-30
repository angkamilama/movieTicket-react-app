import { useState} from "react";


function MovieSelect({finalTicketPrice}) {
  const [moviePrice, setMoviePrice] = useState(0);
  
  const movieArray = [
      { name: 'Titanic',
        id: 'Titanic0',
        price: 15
      },
      { name: 'Avatar',
        id: 'Avatar0',
        price: 10
      },
      { name: 'No mercy',
        id: 2,
        price: 17
      },
      { name: 'Games of throne',
        id: 3,
        price: 14
      }
  ];

  const movieList = movieArray.map( movie => <option key={movie.id} value={movie.price}>{movie.name}</option>);
 

    const chooseMovie =(e) => {
      
      setMoviePrice(e.target.value);
      finalTicketPrice(e.target.value);  
      console.log(e.target.value)
  
    }

    return (
        <div className="title">
            <div className="movie_label">
                <h4>Movies:</h4>
            </div>
            <label>
              <select  onChange={chooseMovie} id="movie_list">
                <option>-- Select Movie --</option>
                {movieList}
              </select>
            </label>
        </div> 
    )
};

export default MovieSelect;



