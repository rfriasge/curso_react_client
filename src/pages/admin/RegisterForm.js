import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import "./RegisterForm.scss";
import reactDom from "react-dom";
import { signUpApi } from "../../api/user";

const Registerform = () => {
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

  const creaCuenta = (e) => {
    //e.preventDefault();

    reactDom.render("", document.getElementById("mensaje"));
    const pw = inputs.password;
    const pww = inputs.repeatpassword;
    let mensaje = "";

    if (pw !== pww && pw !== "" && pww !== "") {
      mensaje = "Password son diferentes";
    } else {
      if (
        inputs.email !== "" &&
        inputs.password !== "" &&
        inputs.repeatpassword !== ""
      ) {
        const result = signUpApi(inputs);
      }
    }
    reactDom.render(mensaje, document.getElementById("mensaje"));
  };

  return (
    <>
      <Form
        form={form}
        name="normal_register"
        className="register-form"
        onFinish={creaCuenta}
        //</Card>onFinishFailed()
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
          />
        </Form.Item>

        <Form.Item
          name="repeatpassword"
          rules={[
            {
              required: true,
              message: "Por favor digite su password nuevamente",
            },
          ]}
        >
          <Input
            name="repeatpassword"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Repetir Password"
            value={inputs.repeatpassword}
            onChange={changeForm}
          />
        </Form.Item>
        <h4 className="mensaje" id="mensaje"></h4>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="registrar-form-button"
            //onClick={creaCuenta}
            //   disabled={
            //     !form.isFieldsTouched(true) ||
            //     !!form.getFieldsError().filter(({ errors }) => errors.length)
            //       .length
            //   }
          >
            Crear Cuenta
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Registerform;
