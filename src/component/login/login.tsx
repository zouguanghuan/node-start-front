import './login.scss'
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Input, Checkbox, message, Row, Col, Form, Button, Divider } from 'antd';
import { loginUser } from './login.d';
import { StringREG, Alllayout } from '../../util/Constans';
import { Request } from './request'
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
export const Login = (props: any) => {
    // const [userInfo, setUserInfo] = useState<loginUser>({ userName: 'xxx', password: 'xxx' });
    const [loginForm] = Form.useForm()
    const loginSubmitEvent = useCallback(async () => {
        const params = {
            name: loginForm.getFieldValue('name'),
            password: loginForm.getFieldValue('password')
        }
        console.log(params)
        // const result = await Request.UserLogin(params)
        const result = await axios.post('http://localhost:9999/login', params)

        console.log(result)

    }, [])

    useEffect(() => {

    }, [])


    return (
        <div className="login-page">
            <div className="login-content">
                <div className="login-header">
                    欢迎来到欢乐世界
            </div>
                <Divider />
                <div className="login-body">
                    <Form {...Alllayout.layout} form={loginForm}>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="姓名" name="name" rules={[{ required: true, message: "请输入" }]} labelAlign="left">
                                    <Input maxLength={12} minLength={2} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入" }, { pattern: StringREG.password }]} labelAlign="left">
                                    <Input.Password minLength={6} maxLength={12}>
                                    </Input.Password>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item label='' name="remember" labelAlign="left">
                                    <Checkbox>记住我</Checkbox>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Item >
                                    <Button onClick={loginSubmitEvent}>提交</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="login-footer"></div>
            </div>
        </div>
    )
}