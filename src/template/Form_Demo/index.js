import { Form, Input, Button } from 'antd' 

export default function FromDemo(props) {
    const form = Form.useForm()
    const myClick = (values) => {
        debugger
    }
    return (
        <Form
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            name="basic"
            onFinish={myClick}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}