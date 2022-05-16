
class Sample extends React.Component
{
constructor(props){
super(props)
//this is instance variable
this.username=props.name
console.log(this.username)
this.userwhat=props.willenter
console.log(this.userwhat);
//state variable
this.state={//state variable ah epayumeh object la dhaaan kudukanum (to change its value)
brand:'tesla',
number:'tn01,az:1325'
}
}
stater=()=>{
this.setState({brand:'ford',number:'unknown'})//setstateku ()indha bracket kulla dhan use pannanum {}
}



 render(){
return<>
<h1>hi{this.userwhat}{this.username}</h1>{//we can easily call it like that}
  }
  <h1>we have to printit first to change it::::{''+this.state.brand}and the number{this.state.number}</h1>
  <button onClick={this.stater}>skrrt</button>
</>

  }
}


