/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import styled from "styled-components"

export interface props {
    children: any,
    onClick: (args: any)=> void
}

// const MOptions = React.forwardRef<props>(( props, ref: React.ForwardedRef<props>): JSX.Element => (
//     <a
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       props.onClick(e);
//     }}
//   >
//     {props.children}
//     &#x25bc;
//   </a>
// ));

//     function selectOptions(string: any){

//     }
    
//     return(
//         <div>
            
//             <TransactionOptions src="/vectors/options-menu.svg" />
                    
//         </div>
//     )
// }

// export default MOptions


const TransactionOptions = styled.img `
    
`