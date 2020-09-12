import React from "react";
import { Card, Tag } from 'antd';

import {
    TAG_COLOR
} from "../constants/"


const { Meta } = Card;

const ProgramListCard = (props) => (
    <Card
        hoverable
        style={{ width: "100%", padding:"20%" }}
        cover={<img alt="example" src={props.details.links.mission_patch_small} />}
    >
        <p>
            <b>{props.details.mission_name}</b>
        </p>
        <p>
            <b>Mission IDs:</b>
            <p>
                {
                    props.details.mission_id && props.details.mission_id.length && props.details.mission_id.map(mission => <Tag color={TAG_COLOR}>{mission}</Tag>) || "-"
                }
            </p>
        </p>
        <p>
            <b>Launch Year:</b> {props.details.launch_year}
        </p>
        <p>
            <b>Successfull Launch:</b> {props.details.launch_success ? "True" : "False"}
        </p>
        <p>
            <b>Successfull Landing:</b> {props.details.rocket.first_stage.cores[0].land_success ? "True" : 'False'}
        </p>
    </Card>
)

export default ProgramListCard