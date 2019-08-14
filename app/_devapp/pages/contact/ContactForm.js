import {InputText} from "primereact/inputtext";
import {Message} from "primereact/message";
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import React,{Component} from "react";

import axios from 'axios';



export class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            subject:'',
            message:'',
            no_subject:false
        };

        //this.send=this.send.bind(this);
    }
    handleSend = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH+'send_message.php'}`,
            headers: {'content-type': 'application/json'},
            data: this.state
        })
            .then(result => {
                this.setState({text: '', subject: ''});
                console.log(result.data);

        })
            .catch(error=>this.setState({message:error.message}));

    };
    /*send(){
       // this.setState({text:''});
        console.log('Send');
        this.setState({text:'',subject:''});

    }*/
    render(){
        return(
            <div className="section">
                <div className="section-header">
                    <h3 className="section-header-title">Send A Message</h3>
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
                    <div className={'submitPage'}>
                        <Button label="Send" disabled={this.state.subject==='' || this.state.text==='' || this.state.text===null } className="submitPageBtn p-button-success" icon="pi pi-chevron-right" iconPos="right" onClick={e => this.handleSend(e)}/>
                    </div>
                </div>

            </div>

        );
    }
}
