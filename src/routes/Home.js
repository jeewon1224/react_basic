import React from "react";
import axios from "axios";
import Movie from "../components/Movie"; 
// import './App.css'; //앞의 .은 같은 디렉토리라는 의미

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating" );
    console.log(movies);

    this.setState({ isLoading: false, movies: movies });
  };

  componentDidMount() {
    // setTimeout(function () {
    //   this.setState({ isLoading: false });
    // }, 3000); this바인딩이 안됨
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
    this.getMovies();
  }

  render() {
    //const isLoading = this.state.isLoading;
    const { isLoading, movies } = this.state;

    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>Loading...</div>
        ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie key={movie.id} title={movie.title} year={movie.year} genres={movie.genres} summary={movie.summary} poster={movie.medium_cover_image} />
          ))}
        </div>
        )}
      </section>
    );
  }
}

export default Home;
