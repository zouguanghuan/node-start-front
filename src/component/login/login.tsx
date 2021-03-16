import './login.less'
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Input, Checkbox, message, Row, Col, Form } from 'antd';
import { loginUser } from './login.d';
import { StringREG, Alllayout } from '../../util/Constans';
export const Login = (props: any) => {
    const [userInfo, setUserInfo] = useState<loginUser>({ userName: 'xxx', password: 'xxx' });


    useEffect(() => {

    }, [])

    return (
        <div className="login-content">
            <div className="login-header">
                欢迎来到欢乐世界
            </div>
            <div className="login-body">
                <Form>
                    <Row>
                        <Col>
                            <Form.Item label="Name" rules={[{ required: true, message: "请输入" }]} labelAlign="left">
                                <Input maxLength={12} minLength={2} ></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Item label="Password" rules={[{ required: true, message: "请输入" }, { pattern: StringREG.password }]} labelAlign="left">
                                <Input.Password minLength={6} maxLength={12}>
                                </Input.Password>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="login-footer"></div>
        </div>
    )
}