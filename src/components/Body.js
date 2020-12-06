import {Row, Col, Card, Form, Input, Button} from "antd";
import React from "react";
import Todocard from "./Todocard";

const {TextArea} = Input;

function BodyArea({todos, addNewTodo}) {
    const [form] = Form.useForm();
    const onFinish = values => {
        form.resetFields();
        console.log('Success:', values);
        addNewTodo({topic: values.topic, desc: values.desc});
    };

    const toDoList = todos.todos.map((todo) => {
        return (
            <Col key={todo.id} className="col-body" span={12}>
                <Todocard topic={todo.topic} desc={todo.desc}/>
            </Col>
        );
    });

    if (todos.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <h4>Loading</h4>
                </div>
            </div>
        );
    } else if (todos.errMsg) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{todos.errMsg}</h4>
                </div>
            </div>
        );
    }
    if (todos.todos != null) {
        return (
            <Row>
                <Col className="col-body" span={12}>
                    <Card title="What to do">
                        <Form
                            form={form}
                            initialValues={{remember: false}}
                            onFinish={onFinish}>
                            <Form.Item name="topic">
                                <Input placeholder="Topic"/>
                            </Form.Item>

                            <Form.Item name="desc">
                                <TextArea placeholder="Description" showCount maxLength={100}
                                          autoSize={{minRows: 10, maxRows: 15}}/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={12}>
                    <Row>
                        {toDoList}
                    </Row>

                </Col>
            </Row>
        );
    }

}

export default BodyArea;
