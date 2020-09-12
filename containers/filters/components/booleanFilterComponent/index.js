import React from "react";
import { Divider, Row, Col } from "antd";

import { TAG_COLOR } from "../../../../constants";

import FilterTag from "../../../../UI-Components/filtersTagComponent";

class BooleanFilterComponent extends React.Component {
    state = {
        booleanFilter: [{ title: "True", value: true }, { title: "False", value: false }]
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>
                    {this.props.filterTitle}
                </h1>
                <Row>
                    {
                        this.state.booleanFilter.map(item => {
                            return (
                                <Col span={12}>
                                    <div style={{
                                        width: "50%",
                                        margin: "auto",
                                        padding: "5px"
                                    }}>
                                        <FilterTag color={TAG_COLOR} title={item.title} value={item.value} onClick={(value) => this.props.onClick(value)} />
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Divider />
            </>

        )
    }
}

export default BooleanFilterComponent