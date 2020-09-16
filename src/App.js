import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
  }

  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }
    
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({monsters:users}));
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>  
      </div>
    );
  }
}

export default App;

