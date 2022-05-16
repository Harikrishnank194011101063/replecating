import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Coper extends React.Component{
constructor(props){
  super(props)
this.state={

brand:document.getElementById('str')
}

}
vha=()=>{
  this.setState({brand:document.getElementById('sjr').value})
}









  render(){

return<>
<h1>so we gon copy this and put it there  </h1>
<div className='box'>
<textarea  id='sjr' placeholder='i dont know' onChange={this.vha}></textarea>
<textarea  id='str' placeholder='here' value={this.state.brand}></textarea>
</div>


</>


}


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Coper />)
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
