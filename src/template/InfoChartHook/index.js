import React, { useState } from 'react'
import axios from 'axios'
import ReactDataSheet from 'react-datasheet'
import 'react-datasheet/lib/react-datasheet.css'
import './index.css'
import { Tooltip, Button } from 'antd';

export default function InfoChartHook() {
  // const value = {
  //   columns: [
  //     { title: '尺码表', key: uuid()},
  //     {title: '衣长（cm）', key: uuid()},
  //     {title: '肩宽（cm）', key: uuid()},
  //     {title: '胸围（cm）', key: uuid()},
  //     {title: '腰围（cm）', key: uuid()},
  //     {title: '袖长（cm）', key: uuid()}
  //   ],
  //   dataSource = [{}, {}, {}, {}, {}],
  //   tableTitle = ''
  // }

  // 数据
  const [grid, setGrig] = useState([
    [{ value: 1 }, { value: 2 },{ value: 3 }, { value: 4 },{ value: 5 }, { value: 6 }],
    [{ value: 11 }, { value: 22 },{ value: 33 }, { value: 44 },{ value: 55 }, { value: 66 }]
  ])
  // 表头
  const [columns, setColumn] = useState([
    { name: '尺码表'},
    {name: '衣长（cm）'},
    {name: '肩宽（cm）'},
    {name: '胸围（cm）'},
    {name: '腰围（cm）'},
    {name: '袖长（cm）'}
  ])
  const onCellsChanged = (changes) => changes.forEach(({cell, row, col, value}) => {
    debugger
    grid[row][col].value = parseInt(value)
    grid[row][col].expr = value
    console.log("New expression :" + value)
  })
  const MyViewComponent = () => {
    return (
      <div>123</div>
    )
  }
  function addRow(rowValue) {
    const _grid = [...grid]
    const arr = [{ value: '' }, { value: '' },{ value: '' }, { value: '' },{ value: '' }, { value: '' }]
    _grid.splice(rowValue.row + 1, 0, arr)
    setGrig(_grid)
    console.log(rowValue.row)

  } 
  function addCol(col, index) {
    const _grid = [...grid] 
    const arr = [{value: ''}]
    _grid.map(item => item.splice(index + 1, 0, arr))
    setGrig(_grid)
    const _columns = [...columns]
    const obj = {name: ''}
    _columns.splice(index + 1, 0, obj)
    setColumn(_columns)
  } 
  
  return (
    <ReactDataSheet
      data={grid}
      valueRenderer={(cell) => {
        return cell.value
      }}
      onCellsChanged={changes => {
        debugger
        changes.forEach(({ cell, row, col, value }) => {
          grid[row][col] = { ...grid[row][col], value }
        })
        setGrig(grid)
      }}
      // onCellsChanged={onCellsChanged}
      // attributesRenderer={(cell) => {'data-hint': cell.hint || {}}
      sheetRenderer={props => {
        return (
          <table className={props.className + ' my-awesome-extra-class'}>
              <thead>
                  <tr>
                      <th className='action-cell' />
                      {columns.map((col, index) => {
                        return (
                          <th className='cell' key={index}>
                            {col.name}
                            <div className='add-col' onClick={() => addCol(col, index)}>+</div>
                          </th>
                        )
                      })}
                  </tr>
              </thead>
              <tbody>
                  {props.children}
              </tbody>
          </table>
        )}
      }
      rowRenderer={props => (
        <tr>
            <td className='action-cell'>
                {/* <input
                    type='checkbox'
                    checked={addRow(props)}
                    // onChange={addRow(props)}
                    onClick={() => addRow(props)}
                /> */}
                <div className='add-row' onClick={() => addRow(props)}>+</div>
            </td>
            {props.children}
        </tr>
      )}
      valueViewer={e => {
        return (
          <Tooltip placement="top" title={e.value}>
            <div className='content'>{e.value}</div>
          </Tooltip>
        )
      }}
    // dataEditor={props => {
    //   debugger
    //   return (
    //   props.col === 0 ? <MyDatePicker {...props} /> : <DataEditor {...props}/>
    // )}}
    />
  )
}
