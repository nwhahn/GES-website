import React, { Component } from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';

import {StoreItem} from './StoreItem';
import {DataView} from "primereact/dataview";
import {DataViewLayoutOptions} from "primereact/dataview";
import {Dropdown} from "primereact/dropdown";
import {Slider} from "primereact/slider";


export class StoreHome extends Component{
    constructor(props) {
        super(props);

        this.state={
            items:[1,2,3],
            layout:'grid',
            selectedItem:null,
            visible: false,
            sortKey:null,
            sortOrder:null,
            priceValues: [0, 999]
        };
        this.itemTemplate = this.itemTemplate.bind(this);
        this.renderHeader=this.renderHeader.bind(this);
        this.onChangePriceSlider=this.onChangePriceSlider.bind(this);
    }
    itemTemplate(item){

        if(this.state.layout==='list'){
            return(
                <div className={"p-col-12"}><StoreItem/></div>
            );
        }
        else if(this.state.layout==='grid'){
            return(
                <div className={"p-col-12 p-lg-3 p-md-4 p-sm-6"}><StoreItem id={item}/></div>
            );

        }
//return item;
    }
    onChangePriceSlider(e){

    }
    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
    }
    renderHeader(){
        const sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
        return (
            <div className="p-grid">
                <div className="p-col-3" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} />
                </div>
                <div className="p-col-3" style={{textAlign: 'left'}}>
                    <p>Price Range: ${this.state.priceValues[0]}.00-${this.state.priceValues[1]}.00</p>
                    <Slider max={999} value={this.state.priceValues} onChange={(e)=>{this.setState({ priceValues: e.value })}} range={true}/>
                </div>
                <div className="p-col-3" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
                </div>
            </div>
        );
    }

    render(){

        const header = this.renderHeader();

        return(
            <DataView value={this.state.items} header={header} layout={this.state.layout} itemTemplate={this.itemTemplate} paginatorPosition={'both'} paginator={true} rows={this.state.items.length} sortOrder={this.state.sortOrder} sortField={this.state.sortField}/>
        );


    }
}