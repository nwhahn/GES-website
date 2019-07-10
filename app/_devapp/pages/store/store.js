import React, { Component } from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';

import {ProductPage} from './ProductPage';
import {CustomerQuote} from './CustomerQuote';
import {CustomerWishlist} from './CustomerWishlist';
import {CartPage} from './CartPage';

import {TabMenu} from 'primereact/tabmenu';

import {SplitButton} from "primereact/splitbutton"
import {Rating} from "primereact/rating";

import {HomeComponent} from "../home/HomeComponent";
import {AccountSettings} from "../account/account_settings";

export class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.unid,
            mfq:'Manufacturer',
            name:'This is where the Name Goes',
            desc:'Insert Description HereInsert Description HereInsert Description HereInsert Description HereInsert Description HereInsert Description HereInsert Description Here',
            img:'./app/assets/img/switch.jpg',
            rating:3,
            SKU:'',
            new:false,
            add_to_submenu:[
                {label:'Add to Quote',icon: 'pi pi-shopping-cart'},
                {label:'Add to Wishlist',icon:'pi pi-tags'},
                {label:'Add to Comparison',icon:'pi pi-chart-bar'},
            ]
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){

    }
    render(){

        return(


            <div className={"storeItem"} onClick={(e)=>this.handleClick(e)}>
                <div className="p-grid p-justify-center">
                    <div className={"p-col-1"}>
                         {(this.state.new===true) ? <div className={"new-icon"}/> : null }
                    </div>
                    <div className="center p-col-8 p-offset-1">
                         <img alt="productImg" src={this.state.img}/>
                    </div>
                    <div className={"p-col-12"}>
                        {this.state.mfq}
                    </div>
                    <div className={"p-col-12"}>
                        {this.state.name}
                    </div>
                    <Rating value={this.state.rating} stars={5} readonly={true} cancel={false}/>
                    <div className={"p-col-12"}>
                        {this.state.desc}
                    </div>
                    <div className={"p-col-6"}>
                        <SplitButton label="Add to Cart" icon="pi pi-shopping-cart" model={this.state.add_to_submenu} className={"p-button-success"}/>
                    </div>
                </div>
            </div>

        );


    }

}

export class StoreHome extends Component{
    constructor(props) {
        super(props);
        this.state={
            accordion:'',
            tabs:[
                {label: 'Featured', icon: 'pi pi-fw pi-home'},
                {label: 'Switches'},
                {label: 'Wire'},
                {label: 'Conduit'},
                {label: 'Other'},


            ],
            product_items:[1,2,3],
            activeTab:1,
            itemAlignment:'p-col-12 p-md-6 p-lg-3',
        };

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
                <Route exact path="/store/quotes/" component={CustomerQuote}/>
                <Route path="/store/type/:type" component={StoreHome}/>
            </div>

        );
    }
}
