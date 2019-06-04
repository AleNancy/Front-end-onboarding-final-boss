import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

import '../DonutsCreate.css';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        Meteor.call('donut.create', data, (err) => {
            if(!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        return (
            <main className="DonutsCreate">
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit}>

                    <div className="CreateDonut">

                        <div className="CreateDonut-container">

                            <h2>Add a donut</h2>

                            <div className="advice"><p>don't take to long</p></div>

                            <div className="select"><p>Select a donut!</p></div>

                            <img src="../first-donut.png" alt="First-donut"/>
                            <img src="../second-donut.png" alt="Second-donut"/>
                            <img src="../third-donut.png" alt="Third-donut"/>

                            <div className="question"><p>Can you eat this?</p></div>

                            <AutoField name="isComestible" value="Yes" />
                            <ErrorField name="isComestible"/>

                            <AutoField name="isComestible" value="No"/>
                            <ErrorField name="isComestible"/>
                            
                            <AutoField name="name" placeholder="Name"/>
                            <ErrorField name="name"/>

                            <AutoField name="price" placeholder="Price"/>
                            <ErrorField name="price"/>

                            

                            <a href="" onClick={() => FlowRouter.go('donuts.create')}>

                                <button type="submit">
                                    Create
                                </button>
                            
                            </a>

                        </div>

                    </div>

                </AutoForm>

            </main>
        )
    }
}

