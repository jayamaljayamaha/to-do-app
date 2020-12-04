import {Card} from "antd";
import React from "react";

function Todocard(props) {
    return (
        <Card title={props.topic}>
            {props.desc}
        </Card>
    );

}

export default Todocard;
