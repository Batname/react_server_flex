"use strict"

import React from "react";

let Widget = React.createClass({
  propTypes: {
    min:React.PropTypes.number,
    max:React.PropTypes.number,
    step:React.PropTypes.number,
    val:React.PropTypes.number,
    label:React.PropTypes.string,
    update:React.PropTypes.func.isRequired,
    type:React.PropTypes.oneOf(['number', 'range'])
  },
  getDefaultProps: function(){
    return {
      min: null,
      max: null,
      val: 0,
      step: 1,
      label: '',
      type: 'range'
    }
  },
  render: function() {
    let label = this.props.label !== '' ?
        <label>{this.props.label} : {this.props.val}</label> : ''

    return (
      <div>
        <input
          ref="range"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
        {label}
      </div>
      );
  }
});

export default Widget;

