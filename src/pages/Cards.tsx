/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import SetofCards from "../components/SetOfCards";


export default class Cards extends React.Component {
    
    
    render(){
        return(
            <div className="container">
                <div className="contents">
                 <Link to="/trade/coin" className="no-text">
                      <div className="display-flex" style={{float:"right"}}>
                          <img className="left-arrow" src="/vectors/left-arrow.svg" />
                          <p>Back to Coin</p>
                      </div>
                </Link>
                  <div className="display-flex clearfix">
                    <p className="dashboard-title" >Trade</p>
                  </div>
                  
                  <div className="card-white">
                    <p className="purple-header-typography" >Got Gift Cards For Sale?</p>
                    <p>Choose your preffered product card to continue the exchange process </p>
                    <SetofCards/>
                   </div>
                </div>
                
            </div>
        )
    }

}