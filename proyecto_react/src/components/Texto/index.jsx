import React, { Component } from 'react'

export default class index extends Component {
  render() {

    const { texto } = this.props;

    return (
      <>
        <p>{ texto }</p>
      </>
    )
  }
}
