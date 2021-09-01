import  React from 'react'
import styled from 'styled-components'

type MyProps ={
    chipsText: string
}

let backgroundColor = 'green'


export default class Chips extends React.Component<MyProps>{
    
    componentDidMount(){
        if(this.props.chipsText){
            switch(this.props.chipsText){
                case "Active":
                    backgroundColor = "green"
                    console.log("I am here")
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
                <p>This</p>
                <p>{backgroundColor}</p>
                <ChipsCard className="chips">
                    <p className="chips-text">{this.props.chipsText}</p>
                </ChipsCard>
            </div>
        )
    }
}



const ChipsCard = styled.div `
    background-color: ${backgroundColor} ;
    box-sizing: border-box;
    color: white;
`