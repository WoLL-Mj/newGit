import ReactDOM from 'react-dom';
import TableRowRadio from './template/index.js'
// import FormDemo from './template/Form_Demo/index.js'
import RouterDemo from './template/Router_Demo/index.js'
import RouteDemo from './template/Route_Demo/index.js'
import InfiniteScroller from './template/Xia_La/index.js'
import CascaderDemo from './template/Cascader_Demo/index.js'
import MyForm from './template/My_Form/index.js'
import InfoChart from './template/InfoChart/index.js'
import InfoChartHook from './template/InfoChartHook/index.js'
import ComplexSelect from './template/ComplexSelect/index.js'
import SliderSelect from './template/SliderSelect/index.js'
import ColorSelect from './template/ColorSelect/index.js'
import Shu from './template/Shu/index.js'
import ExcelTable from '././template/ExcelTable/index.js'



import { Input } from 'antd';
// import {Router, Route, Switch } from 'react-router-dom'
import { HashRouter, Route, Switch  } from "react-router-dom"

import React from 'react';

export default function RefApp() {
    const { TextArea } = Input;

    return (
        <div>
            <ExcelTable />
            {/* <TextArea showCount maxLength={100} /> */}
            {/* <HashRouter>
                <Switch>
                    <Route path='/' exact component={RouterDemo}></Route>
                    <Route path='/route' exact component={RouteDemo}></Route>
                </Switch>
            </HashRouter> */}
        </div>
    )
}

ReactDOM.render(<RefApp />, document.getElementById('container'))
