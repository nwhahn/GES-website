import React, { Component } from 'react';
import {Route,Link,HashRouter} from 'react-router-dom';

import {Rating} from "primereact/rating";
import {SplitButton} from "primereact/splitbutton";

export class StoreItem extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            mfq:'Legrand',
            name:'This is where the Name Goes',
            title:'15A Triple Pole Toggle Switches | White ',
            img:'./app/assets/img/switch.jpg',
            rating:3,
            SKU:'663WG',
            price:'$1.60',
            UOM:'ea',
            add_to_submenu:[
                {label:'Add to Quote',icon: 'pi pi-shopping-cart'},
                {label:'Add to Wishlist',icon:'pi pi-tags'},
                {label:'Add to Comparison',icon:'pi pi-chart-bar'},
            ]
        }

       // console.log(this.props);
        /*this.state={
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
        let this_obj=this;
        this.allowed_fields=['name','mfq','desc','img','rating','SKU','new'];
        jQuery.post("./API/get_item_data.php",{id:this.state.id}).done(function(data){

            let entries = Object.entries(JSON.parse(data));
            for (const entry of entries){
                if(this_obj.allowed_fields.includes(entry[0])){
                    //console.log(entry);
                    this_obj.setState({[entry[0]]:entry[1]});
                }

            }
        });

        this.handleClick=this.handleClick.bind(this);*/
    }

   /* handleClick(e){
        let baseProductUrl='#/store/product/';
        window.location.hash=(baseProductUrl+this.state.id);
    }*/
    render(){


        let cartButton=<SplitButton label="Add to Cart" icon="pi pi-shopping-cart" model={this.state.add_to_submenu} className={"p-button-success"}/>;
        let price= <span>{this.state.price}/{this.state.UOM}</span>;
        let stats=<table>
                        <tbody>
                        <tr>
                            <td>SKU</td>
                                <td>:</td>
                                <td>{this.state.SKU}</td>
                            </tr>
                        </tbody>
                    </table>;
        if(this.props.layout==='list'){
            return(
                <div className={"storeItem"}>
                    <div className="p-grid p-justify-center">
                        <div className={"p-col-3"}>
                            <img alt="productImg" src={this.state.img}/>
                        </div>
                        <div className={"p-col-3"}>
                            <h1>{this.state.title}</h1>
                            {this.state.mfq}
                        </div>
                        <div className={"p-col-3"}>
                            {stats}
                        </div>
                        <div className={"p-col-3"}>
                            <div>{price}</div>
                            {cartButton}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className={"storeItem"}>
                    <div className="p-grid p-justify-center">
                        <div className="center p-col-8 p-offset-1">
                            <img alt="productImg" src={this.state.img}/>
                        </div>

                        <div className={"p-col-12"}>
                            <h1>{this.state.title}</h1>
                        </div>
                        <div className={"p-col-12"}>
                            {this.state.mfq}
                        </div>
                        <div className={"p-col-12"}>
                            {price}
                        </div>
                        <Rating value={this.state.rating} stars={5} readonly={true} cancel={false}/>
                        <div className={"p-col-12"}>
                            {stats}
                        </div>
                    </div>
                </div>


            );
        }



    }

}
