import React, {Component} from 'react';
import CardList from '../components/CardList.js';
//import {robots} from './robots.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/errorBoundry.js';
import Clock from '../components/Clock.js';


class App extends Component {
constructor(props){
  super(props);
  this.state ={
    robots :[],
    searchfield:''
  }
}

onSearchChange = (event) => {
  this.setState({searchfield : event.target.value});
}



componentDidMount(){
  const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
  .then(response => response.json())
  .then(users => {
   this.setState({robots : users});
 });
}


  render(){
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
    <h1>Loading </h1> :
    (
      <div className ="tc">
      <h1> RoboFriends</h1>
      <Clock/>
      <SearchBox searchChange = {this.onSearchChange}/>
      <Scroll>
      <ErrorBoundry>
      <CardList robots = {filteredRobots}/>
      </ErrorBoundry>
      </Scroll>
      </div>
    );
  }
}


export default App;
