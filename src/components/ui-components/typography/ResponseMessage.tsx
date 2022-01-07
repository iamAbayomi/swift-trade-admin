import styled from "styled-components"

type props = {
    text: string
    color: string
}

const ResponseMessage: React.FC<props> = (props) => {
    return(
        <Text style={{ color: `${props.color}` }} >{props.text}</Text>
    )
}

export default ResponseMessage


const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    margin: 30px 0px -20px 0px;
`