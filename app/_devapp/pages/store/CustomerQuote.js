import React, { Component } from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';

export class CustomerQuote extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params['unid'],
            valid_id:false
        }
        this.state.valid_id=/^\d+$/.test(this.state.id);


    }



    render(){
        return(

            <div className="section CustomerQuote">
                <div className="section-header">
                    <h3 className="section-header-title">Quote {this.state.id}</h3>
                    <div className="section-header-border">
                        <div className="section-header-inner-border"/>
                    </div>
                </div>
                <div className="section-content">
                    {this.state.valid_id ? 'Customer Quote' :'Invalid'}

                </div>
            </div>
        );
    }


}
