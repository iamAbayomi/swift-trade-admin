import styled from "styled-components"

type Props = {
    text: string
}

const Subtitle: React.FC<Props> = (Props) =>{
    return(
        <Text>{Props.text}</Text>
    )
}

export default Subtitle


const Text = styled.p `
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    /* Swift gray */

    color: #828282;

`