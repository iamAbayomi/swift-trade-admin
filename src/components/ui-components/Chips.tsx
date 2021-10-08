import  React from 'react'
import styled from 'styled-components'

type MyProps ={
    chipsText: string,
    backgroundColor: string
}

// let backgroundColor = 'green'


const Chips: React.FC<MyProps> = (MyProps) =>{
    
        return(
            <div>
                <ChipsCard className="chips" style={{ backgroundColor: `${MyProps.backgroundColor}` }}>
                    <ChipsText className="chips-text">{MyProps.chipsText} </ChipsText>
                </ChipsCard>
            </div>
        )
}



const ChipsCard = styled.div `
    box-sizing: border-box;
    color: white;
    width: 111px;
    height: 30px;
    border-radius: 215px;
    margin: 0px;
    padding: 0px;
`

const ChipsText = styled.p `
    padding: 5px 0px 10px 16px;
    margin: 0px;
`

export default Chips