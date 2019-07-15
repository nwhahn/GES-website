import React, { Component } from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';

import {DataView, DataViewLayoutOptions} from 'primereact/dataview';


export class CustomerQuoteList extends Component{
    constructor(props){
        super(props);
        this.state = {
            quotes: [],
            layout: 'list'
        };
        this.itemTemplate = this.itemTemplate.bind(this);


    }
    itemTemplate(quote, layout) {
        if (layout === 'list') {
            return (
                <div className="p-grid">
                    <div>{quote.name}</div>
                </div>
            );
        }
        if (layout === 'grid') {
            return (
                <div className="p-col-12 p-md-3">
                    <div>{quote.name}</div>
                </div>
            );
        }
    }

    render(){
        return(

            <div className="section CustomerQuote">
                <div className="section-header">
                    <h3 className="section-header-title">Your Quotes</h3>
                    <div className="section-header-border">
                        <div className="section-header-inner-border"/>
                    </div>
                </div>
                <div className="section-content">
                    <a href={"./#/store/quotes/1"}>Quote 1</a>
                    <DataView value={this.state.quotes} layout={this.state.layout} itemTemplate={this.itemTemplate}/>

                </div>
            </div>
        );
    }


}
