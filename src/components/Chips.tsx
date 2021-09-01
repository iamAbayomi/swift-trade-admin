import  React from 'react'
import styled from 'styled-components'

type MyProps ={
    chipsText: string
}

let backgroundColor = ''


export default class Chips extends React.Component<MyProps>{
    
    componentDidMount(){
        if(this.props.chipsText){
            switch(this.props.chipsText){
                case "Active":
                    backgroundColor = "green"
                    break;
                case "Block":
                    backgroundColor = "red"
                    break;
                case "Pending":
                    backgroundColor = "rgba(130, 130, 130, 1)"
                    break;
                case "Processing":
                    backgroundColor = "rgba(1, 0, 102, 1)"
                    break;
                case "Decline":
                    backgroundColor = "red"
                    break;
                case "Completed":
                    backgroundColor = "green"
                    break;
                case "Failed":
                    backgroundColor = "green"
                    break;
                case "In Progress":
                    backgroundColor = "rgba(1, 0, 102, 1)"
                    break;
                    
            }
        }
    }

    render(){
    return(
        <div>
            <ChipsCard className="chips">
                <p>{this.props.chipsText}</p>
            </ChipsCard>
        </div>
    )
}
}



const ChipsCard = styled.div `
    background-color: red ;
    padding: 5px 11px 7px 10px;
    bo
`