import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import {DataView, DataViewLayoutOptions} from 'primereact/dataview';


export class CartPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first:0,
            sortKey:0,
            totalCost:0.00,
            layout:'list',
            items:[1]
        };
        this.sortOptions=[
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
    }
    renderCartItem(item){
        return (
            <div className="p-col-12" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                Item
            </div>

        );
    }

    render(){

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
                      {this.state.items.length ?
                          <DataView value={this.state.items} layout={this.state.layout} itemTemplate={this.renderCartItem} paginator={true} rows={10} first={this.state.first}
                                    onPage={(e) => this.setState({first: e.first})}/>
                                    :
                          <h3>Your Cart is Empty</h3>
                      }
                  </div>


              </div>
          </div>
        );
    }
}
