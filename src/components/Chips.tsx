import  React from 'react'
import styled from 'styled-components'

type MyProps ={
    chipsText: string,
    backgroundColor: string, 
    userId: any
}

let backgroundColor = 'green'


export default class Chips extends React.Component<MyProps>{
    
    state ={
      chipsText : this.props.chipsText,
      backgroundColor : this.props.backgroundColor 
    }

    componentDidMount(){
        if(this.props.chipsText !=null){
            switch(this.props.chipsText.toLowerCase()){
                case "active":
                    this.setState({backgroundColor : 'green' })
                    break;
                case "block":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "successful":
                    this.setState({backgroundColor : 'rgba(93, 248, 136, 1)' })
                    break;
                case "cancelled":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "pending":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                case "processing":
                    this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" })
                    break;
                case "decline":
                    this.setState({backgroundColor: 'red'})
                    break;
                case "completed":
                    this.setState({backgroundColor : 'rgba(93, 248, 136, 1)' })
                    break;
                case "failed":
                    this.setState({backgroundColor : 'red' })
                    break;
                case "in progress":
                    this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" })
                    break;
                case "false":
                    this.setState({ chipsText : "Active" })
                    this.setState({ backgroundColor : "rgba(93, 248, 136, 1)" })
                    break;
                case "true":
                    this.setState({ chipsText : "Inactive" })
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                    
            }
            // console.log('This is the chips text ' +  this.state.chipsText)
            // console.log('This is the background color ' +  this.state.backgroundColor)
        }
    }


    componentDidUpdate(prevProps:any) {
if(prevProps.chipsText !== this.props.chipsText){
console.log("CHIP STATUS HAS CHANGED")
this.onChangeBackgroundColor()

}

    }


    onChangeBackgroundColor = () => {

            switch(this.props.chipsText.toLowerCase()){
                case "active":
                    this.setState({backgroundColor : 'green' })
                    break;
                case "block":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "successful":
                    this.setState({backgroundColor : 'rgba(93, 248, 136, 1)',chipsText:"successful"  })
                    break;
                case "cancelled":
                    this.setState({  backgroundColor : 'red',chipsText:"cancelled" })
                    break;
                case "pending":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                case "processing":
                    this.setState({ backgroundColor : "rgba(1, 0, 102, 1)", chipsText:"processing" })
                    break;
                case "decline":
                    this.setState({backgroundColor: 'red'})
                    break;
                case "completed":
                    this.setState({backgroundColor : 'rgba(93, 248, 136, 1)' })
                    break;
                case "failed":
                    this.setState({backgroundColor : 'red' })
                    break;
                case "in progress":
                    this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" })
                    break;
                case "false":
                    this.setState({ chipsText : "Active" })
                    this.setState({ backgroundColor : "rgba(93, 248, 136, 1)" })
                    break;
                case "true":
                    this.setState({ chipsText : "Inactive" })
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                    default:
                        this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" });
                        break
                    
            }
        
    }
    render(){
        return(
            <div>
                <ChipsCard className="chips" style={{ backgroundColor: `${this.state.backgroundColor}` }}>
                    <p className="chips-text">{this.state.chipsText}</p>
                </ChipsCard>
            </div>
        )
    }
}



const ChipsCard = styled.div `
    box-sizing: border-box;
    color: white;
`