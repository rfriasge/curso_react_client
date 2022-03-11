import React, { useState } from "react";
import { Form, Button, notification, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  RedditSquareFilled,
} from "@ant-design/icons";
import reactDom from "react-dom";
import { siginInApi, signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constans";

import "./LoginForm.scss";
import { getAccessToken } from "../../../api/auth";

export default function LoginForm() {
  const [form] = Form.useForm();

  const [inputs, setImputs] = useState({
    email: "",
    password: "",
    repeatpassword: "",
  });

  const changeForm = (e) => {
    reactDom.render("", document.getElementById("mensaje"));
    setImputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    const result = await signInApi(inputs);
    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      notification["success"]({ message: "login correcto" });
      getAccessToken();
      window.location.href = "/admin";
    }
  };
  return (
    <>
      <Form
        form={form}
        name="normal_register"
        className="login-form"
        onFinish={login}
      >
        <Form.Item
          name="email"
          layout="inline"
          rules={[
            {
              required: true,
              message: "Por favor digite su email",
            },
          ]}
        >
          <Input
            name="email"
            type="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={inputs.email}
            onChange={changeForm}
            className="login-form__input"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor digite su password",
            },
          ]}
        >
          <Input
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={changeForm}
            className="login-form__input"
          />
        </Form.Item>

        <h4 className="mensaje" id="mensaje"></h4>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
