import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
export default function MyForm() {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
    };
    const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
    };
    
    const onFinish = (values) => {
    };
    
    const onFinishFailed = (errorInfo) => {
    };

    function checkName(rule, value, callback) {
      if(!value) {
        callback()
        return
      }
      if(/^1[3456789]\d{9}$/.test(value)) {
        axios.get('https://cat.aidigger.com/api/v1/davinci_properties?cat_id=3').then(res => {
          if(res.status !== 200) {
            callback('正确')
          } else {
            callback('error')
          }
        })
      } else {
        callback('手机号格式错误')
      }
    }
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
        <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              {
                validator: (rule, value, callback) => checkName(rule, value, callback)
              }
            ]}
        >
            <Input />
        </Form.Item>
    
        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>
    
        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    )
}
