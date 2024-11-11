
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
// 表单tabel单行点击选中radio
export default function TableRowRadio(props) {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }];
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 11,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 22,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 33,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Disabled User',
    age: 44,
    address: 'Sidney No. 1 Lake Park',
  }];
  // const state = {
  //   selectedRowKeys: [],
  // }
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const selectRow = (record, selectedRowKeys1) => {
    const selectedRowKeys = [...selectedRowKeys1]
    if (selectedRowKeys.length > 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
      selectedRowKeys.push(record.key);
    } else {
      selectedRowKeys.push(record.key);
    }
    setSelectedRowKeys(selectedRowKeys)
  }
  const onSelectedRowKeysChange = () => {
    setSelectedRowKeys([]);
    console.log(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedRowKeysChange,
    type: 'radio'
  };
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      onRow={(record) => ({
        onClick: () => {
          selectRow(record, selectedRowKeys);
        },
      })}
    />
  );
}

// ReactDOM.render(<App />, document.getElementById('container'))