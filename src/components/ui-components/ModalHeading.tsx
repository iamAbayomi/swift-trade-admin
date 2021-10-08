import styled from "styled-components"

type Props = {
    text: string
}

const ModalHeading: React.FC<Props> = (Props) => {
    return(
        <div>
            <Text>{Props.text}</Text>
        </div>
    )
}

export default ModalHeading


const Text = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    color: #010066;
    margin: 32px auto 14px;
    text-align: center;
`