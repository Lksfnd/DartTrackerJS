export const Angle = {

    endPoint( x, y, angle, length) {
        let offsetX = length * Math.cos(this.sinToRad(angle)); //AK = H * cos(x)
        let offsetY = length * Math.sin(this.sinToRad(angle)); //GK = H * sin(x)
        return {
          x: Math.round(x+offsetX),
          y: Math.round(y+offsetY)
        };
    },

    sinToRad( angle ) {
        let factor = angle / 180;
        let effectiveAngle = factor * Math.PI;
        return effectiveAngle;
    },
    
    radToSin( angle ) {
        let factor = angle / Math.PI;
        let effectiveAngle = factor * 180;
        return effectiveAngle;
    }
};