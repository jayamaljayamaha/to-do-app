import {Row, Col, Card, Form, Input, Button} from "antd";
import React from "react";
import Todocard from "./Todocard";

const { TextArea } = Input;

function BodyArea({todos}) {

    console.log(todos);
    const onFinish = values => {
        console.log('Success:', values);
    };

    return(
        <Row>
            <Col className="col-body" span={12}>
                <Card title="What to do" >
                    <Form
                        initialValues={{ remember: true }}
                        onFinish={onFinish}>
                        <Form.Item name="topic">
                            <Input placeholder="Topic" />
                        </Form.Item>

                        <Form.Item  name="desc">
                            <TextArea placeholder="Description" showCount maxLength={100} autoSize={{ minRows: 10, maxRows: 15 }}/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col  span={12}>
                <Row>
                    <Col className="col-body" span={12}>
                        <Todocard topic="abc1" desc="desc1"/>
                    </Col>
                    <Col className="col-body" span={12}>
                        <Todocard/>
                    </Col>
                    <Col className="col-body" span={12}>
                        <Todocard/>
                    </Col>
                    <Col className="col-body" span={12}>
                        <Todocard/>
                    </Col>
                    <Col className="col-body" span={12}>
                        <Todocard/>
                    </Col>

                </Row>

            </Col>
        </Row>
    );
}

export default BodyArea;
