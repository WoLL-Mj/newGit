import React, { useEffect, useState } from 'react'
import { Select, Form, Input } from 'antd'
import './index.css'

export default function ComplexSelect() {
  // const { values } = props3
  const values = [{ name: 'type1' }, { name: 'type2' }, { name: 'type3' }]
  const [selectedArr, setSelectedArr] = useState([])
  const [form] = Form.useForm()
  const { TextArea } = Input

  function onSelectChange(value) {
    // 获取子组件规则
    setSelectedArr(value)
    // const obj = {}
    // value.map(item => {
    //   obj[item] = item
    // })
    // debugger
    // form.setFields(obj)
    console.log(value)
  }
  useEffect(() => {
    // const obj = {'type1描述': '1111'}
    // form.setFieldsValue(obj)
    // selectedArr.map(item => {
    // })
  }, [selectedArr])
  return (
    <div>
      <Select
        placeholder='请选择'
        onChange={e => onSelectChange(e)}
        // value={form.getFieldValue(config.key)}
        allowClear
        style={{ width: '100%' }}
        getPopupContainer={triggerNode => triggerNode.parentElement}
        mode="multiple"
      >
        {values.map(item => (
          <Select.Option key={item.name} value={item.name}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
      {!!selectedArr.length && selectedArr.map((item, index) => {
        return (
          <div key={index}>
            <Form
              form={form}
              onValuesChange={(e) => {
                const values = form.getFieldsValue()
                const obj = {'type1描述': '1111'}
                form.setFieldsValue(obj)
                debugger
              }}
              initialValues={{'type1描述': '1111'}}
            >
              <table className='pm-table' style={{ border: 0 }}>
                <tr>
                  <td className='td1'>
                    <Form.Item name={item} label='类型'>
                      {item}
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name={`${item}描述`} label='描述'>
                      <label>
                        <TextArea placeholder={`请输入`} />
                      </label>
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name={`${item}简介`} label='简介'>
                      <TextArea placeholder={`请输入`} />
                    </Form.Item>
                  </td>
                </tr>
              </table>
            </Form>
          </div>
        )})}
    </div>
  )
}
