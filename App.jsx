import React from "react"
const styled = require('styled-components') // 🚨 require -> import

class NotApp extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <>
      <h1>Hello stranger!</h1>
    </>
  }
}

export default NotApp // 🚨 TODO: incorrectly named