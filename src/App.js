import React, {} from "react";
import "./App.css";
import PropTypes from 'prop-types';




function Movie({title, ranking, desc}){
  console.log(typeof ranking);
  return (
    <div>
      <h3>My Favorite Movie is {title}</h3>
      <p>Ranking : {ranking}</p>
      <p>Description : {desc}</p>
    </div>
  )
}

const myMovies =[
  {
    title:"Florida Project",
    ranking:5,
    desc:'Florida Project is....'
  },
  {
    title:"Lord of Ring",
    ranking:4.5,
    desc:'Lord of Ring is....'
  },
  {
    title:"Jakie",
    ranking:3,
    desc:'Jakie is....'
  },
  {
    title:"Jungle Land",
    ranking:4,
    desc:'Jungle Land is....'
  },
  {
    title:"LaLa Land",
    ranking:3.5,
    desc:'LaLa Land is....'
  },
]


function App() {
  return (
    <div className="App">
      <h2>My Movie</h2>
      <Movie 
        title= {myMovies[0].title}
        ranking= {myMovies[0].ranking}
        desc= {myMovies[0].desc} />
        <Movie 
        title= {myMovies[1].title}
        ranking= {myMovies[1].ranking}
        desc= {myMovies[1].desc} />
        <Movie 
        title= {myMovies[2].title}
        ranking= {myMovies[2].ranking}
        desc= {myMovies[2].desc} />
        <Movie 
        title= {myMovies[3].title}
        ranking= {myMovies[3].ranking}
        desc= {myMovies[3].desc} />
        <Movie 
        title= {myMovies[4].title}
        ranking= {myMovies[4].ranking}
        desc= {myMovies[4].desc} />
      {/* <Movie title= 'Lord of Ring' ranking='4.5/5' desc='Lord of Ring is story about...' />
      <Movie title= 'Jakie' ranking='3/5' desc='Jakie is story about...' />
      <Movie title= 'Jungle Land' ranking='4/5' desc='Jungle Land is story about...' />
      <Movie title= 'LaLa Land' ranking='3.5/5' desc='LaLa Land is story about...' /> */}
    </div>
  );
}

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  desc : PropTypes.string.isRequired,
  ranking : PropTypes.number.isRequired,

};




export default App;
