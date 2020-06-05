import React, { Component, Fragment } from "react";
import {
    StructuredListWrapper,
    StructuredListHead,
    StructuredListRow,
    StructuredListCell,
    StructuredListBody
} from "carbon-components-react";

class MyFlights extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <h2 className="dashboard-page__subheading">
                    My Flights
                </h2>
                <StructuredListWrapper ariaLabel="Structured list">
                    <StructuredListHead>
                        <StructuredListRow
                            head
                            tabIndex={0}
                        >
                            <StructuredListCell head>
                                Date
                            </StructuredListCell>
                            <StructuredListCell head>
                                Departure
                            </StructuredListCell>
                            <StructuredListCell head>
                                Destination
                            </StructuredListCell>
                            <StructuredListCell head>
                                Details
                            </StructuredListCell>
                        </StructuredListRow>
                    </StructuredListHead>
                    <StructuredListBody>
                        <StructuredListRow tabIndex={0}>
                            <StructuredListCell>
                                6/16/2020 2:20PM PST
                            </StructuredListCell>
                            <StructuredListCell>
                                Santa Ana, CA (SNA)
                            </StructuredListCell>
                            <StructuredListCell>
                                La Guardia, NY (LGA)
                            </StructuredListCell>
                            <StructuredListCell>
                                <ul className="dashboard-page__ul">
                                    <li>Flight time: 6h 22m</li>
                                    <li>Cessna Citation X+</li>
                                </ul>
                            </StructuredListCell>
                        </StructuredListRow>
                        <StructuredListRow tabIndex={0}>
                            <StructuredListCell>
                                6/22/2020 9:00AM EST
                            </StructuredListCell>
                            <StructuredListCell>
                                La Guardia, NY (LGA)
                            </StructuredListCell>
                            <StructuredListCell>
                                Santa Ana, CA (SNA)
                            </StructuredListCell>
                            <StructuredListCell>
                                <ul className="dashboard-page__ul">
                                    <li>Flight time: 6h 55m</li>
                                    <li>Cessna Citation X+</li>
                                </ul>
                            </StructuredListCell>
                        </StructuredListRow>
                    </StructuredListBody>
                </StructuredListWrapper>
            </Fragment>
        )
    }
}

export default MyFlights;
