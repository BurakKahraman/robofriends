import React,{Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.intervalID);
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (<h2>It is {this.state.time}.</h2>);
  }
}

export default Clock;
