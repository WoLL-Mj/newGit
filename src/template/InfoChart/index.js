import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import ReactDataSheet from 'react-datasheet'
import 'react-datasheet/lib/react-datasheet.css'
import './index.css'


class InfoChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [{ value: 1 }, { value: 3 }],
        [{ value: 2 }, { value: 4 }],
      ],
    };
  }
  render() {
    return (
      <ReactDataSheet
        data={this.state.grid}
        valueRenderer={cell => cell.value}
        onCellsChanged={changes => {
          debugger
          const grid = this.state.grid.map(row => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
      />
    );
  }
}
export default InfoChart
