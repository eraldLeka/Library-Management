import React from "react";
import { Form, Input, Button, Divider } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import '../styles/componentsStyle/loginForm.css';

function LoginForm() {    
  return (
    <div className="loginContainer" >
      <h4>Login</h4>
      <Form
        name="login-form"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Log In
          </Button>
        </Form.Item>

        <Divider>or</Divider>

        <Form.Item>
          <Button
            type="default"
            icon={<FcGoogle />}
            block
          >
            Login with Google
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
