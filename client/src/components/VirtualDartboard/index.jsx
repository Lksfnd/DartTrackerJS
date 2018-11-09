import React, { Component } from 'react';
import { BoardContainer } from './style.js';

export class VirtualDartboard extends Component {

    constructor(...props) {
        super(...props);
        this.state = {
            x1Colors: ['#E7E4C7','#000000']
        };
    }

    componentDidMount() {

    }

    render() {
        // 1X Calculations
        const x1Fields = [];
        let color = true;
        const rotationRatio = 360 / 20;
        
        for( let x = 0; x < 20; x++ ) {
            const currentColor = (color) ? this.state.x1Colors[0] : this.state.x1Colors[1];
            const currentRatio = rotationRatio * x;

            const p0 = {
                x: 0,
                y: 0
            };

            x1Fields.push(
                <path 
                    fill={ currentColor }
                    d={ 
                        "M" + p0.x + "," + p0.y + " " +
                        "" +
                        "" +
                        "" +
                        ""
                    } />
            );
            color = !color;
        }

        return <BoardContainer height={ this.props.size } width={ this.props.size } viewBox={ "-500 -500 1000 1000" } preserveAspectRatio="none">
            <circle cx={ 0 } cy={ 0 } r={ 500 } fill="black" />
            { /* Circle radius markers inside */ }
            <g>
                <circle cx={ 0 } cy={ 0 } r={ 500 } stroke="white" strokeWidth={ 3 } />
                <circle cx={ 0 } cy={ 0 } r={ 450 } stroke="white" strokeWidth={ 3 } />
                <circle cx={ 0 } cy={ 0 } r={ 250 } stroke="white" strokeWidth={ 3 } />
                <circle cx={ 0 } cy={ 0 } r={ 200 } stroke="white" strokeWidth={ 3 } />
            </g>
            { /* double & single Bullseye */ }
            <g>
                <circle cx={ 0 } cy={ 0 } r={ 55 } fill="green" stroke="white" strokeWidth={ 3 } />
                <circle cx={ 0 } cy={ 0 } r={ 25 } fill="red" stroke="white" strokeWidth={ 3 } />
            </g>
            { /* Normal 1x-fields */ }
            <g>
                { x1Fields }
            </g>
        </BoardContainer>;
    }

}