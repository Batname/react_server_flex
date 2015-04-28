"use strict";

import "./style.css";

import React from 'react';
import Widget from "./widget.jsx" ;
import reqwest from 'superagent';
import co from 'co'
import d3 from "d3"


var App = React.createClass({
  getInitialState: function () {
    return {
        data: []
    }
  },
  componentWillMount: function () {
    let self = this;
    reqwest
          .get("http://www.filltext.com/?rows=10&val={randomNumber}")
          .type('json')
          .set('Content-Type', 'application/json')
          .end(function(err, res){
            self.setState({data:res.body});
            self.renderChart(self.state.data);

          });
  },
  renderChart: function(dataset) {
    d3.select('#chart').selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) {
        return d.val * 5 + 'px';
      });
  },
  render: function() {
    return (
      <div>
        <div id="chart"></div>
      </div>
      )
  }
});

export default App;