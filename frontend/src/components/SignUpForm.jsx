import React from "react";
import { Form, Input, Button, Divider } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import '../styles/componentsStyle/signupForm.css';

function SignUpForm() {

  return (
    <div className="signupContainer">
      <h2>Sign Up</h2>
      <Form
        name="signup-form"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          label="Verify Password"
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Re-enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>

        <Divider>or</Divider>

        <Form.Item>
          <Button
            type="default"
            icon={<FcGoogle />}
            block
          >
            Sign Up with Google
          </Button>
        </Form.Item>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
}

export default SignUpForm;
