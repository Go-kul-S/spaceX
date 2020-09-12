import React from "react";
import { Divider, Row, Col } from "antd";

import { YEARS, TAG_COLOR, TAG_COLOR_HIGHLIGHTED } from "../../../../constants";

import FilterTag from "../../../../UI-Components/filtersTagComponent";

class YearComponent extends React.Component{
    state={

    }
    render(){
        return(
            <>
            <h1 style={{textAlign:"center"}}>
                Launch Year
            </h1>
            <Divider />
            <Row>
                {
                    YEARS.map( year =>  {
                        return(
                            <Col span={12}>
                                <div
                                    style={{
                                        width: "50%",
                                        margin: "auto",
                                        padding: "5px"
                                    }}
                                >
                                    <FilterTag  color={this.props.launchYear == year ? TAG_COLOR_HIGHLIGHTED : TAG_COLOR} title={year} value={year} onClick={(value) => this.props.onClick(value)} />
                                </div>
                            </Col>
                            )
                        }
                    ) 
                }
            </Row>
            </>
        )
    }
}


export default YearComponent