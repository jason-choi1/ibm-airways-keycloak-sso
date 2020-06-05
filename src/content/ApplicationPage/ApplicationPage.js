import React, { Component, Fragment } from "react";
import {
    Button,
    Dropdown,
    Form,
    FormGroup,
    TextInput,
    TextArea
} from "carbon-components-react";
import { countryList } from "./Country";

class ApplicationPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <div className="bx--row application-page__banner">
                    <div className="bx--col-lg-16">
                        <h1 className="application-page__heading">
                            Join the Exclusive Club
                        </h1>
                        <h2 className="application-page__subheading">
                            The air is different up here.
                        </h2>
                    </div>
                </div>
                <br/>
                <div className="bx--col-md-4 application-page__form">
                    <div className="application-page__p">
                        Please fill out the information below. You will be notified
                        once an interview date is set. Membership decisions are made
                        within 7 business days from the date of the interview.
                    </div>
                    <Form>
                        <FormGroup
                            legendText=""
                        >
                            <div className="application-page__text-input">
                                <TextInput required
                                    helperText=""
                                    id="firstName"
                                    invalidText="Invalid error message."
                                    labelText="First Name *"
                                    placeholder=""
                                />
                            </div>
                            <div className="application-page__text-input">
                                <TextInput required
                                    helperText=""
                                    id="lastName"
                                    invalidText="Invalid error message."
                                    labelText="Last Name *"
                                    placeholder=""
                                />
                            </div>
                        </FormGroup>
                        <FormGroup
                            legendText=""
                        >
                            <div className="application-page__text-input">
                                <TextInput required
                                    type="email"
                                    helperText=""
                                    id="email"
                                    invalidText="Invalid error message."
                                    labelText="Email Address *"
                                    placeholder="johndoe@email.com"
                                />
                            </div>
                            <div className="application-page__text-input">
                                <TextInput required
                                    type="text"
                                    helperText=""
                                    id="phone"
                                    invalidText="Invalid error message."
                                    labelText="Daytime Phone Number *"
                                    placeholder="123-456-7890"
                                />
                            </div>
                        </FormGroup>
                        <FormGroup
                            legendText=""
                        >
                            <Dropdown
                                id="country"
                                items={countryList}
                                itemToString={item => (item ? item.text : '')}
                                titleText="Country of Residence"
                                label="Choose an option"
                            />
                        </FormGroup>
                        <FormGroup
                            legendText=""
                        >
                            <TextArea required
                                cols={50}
                                helperText="We want to know more about you and your interests"
                                id="introduction"
                                invalidText="Invalid error message."
                                labelText="Introduce Yourself *"
                                placeholder="e.g. 'What do you do for a living?', 
                                             'Where will you be flying?'"
                                rows={10}
                            />
                        </FormGroup>
                        <Button
                            kind="primary"
                            tabIndex={0}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

export default ApplicationPage;
