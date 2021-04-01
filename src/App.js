import React, {Component} from 'react';

class Greeting extends Component{
  
  //render 함수의 내부에 return 갑은 반드시 하나의 태그로 감싸져야 한다.
  render(){
    return(
      <div>
        <p>Hello React Again!</p>
        
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <p>Hello React!</p>
      <Greeting />
    </div>
  );
}

export default App;
