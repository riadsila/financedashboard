import React, { Component } from 'react';
import '../App.css';
import {BarChart} from 'react-easy-chart';

class Chart extends Component {


  render() {
    const userSpending = 1000;
    const similarSpending = 2000;
    const data = [
      {x: 'You', y: userSpending, color:'#24ce99'},
      {x: 'Similar Users', y: similarSpending, color: '#a4c4ba'}
    ];

    return (
      <div className="container my-4">
        <div className="text-left">
          <ul className="legend-list">
            <li><div className="legend-key"></div>Last month, you spent <strong>£{userSpending}</strong></li>
            <li><div className="legend-key" style={{backgroundColor:"#a4c4ba"}}></div>Similar users spent <strong>£{similarSpending}</strong></li>
          </ul>
        </div>
        <BarChart
          axes
          height={250}
          width={280}
          data={data}
        />
      </div>
    );
  }
}

export default Chart;
