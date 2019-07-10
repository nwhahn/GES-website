import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import {DataView, DataViewLayoutOptions} from 'primereact/dataview';


export class CartPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first:0,
            sortKey:0,
            totalCost:0.00
        };
        this.sortOptions=[
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
    }
    render(){
        const header = (
            <div className="p-grid">
                <div className="p-col-12 p-lg-4 p-md-6">
                    AAAA
                </div>
                <div className="p-col-12 p-lg-4 p-md-6">
                    <div className={"p-grid"}>
                        <div className={"totalCost"}>
                            <span>Cart Total:</span>${this.state.totalCost}
                        </div>

                    </div>

                </div>
            </div>
        );
        return(
          <div className={"section"}>
              <div className="section">
                  <div className="section-header">
                      <h3 className="section-header-title">My Cart</h3>
                      <div className="section-header-border">
                          <div className="section-header-inner-border"/>
                      </div>
                  </div>
                  <div className={"section-content"}>
                      <DataView paginator={true} rows={10} header={header} first={this.state.first} onPage={(e) => this.setState({first: e.first})} />
                  </div>
              </div>
          </div>
        );
    }
}