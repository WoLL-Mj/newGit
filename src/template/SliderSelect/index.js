import React, { useEffect, useState } from 'react'
import { Slider, Switch, Row, Col } from 'antd'
import './index.css'

export default function SliderSelect() {
  const values = [
    {
      name: '颜色',
      children: [
        {name: 'red', rulue: {1: '无色', 2: '浅色', 3: '深色', 4: '黑色'}},
        {name: 'blue', rulue: {1: '无色', 2: '浅色', 3: '深色'}},
        {name: 'green', rulue: {1: '无色', 2: '浅色', 3: '深色'}}
      ]
    },
    {
      name: '口味',
      children: [
        {name: '咸味', rulue: {1: '无', 2: '淡', 3: '深', 4: '重'}},
        {name: '甜味', rulue: {1: '无', 2: '淡', 3: '深', 4: '重'}},
        {name: '酸味', rulue: {1: '无', 2: '淡', 3: '深', 4: '重'}},
        {name: '辣味', rulue: {1: '无', 2: '淡', 3: '深', 4: '重'}}
      ]
    }
  ]
  // useEffect(() => {
  //   values
  // })
  function onChange(value) {
    debugger
  }

  function handleClick() {
    debugger
    console.log(111)
  } 

  return (
    <div>
      {values.map(item => {
        return (
          <div key={item.name} className='slider-group'>
            <div className='slider-group-title'>
              {item.name}
            </div>
            <div className='slider-group-content'>
              {item.children.map(childrenValue => {
                const marks = childrenValue.rulue
                const maxLen = Object.keys(childrenValue.rulue).length
                return (
                  <div key={`${item.name}${childrenValue.name}`}>
                    <Row>
                      <Col span={2}>
                        {childrenValue.name}
                      </Col>
                      <Col span={12}>
                        <Slider
                          min={1}
                          max={maxLen}
                          onAfterChange={onChange}
                          marks={marks}
                          tooltipVisible={false}
                        />
                      </Col>
                    </Row>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <div onClick={e => {handleClick()}}>点击</div>
    </div>
  )
}
