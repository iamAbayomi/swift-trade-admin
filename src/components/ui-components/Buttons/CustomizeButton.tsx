import styled from 'styled-components'
import React, { MouseEventHandler } from 'react'
type Props ={
    width: string,
    height: string,
    color: string,
    backgroundColor: string
    buttonText: string,
    onClick? : MouseEventHandler<HTMLButtonElement>
}

// This component aims to determine the reusable component
const CustomizeButton: React.FC<Props> = (Props) => {
    
        return(
            <div>
                <Button style={
                        {
                            width: `${Props.width}`,
                            height: `${Props.height}`,
                            color: `${Props.color}`,
                            backgroundColor: `${Props.backgroundColor}`
                        }
                }
                onClick={Props.onClick}
                >
                    {Props.buttonText}
                </Button>
            </div>
        )
}


export default CustomizeButton

const Button = styled.button ` 
    margin: 39px auto 0px;
    display: block;
    border-radius: 100px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    border: 1px solid blue;

`