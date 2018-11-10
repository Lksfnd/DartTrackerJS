import React, { Component } from 'react';
import { BoardContainer } from './style.js';
import { Angle } from '../../helpers/Angle';

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
        // 1X Calculations ( inner donut parts )
        const x1Fields = [];
        let color = true;
        const rotationRatio = 360 / 20;
        
        for( let x = 0; x < 20; x++ ) {
            const currentColor = (color) ? this.state.x1Colors[0] : this.state.x1Colors[1];
            const currentRatio = rotationRatio/2 + rotationRatio * x;

            const rowRadius = 200;
            const p1 = Angle.endPoint( 0, 0, currentRatio, rowRadius);
            const p12 = Angle.endPoint( 0, 0, currentRatio - rotationRatio/2, rowRadius);
            const p2 = Angle.endPoint( 0, 0, currentRatio - rotationRatio, rowRadius);

            x1Fields.push(
                <path 
                    fill={ currentColor }
                    stroke="white"
                    strokeWidth={ 3 }
                    d={ 
                        "M0,0 " +
                        "L" + p1.x + "," + p1.y +
                        "Q" + p12.x + "," + p12.y + " " + p2.x + "," + p2.y +
                        "Z" +
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
            { /* Normal 1x-fields */ }
            <g>
                { x1Fields }
            </g>
            { /* double & single Bullseye */ }
            <g>
                <circle cx={ 0 } cy={ 0 } r={ 55 } fill="green" stroke="white" strokeWidth={ 3 } />
                <circle cx={ 0 } cy={ 0 } r={ 25 } fill="red" stroke="white" strokeWidth={ 3 } />
            </g>
        </BoardContainer>;
    }

}