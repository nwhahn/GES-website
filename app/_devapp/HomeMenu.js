import React,{Component} from "react";

import {Menubar} from "primereact/menubar";


export class HomeMenu extends Component{
    constructor(props){
        super(props);


        this.Menu=[
            {
                label:'Home',
                icon:'pi pi-fw pi-home', url:'./'
            },
            {
                label:'Lamp Repair'
            },
            {
                label:'Materials Counter'
            },
            {
                label:'Lighting Department'
            },
            {label:'About Us',icon:'pi pi-fw pi-info',url:'./#/about'},
            {label:'Contact',icon:'pi pi-fw pi-user',url:'./#/contact/'},
            {
                label:'Store',
                icon:'pi pi-fw pi-shopping-cart',
                items:[
                    {label:'Store Home',icon:'pi pi-fw pi-external-link', url:'./#/store/'},
                    {label:'Switches',icon:'pi pi-fw pi-angle-right', url:'./#/store/type/switches'},
                    {label:'Wire',icon:'pi pi-fw pi-angle-right', url:'./#/store/type/wire'},
                    {label:'Conduit',icon:'pi pi-fw pi-angle-right', url:'./#/store/type/conduit'},
                    {label:'Outlets',icon:'pi pi-fw pi-angle-right', url:'./#/store/type/outlets'},
                ]
            }



        ];

    }
    render(){
        return(
            <Menubar className={"homeMenu p-col-12"} model={this.Menu}/>
        );
    }
}
