import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startStopText: "Start",
      seconds: 0
    }
    this.onStartStop = this.onStartStop.bind(this);
    this.onReset = this.onReset.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.timerHandle = null;
  }
  updateTime(){
    this.setState(()=>{
      return {
        seconds: this.state.seconds + 1
      }
    })
  }
  onStartStop(){
    if (this.state.startStopText == "Start") {
      this.timerHandle = setInterval(this.updateTime, 1000)
      this.setState(()=>{
        return {
          startStopText: "Stop"
        }
      })
    } else {
      clearInterval(this.timerHandle)
      this.setState(()=>{
        return {
          startStopText: "Start"
        }
      })
    }
  }
  onReset(){
    this.setState(()=>{
      return {
        seconds: 0
      }
    })
  }
  render(){
    return(
      <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
        <div style={{margin: "auto"}}>
          <h1>Stop Watch</h1>
          <div>{this.state.seconds}</div>
          <button onClick={this.onStartStop}>{this.state.startStopText}</button>
          <button onClick={this.onReset}>Reset</button>
        </div>
      </div>
    )
  }
}
