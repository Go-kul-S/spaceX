import React from "react";
import { Card, Tag } from 'antd';

import {
    TAG_COLOR
} from "../constants/"


const { Meta } = Card;

const ProgramListCard = (props) => (
    <Card
        hoverable
        style={{ width: "100%", padding:"10%"}}
        cover={<img alt="example" style={{width:"50%", margin:"auto"}} src={props.details.links.mission_patch} />}
    >
        <p style={{color : "#595E9D"}}>
            <b>{props.details.mission_name}</b>
            <b>  #{props.details.flight_number}</b>
        </p>
        <p>
            <b>Mission IDs:</b>
            <p>
                {
                    props.details.mission_id && props.details.mission_id.length && props.details.mission_id.map(mission => <Tag color={TAG_COLOR}>{mission}</Tag>) || "-"
                }
            </p><br/>
            <b>Launch Year:</b> {props.details.launch_year}<br/>
            <b>Successfull Launch:</b> {props.details.launch_success ? "True" : "False"}<br/>
            <b>Successfull Landing:</b> {props.details.rocket.first_stage.cores[0].land_success ? "True" : 'False'}
        </p>
    </Card>
)

export default ProgramListCard