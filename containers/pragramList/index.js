import React from "react";
import { Row, Col } from "antd";

import ProgramListCard from "../../UI-Components/programListCardComponent"

class ProgramList extends React.Component{
    render(){
        console.log(this.props, "programLisr")
        return(
            <>
                <Row>
                    {
                        this.props.programList && this.props.programList.length && this.props.programList.map( program => {
                            return(
                                <Col lg={6} sm={24} md={12} xs={24}>
                                    <ProgramListCard 
                                        details={program}
                                    />
                                </Col>
                            )
                        } )
                    }
                </Row>
            </>
        )
    }
}

export default ProgramList