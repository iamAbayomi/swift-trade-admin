import  React from 'react'
import styled from 'styled-components'

type MyProps ={
    chipsText: string,
    backgroundColor: string
}

let backgroundColor = 'green'


export default class Chips extends React.Component<MyProps>{
    
    state ={
      chipsText : this.props.chipsText,
      backgroundColor : this.props.backgroundColor 
    }

    componentDidMount(){
        if(this.props.chipsText){
            switch(this.props.chipsText.toLowerCase()){
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
                case "true":
                    this.setState({ chipsText : "Active" })
                    this.setState({ backgroundColor : "rgba(93, 248, 136, 1)" })
                    break;
                case "false":
                    this.setState({ chipsText : "Inactive" })
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                    
            }
        }
    }

    render(){
        return(
            <div>
                <ChipsCard className="chips" style={{ backgroundColor: `${this.state.backgroundColor}` }}>
                    <p className="chips-text">{this.props.chipsText}</p>
                </ChipsCard>
            </div>
        )
    }
}



const ChipsCard = styled.div `
    box-sizing: border-box;
    color: white;
`