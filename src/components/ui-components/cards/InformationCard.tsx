import styled from "styled-components";

type CardProperties = {
    response: {
        cardImageSrc : string,
        cardHeadingText: string,
        cardSubtitleText: string
        cardButtonTrue : boolean
    } | undefined
}


const InformationCard: React.FC<CardProperties> = (CardProperties) =>{
    return(
    
            <CardSection className="">
                <CardImageSection>
                    <CardImage src={CardProperties.response?.cardImageSrc} />
                </CardImageSection>
                <CardHeading> {CardProperties.response?.cardHeadingText} </CardHeading>
                <CardSubtitle> {CardProperties.response?.cardSubtitleText} </CardSubtitle>
                {
                    CardProperties.response?.cardButtonTrue === true ?
                    <CardLongButton> PROCEED TO MAKE PAYMENT </CardLongButton>   :<div/>
                }
            </CardSection>
    )
}

export default InformationCard;

const CardSection = styled.div `
    padding: 37px 40px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    width: 441px;
`

const CardImageSection = styled.div`
    margin: auto;
    width: 190px;
`

const CardImage = styled.img `
    
`

const CardHeading = styled.p `
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    /* identical to box height, or 34px */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;

    /* Swift Solid 2 */

    color: #010066;

`

const CardSubtitle = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 15.75px;
    line-height: 175%;
    /* or 28px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    /* swift black */

    color: #333333;


`

const CardButton = styled.button`

`

const CardLongButton = styled.button `
    padding: 16px 57px;
    width: 393px;
    height: 53px;
    /* Swift Solid 2 */
    background: #010066;
    border-radius: 40px;
    color: white;
    border-color: #010066;

`