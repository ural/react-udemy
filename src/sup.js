// "use strict";

import React, { Component } from 'react';

class Sup extends Component {
/*
    constructor(props, context) {
        super(props, context);
    }
*/

    render() {
        return (
            <div className="sup">
                <p className="Suup-intro">
                   WHATTTTSSSS Upppppppp {this.props.name}
                </p>

                <p> {this.props.children} </p>

            </div>
        );
    }
}

export default Sup;
