import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component{
  state = {
    name:'subhra',
    age:19
  }
  switchNameHandler = (obj) =>{
    this.setState({
      age:obj.age,
      name:obj.name
    })
  }

  changeHandler = (event) =>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    return(
    <div className="App">
      <h1>Hi 1st react page</h1>
      <button onClick={this.switchNameHandler.bind(this,{name:'subhra jyoti',age:27})}>Change Name</button>
      <Person 
        click={this.switchNameHandler.bind(this,{name:'jyoti mishra',age:'30'})}
        name={this.state.name} 
        age={this.state.age}
        > And my hobbies are playing cricket and coding </Person>

      <Person 
        change={this.changeHandler}
        name={this.state.name} 
        age={this.state.age}
        > And my hobbies are playing cricket and coding </Person>
    </div>
    )
  }
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'hi this is another way'))
}

export default App;
