import React from "react";
import { Divider } from "antd";

// Components
import YearComponents from "./components/yearComponents";
import BooleanFilterComponent from "./components/booleanFilterComponent";

class Filters extends React.Component{
    state = {
        booleanFilter : [{ title: "Successful Launch", value : "launch_success"}, { title : "Sucessful Landing", value:"land_success"}], 
        filters: this.props.filters || {}
    }

    handleFilters = (value, key) => {
        
        const { filters } = this.state
        filters[key] = value
        this.setState({
            filters
        })
        this.props.handleFilterChange(this.state.filters)

    }
    render(){
        return(
            <>
                <YearComponents 
                    onClick={(value) => this.handleFilters(value, "launch_year")}
                    launchYear = {this.props.launchYear}
                />
                <Divider />
                { this.state.booleanFilter.map( filter =>  <BooleanFilterComponent filterTitle={filter.title} onClick={(value) => this.handleFilters(value, filter.value) }/> ) }
            </>
        )
    }
}

export default Filters