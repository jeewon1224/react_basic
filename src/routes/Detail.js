import React from "react";

class Detail extends React.Component{  

  componentDidMount(){
    const {history, location} = this.props;
    // console.log(location);
    // console.log(history);
    if(location.state === undefined){
      history.push('/'); //state 값이 없으면 다시 홈으로 돌아감
    }
  }

  render(){  //class 쓰면 무조건 render함수 들어가야함
    const { location } = this.props;
    if(location.state){
      return <div>{location.state.title}</div>
    }else{
      return null; //movie_detail을 주소창에 직접 입력하면 state값을 잡지 못하므로 home으로 돌아감
    }
    
  }

}

export default Detail;