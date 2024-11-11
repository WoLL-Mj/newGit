import React, { useState } from 'react'
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
// import { createSpreadsheetData } from './helpers';
registerAllModules();

export default function ExcelTable () {
  const hotData = [
    ["", "Tesla", "Volvo", "Toyota", "Honda", '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2020", 10, 11, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2021", 20, 11, 14, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2022", 30, 15, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2020", 10, 11, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2021", 20, 11, 14, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2022", 30, 15, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2020", 10, 11, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2021", 20, 11, 14, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2022", 30, 15, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2020", 10, 11, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2021", 20, 11, 14, 13, '1', '2', '3', '4', '1', '2', '3', '4'],
    ["2022", 30, 15, 12, 13, '1', '2', '3', '4', '1', '2', '3', '4']
  ];
  const [settings, setSettings] = useState(
    {
      data: hotData,
      height: 220,
      licenseKey: 'non-commercial-and-evaluation',
      fixedRowsTop: [0, 2],
      fixedColumnsLeft: [0, 2],
      rowHeaders: [false, true],
      colHeaders: [false, true]
    }
  )
  
    return (
      <>
        <HotTable
          data={hotData}
          colHeaders={true}
          rowHeaders={true}
          width="600"
          // height="300"
        />
        <div></div>
        <HotTable root="hot" settings={settings} width="600" height="200"/>
      </>
    )
}