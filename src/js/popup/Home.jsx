import React from "react";
import icon from "../../img/logo.svg"
import { hot } from "react-hot-loader";
import Selector from "./Selector"

class Home extends React.Component {
  render() {
    return (
      <div style={{width: '300px'}}>
        <p>Chrome Byte</p>
        <Selector/>
        <img src={icon} />
      </div>
    )
  }
}

export default hot(module)(Home)
