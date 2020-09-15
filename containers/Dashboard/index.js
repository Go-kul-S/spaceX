import React from "react";
import { stringify as Stringify } from "query-string";
import Router, { withRouter } from 'next/router'
import { Row, Col, Skeleton } from "antd";
import _IsEqual from "lodash/isEqual";

// Services
import { getSpaceXLaunchList } from "../../services/mainApi";

// Components
import FilterContainer from "../filters";
import ProgramList from "../pragramList"

class Dashboard extends React.Component {
    state = {
        queryParams: {},
        programList: [],
        loading: true
    }

    async componentDidMount() {
        const programList = await getSpaceXLaunchList();
        this.setState({
            programList,
            loading: false
        })
    }

    async componentDidUpdate() {
        const isFilterChanged = _IsEqual(this.state.queryParams, this.props.router.query)
        if (!isFilterChanged) {
            await this.setState({
                queryParams: this.props.router.query,
                loading: true
            });
            let { queryParams } = this.state
            let QueryString = Stringify(queryParams)
            const programList = await getSpaceXLaunchList(QueryString);
            this.setState({
                programList,
                loading: false
            })

        }
    }

    _handleFilterChange = (filters) => {
        const queryString = Stringify(filters);
        Router.push(`/?${queryString}`);
    }

    render() {
        return (
            <div style={{overflowX : "hidden", backgroundColor : "#F2F2F2"}}>
                <div>
                    <h1>SpacEx Launch Programs</h1>
                </div>
                <Row gutter={16}>
                    <Col lg={3} style={{backgroundColor : "#fff"}}>
                        <FilterContainer
                            handleFilterChange={this._handleFilterChange}
                            launchYear={this.state.queryParams.launch_year}
                            successfullLaunch={this.state.queryParams.launch_success}
                            successfullLand={this.state.queryParams.land_success}
                        />
                    </Col>
                    <Col lg={21}>
                        {
                            this.state.loading ?
                            <Row>
                                {[1, 2, 3, 4].map(item => {
                                        return (
                                            <Col span={6} style={{padding:"10px"}}>
                                                <Skeleton loading={true} active paragraph={{ rows: 8 }} ></Skeleton>
                                            </Col>
                                        )
                                })}
                            </Row>
                                :
                                <ProgramList
                                    programList={this.state.programList}
                                />
                        }
                    </Col>
                </Row>
                <div style={{position: "relative", top: "50%", left: "50%"}}>
                    <h1>Developed By : Gokul S</h1>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)