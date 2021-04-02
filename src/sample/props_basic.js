import React, {} from "react";
import "./App.css";
import PropTypes from 'prop-types';




function Movie({title, ranking, picture}){
  console.log(typeof ranking);
  return (
    <div>
      <h3>My Favorite Movie is {title}</h3>
      <p>Ranking : {ranking}</p>
      <img src={picture} alt={title} />
    </div>
  )
}

// const arr= ['a','b','c','d'];
// arr.map(function(elm){
//   console.log(elm);
//   return 0;
// });

// arr.map((elm)=>{
//   console.log(elm);
//   return 0;
// });


const myMovies =[
  {
    id:1,
    title:"Florida Project",
    ranking:5,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VV0qyqP-5AGlaHmXpa9zq-D5k_xszoxLIJc3NoSrx9qxNtLEFtLiHgtzyKnxTYmmSBU&usqp=CAU'
  },
  {
    id:2,
    title:"Lord of Ring",
    ranking:4.5,
    image:'https://lh3.googleusercontent.com/proxy/gxHaC-KbfKpAPzH2GkYzUmxxhfk69vjxw4ZU4CBAqLF5h7XbP6PALpsbNsnzdOW5gZrk_rG1wK9nK0sY9yglZ1mpjf1F1hbDmR_h1xff1iibLDIOgbnBrVu1VMReyBnngLa_y7Y9ptqe6HDQTDuyHiB91p3WJ7-JOwawJnsFoW8pwNekNirzvlyyz_wDhRWe7U0zXIxHqSdoVhBGwqa4XmlKP3zR63j4hsUiwnv6U2UB1sSU3t3nOZJvRpW97K6o-_ND2VM786j9djT_2MmhKmlxpe_V6-rBbKI7'
  },
  {
    id:3,
    title:"Jakie",
    ranking:3,
    image:'https://i.pinimg.com/originals/f0/4a/8a/f04a8add7af90b7c7046332a76b6c60e.jpg'
  },
  {
    id:4,
    title:"Jungle Land",
    ranking:4,
    image:'https://newsimg.sedaily.com/2021/01/08/22H6DTVP5M_1.jpg'
  },
  {
    id:5,
    title:"LaLa Land",
    ranking:3.5,
    image:'https://lh3.googleusercontent.com/proxy/IyLveBZSXQG1qd98xtjnwboBwsKOFGiHOR5HiwZ0bAcS_nE0GfyVY7t0ar0P-i6U-Uw-yjNQbGJcJr7XSPNcWeBmdkCMiRr40Ia-rnYujd2jfPVkTYia2-tgiz1QqredHYCXVMT6fwspa7LV-JzYiazeLsHLCrjwpj-UceSDMw9DnuO1nzK-H-DIaGq41DSWoRvsFkqQr3PL0rsBWIuJQ3mqdq6yuaaR0eD3Vau0xPVu0HSz1IlYuQGcRkYMS-eHP2zqC8c09lr4_0QRUC9-gQBpGA'
  },
]


function App() {
  return (
    <div className="App">
      <h2>My Movie</h2>
      {myMovies.map((movies) =>(  //자바스크립트 내부에서 화살표 함수 사용할 경우에는 중괄호 말고 소괄호 쓴다. 
        <Movie 
        title= {movies.title}
        ranking= {movies.ranking}
        picture= {movies.image}
        key= {movies.id}
        />
      ))}




      {/* <Movie 
        title= {myMovies[0].title}
        ranking= {myMovies[0].ranking}
        picture= {myMovies[0].picture} /> */}
        
      {/* <Movie title= 'Lord of Ring' ranking='4.5/5' desc='Lord of Ring is story about...' />
      <Movie title= 'Jakie' ranking='3/5' desc='Jakie is story about...' />
      <Movie title= 'Jungle Land' ranking='4/5' desc='Jungle Land is story about...' />
      <Movie title= 'LaLa Land' ranking='3.5/5' desc='LaLa Land is story about...' /> */}
    </div>
  );
}

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  ranking : PropTypes.number.isRequired,

};




export default App;
