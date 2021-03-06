import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Message} from "primereact/message";

export class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            subject:'',
            sent_text:'',
            no_subject:false
        };
        this.callPhone=this.callPhone.bind(this);
    }

    onSend(){

    }
    callPhone(){
        //console.log('call');
        window.location.href="tel:315-488-3161";
    }
    render(){
        return(
            <div className={'contact'}>
                <div className="section">
                    <div className="section-header">
                        <h3 className="section-header-title">Contact Us</h3>
                        <div className="section-header-border">
                            <div className="section-header-inner-border"/>
                        </div>
                    </div>
                    <div className="section-content p-grid p-justify-center">
                        <div className={"p-col"}><Button className="p-button-raised p-button-rounded p-button-success" icon="fa fa-phone" onClick={this.callPhone}/><a href="tel:315-488-3161"> 315-488-3161</a></div>
                        <div className={"p-col"}><Button className="p-button-raised p-button-rounded p-button-success" icon="fa fa-fax"/><a> +315-488-3161</a></div>
                    </div>
                    <div className="section-header">
                        <h3 className="section-header-title">Location</h3>
                        <div className="section-header-border">
                            <div className="section-header-inner-border"/>
                        </div>
                    </div>
                    <div className="section-content p-grid p-justify-center">
                        <div className="CompanyAddress p-col-4">
                            <span>511 Charles Ave</span>
                            <div>Solvay, NY 13209</div>
                        </div>
                        <div className="CompanyAddress NewCompanyAddress p-col-4">
                            <span>110 Luther Ave </span>
                            <div className={"new-icon"}/>
                            <div>Liverpool, NY 13088</div>

                        </div>
                        <div className="CompanyAddress p-col-4">
                            <span>New York City Location</span>
                            <div>Somewhere in NYC</div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section-header">
                        <h3 className="section-header-title">Send Mail</h3>
                        <div className="section-header-border">
                            <div className="section-header-inner-border"/>
                        </div>
                    </div>
                    <div className="section-content p-grid p-fluid">
                        <div id='ContactSubject' className='SubjectField p-float-label p-col-6'>
                            <span className="p-float-label">
                                <InputText id="contact-subject" type="text" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})}/>
                                <label htmlFor="contact-subject">Subject</label>
                            </span>
                        </div>
                        {(this.state.subject==='') ? <div id={"noSubject"} className={'p-col-4'} >
                            <Message severity="error" text={"Subject is Required"} visible={!this.state.no_subject}/>
                        </div>:null }

                        <Editor className='p-col-12' style={{height:'320px'}} value={this.state.text} onTextChange={(e)=>this.setState({text:e.htmlValue})}/>
                    </div>
                </div>
                <div className={'submitPage'}>
                    <Button label="Send" disabled={this.state.subject==='' || this.state.text==='' || this.state.text===null } className="submitPageBtn p-button-success" icon="pi pi-chevron-right" onClick={() => this.setState({text:''})} iconPos="right"/>
                </div>
            </div>




        );
    }
}
