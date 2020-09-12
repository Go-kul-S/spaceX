import { Tag } from 'antd';

const CustomTag = (props) => (
    <Tag 
        color={props.color}
        onClick={() => props.onClick(props.value)}
        style={{margin:"auto"}}
    >
        {props.title}
    </Tag>
)

export default CustomTag