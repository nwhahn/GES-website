import React, { Component } from 'react';
import {OrganizationChart} from 'primereact/organizationchart';

export class About extends Component{
    constructor(props){
        super(props);
        this.state={
            introText:'Family-owned and operated, Generation Electrical Supply & Lighting offers one-on-one personal attention and professional advice to its customers. This is something you are not able to get at the big box store or a generic online warehouse. We are also one of the few whom still do Lamp Repairs in the Syracuse Area! You see design magazines and the TV re-model/decorating shows all the time, why not make it a reality and a dream come true for you! We have the right lighting for every occasion, from your bathroom to your foyer and we even carry accent lighting and accessories to go with your selections! We work with any budget and are willing to walk you through step by step until the job is done!\n' +
                '\n' +
                'Generation Electrical Supply & Lighting is a supplier of Electrical Products and a full‐service stocking distributor with warehouse and inventory storage. We have a full line of Electrical Materials for Residential, Commercial and Industrial installations. We can assist with Electrical Equipment Packages, Lighting Packages, Custom Fixtures, Household Appliances and Substation Equipment for any size project.',
            organizationData:[{
                label:'President',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Sandra', 'avatar': 'geswide.png'},
                children:[
                    {
                        label:'Accounting',
                        type:'department'
                    },
                    {
                        label: 'Vice President',
                        type: 'person',
                        className: 'p-person',
                        expanded: true,
                        data: {name:'Sal', 'avatar': 'geswide.png'},
                        children:[
                            {
                                label:'Quoting',
                                type:'department'
                            }
                        ]
                    },

                ]
            }],
            selection:[]

        };
        this.nodeTemplate=this.nodeTemplate.bind(this);

    }
    nodeTemplate(node) {
        if (node.type === "person") {
            return (
                <div>
                    <img alt={node.data.avatar} src={'./app/assets/img/'+node.data.avatar} style={{ width: '150px' }}/>

                    <div className="node-content">
                        {node.label}-{node.data.name}

                    </div>
                </div>
            );
        }
        if (node.type === "department") {
            return node.label;
        }
    }
    render(){
        return(
            <div className={'contact p-grid p-fluid'}>
                <div className="section">
                    <div className="section-header">
                        <h3 className="section-header-title">Welcome to Generation Electrical Supply and Lighting</h3>
                        <div className="section-header-border">
                            <div className="section-header-inner-border"/>
                        </div>
                    </div>
                    <div className="section-content p-grid p-fluid">
                        <div className={"p-col-12"}>
                            <div className={"p-justify-center"}>
                                {this.state.introText.split('\n').map(function (value) {
                                    return <div className={"paragraph"}>
                                        {value}
                                    </div>
                                })}




                            </div>
                        </div>
                        <div className={"p-lg-6"}>
                            <div className={"paragraphHeader"}>Generation Electrical Supply & Lighting is MWBE Certified.</div>
                            <a className={"./#/certifications"}>Learn More...</a>
                            <div className={"certificationImages p-grid"}>
                                <div className={"certificationImage"}>
                                    <img src={"./app/assets/img/MBE.svg"}/>
                                </div>

                                <div className={"certificationImage"}>
                                    <img src={"./app/assets/img/WBE.svg"}/>
                                </div>

                            </div>
                        </div>
                        <div className={"p-lg-6"}>
                            <OrganizationChart value={this.state.organizationData} nodeTemplate={this.nodeTemplate} selection={this.state.selection} selectionMode="multiple"
                                               onSelectionChange={event => this.setState({selection: event.data})} className="company"/>
                        </div>



                    </div>
                </div>


            </div>
        );
    }

}
