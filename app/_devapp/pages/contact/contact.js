import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Message} from "primereact/message";

import {ContactForm} from "./ContactForm"

export class Contact extends Component{
    constructor(props){
        super(props);

        this.callPhone=this.callPhone.bind(this);
    }

    callPhone(){
        //console.log('call');
        window.location.href="tel:315-488-3161";
    }
    render(){
        return(
            <div id='contactSection' className={'contact'}>
                <div className="section">
                    <div className="section-header">
                        <h3 className="section-header-title">Contact</h3>
                        <div className="section-header-border">
                            <div className="section-header-inner-border"/>
                        </div>
                    </div>
                    <div className="section-content p-grid p-justify-center">


                        <div className={"p-col"}>
                            <div className="section">
                                <div className="section-header">
                                    <h3 className="section-title">Office</h3>
                                </div>
                                <div className="CompanyAddress p-col-4">
                                    <span>110 Luther Ave </span>
                                    <div className={"new-icon"}/>
                                    <div>Liverpool, NY 13088</div>

                                </div>
                                <div className="section-header">
                                    <h3 className="section-title">Inquiries</h3>
                                </div>
                                <div className={"p-col"}><Button className="p-button-raised p-button-rounded p-button-success" icon="fa fa-phone" onClick={this.callPhone}/><a href="tel:315-488-3161"> 315-488-3161</a></div>
                                <div className={"p-col"}><Button className="p-button-raised p-button-rounded p-button-success" icon="fa fa-fax"/><a> +315-488-3161</a></div>
                            </div>

                        </div>
                        <div className={"p-col"}>
                            <ContactForm/>
                        </div>



                    </div>

                </div>


            </div>




        );
    }
}
