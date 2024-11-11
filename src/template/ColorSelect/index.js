import React from 'react'
import ColorPicker from 'rc-color-picker'
import { SketchPicker, AlphaPicker, BlockPicker } from 'react-color'
import 'rc-color-picker/assets/index.css'
import { Table } from 'antd';
export default function ColorSelect () {
    function handleChange(e){
        console.log(e)
    }
    const data = [
        {name: 1},
        {name: 2},
        {name: 3},
        {name: 4},
        {name: 5},
        {name: 6},
    ]
    const columns = [
        {
            title: '',
            dataIndex: 'name',
            width: 48,
            render: (text) => <div>text</div>
        }
    ]
    return (
        <div style={{ margin: '20px 20px 20px', textAlign: 'center', height: 2000 }}>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <h4>topLeft</h4>
            <ColorPicker
                color=''
                // alpha={30}
                placement="topLeft"
                // className="some-class"
                getCalendarContainer={triggerNode => triggerNode.parentElement}

            >
                <span className="rc-color-picker-trigger" />
            </ColorPicker>
            <h4>topRight</h4>
            <ColorPicker color={'#F10'} placement="topRight" />
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <h4>bottomLeft</h4>
            <ColorPicker color={'#0ad'} alpha={50} placement="bottomLeft" />
            <h4>bottomRight</h4>
            <ColorPicker color={'#0F0'} placement="bottomRight" />
            <Table
                rowKey='id'
                columns={columns}
                dataSource={data}
                pagination={{
                    position: ['bottomCenter'],
                    total: 6,
                    current: 1,
                    pageSize: 5 || TABLE_PAGE_SIZE,
                    hideOnSinglePage: false,
                    showSizeChanger: false,
                    pageSizeOptions: ['5', '10', '20', '50']
                }}
            />
        </div>
    )
}
{/* <AlphaPicker /> <BlockPicker /> <ChromePicker/> <CirclePicker /> <CompactPicker /> <GithubPicker /> <HuePicker/> <MaterialPicker /><PhotoshopPicker /> <SketchPicker/> <SliderPicker/> <SwatchesPicker/>  <TwitterPicker/> */}