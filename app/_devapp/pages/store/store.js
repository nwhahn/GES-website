import React, { Component } from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';

import {StoreHome} from './StoreHome';
import {ProductPage} from './ProductPage';
import {CustomerQuote} from './CustomerQuote';
import {CustomerQuoteList} from './CustomerQuoteList';
import {CustomerWishlist} from './CustomerWishlist';
import {CartPage} from './CartPage';

import {TabMenu} from 'primereact/tabmenu';


require('jquery');



export class StoreHomeBackup extends Component{
    constructor(props) {
        super(props);
        let url_base='./#/store/type/';
        this.state={
            accordion:'',
            tabs:[
                {label: 'Featured', icon: 'pi pi-fw pi-home',url:'./#/store/'},
                {label: 'Switches',url:url_base+'switches'},
                {label: 'Wire',url:url_base+'wire'},
                {label: 'Conduit',url:url_base+'conduit'},
                {label: 'Other', url:url_base+'other'},


            ],
            product_items:[1],
            activeTab:0,
           itemAlignment:'p-col-12 p-md-6 p-lg-3',
        };
        /*if(this.props.match.params['type']){

            for (let tab in this.state.tabs) {
                if(this.state.tabs[tab].label.toLowerCase()===this.props.match.params['type'].toLowerCase()){
                    this.state.activeTab=this.state.tabs[tab]
                    break;
                }
            }
            if(this.state.activeTab===0){
                console.log('Change Address');
            }

        }*/
        //get items by category

    }
    render() {

        return (
            <div className="section">
                <div className="section-header">
                    <h3 className="section-header-title">Store</h3>
                    <div className="section-header-border">
                        <div className="section-header-inner-border"/>
                    </div>
                </div>
                <div className="section-content">
                    <div className={"p-grid p-fluid"}>
                        <TabMenu className="p-col-12" model={this.state.tabs} activeItem={this.state.activeTab} onTabChange={(e) => this.setState({activeTab: e.value})}/>

                        {this.state.product_items.map((id)=>(
                            <div className={"p-col-12 p-sm-6 p-lg-4"} key={id}>
                                <Item unid={id}/>
                            </div>
                        ))};

                    </div>

                </div>

            </div>
        );
    }
}



export class Store extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id={'store'}>
                <Route exact path="/store" component={StoreHome}/>
                <Route exact path="/store/product/:id" component={ProductPage}/>
                <Route exact path="/store/wishlists/" component={CustomerWishlist}/>
                <Route exact path={"/store/cart/"} component={CartPage}/>
                <Route exact path="/store/quotes/" component={CustomerQuoteList}/>
                <Route exact path="/store/quotes/:unid" component={CustomerQuote}/>
                <Route exact path="/store/type/:type" component={StoreHome}/>
                <Route exact path="/store/type/" component={StoreHome}/>
            </div>

        );
    }
}
