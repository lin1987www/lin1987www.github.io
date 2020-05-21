/*
    q = q1·q2
            q2[0] q2[1] q2[2] q2[3]
    q1[0]     +     +     +     +
    q1[1]     +     -     +     -
    q1[2]     +     -     -     +
    q1[3]     +     +     -     -

minus index  q1 and q2 coordinate = 11, 13, 22, 21, 33, 32

            q2[0] q2[1] q2[2] q2[3]
    q1[0]    q[0]  q[1]  q[2]  q[3]
    q1[1]    q[1]  q[0]  q[3]  q[2]
    q1[2]    q[2]  q[3]  q[0]  q[1]
    q1[3]    q[3]  q[2]  q[1]  q[0]


The equation for spatial rotations can be summarized for θ radians about a unit axis (X,Y,Z)
as the Quaternion ( C, X S, Y S, Z S) where C = cos(θ/2) and S = sin(θ/2)

https://math.stackexchange.com/questions/40164/how-do-you-rotate-a-vector-by-a-unit-quaternion
https://math.stackexchange.com/questions/1867471/quaternion-rotation

where θ is the angle of the rotation, and (X,Y,Z) defines the axis as an unit vector, x^2+y^2+z^2=1.

To invert the rotation described by an unit quaternion (also called a versor), you simply negate the scalar (first) component, or alternatively the other three components. (Negating all four components does not change the rotation the unit quaternion represents.)

If you use this to reverse the rotation applied, and your code is correct, you'll notice that this does indeed return to the original orientation.


* */

const minusQ1Q2Index = ['11', '13', '22', '21', '33', '32'];

function HamiltonProduct () {
    // quaternion: [realNumber, i, j , k,]
    const quaternions = Array.prototype.slice.call(arguments).map(function (quaternion) {
        return Array.isArray(quaternion) ? quaternion : [quaternion];
    });
    const quaternion = quaternions.reduce(function (accumulator, currentValue) {
        const quaternion = [];
        for (let index1 = 0; index1 < accumulator.length; index1++) {
            const number1 = accumulator[index1];
            for (let index2 = 0; index2 < currentValue.length; index2++) {
                const number2 = currentValue[index2];
                const index = index1 ^ index2;
                let multiplier = (minusQ1Q2Index.includes(`${index1}${index2}`)) ? -1 : 1;
                quaternion[index] = (quaternion[index] || 0) + multiplier * number1 * number2;
                // quaternion[index] = (quaternion[index] || '') + ` ${(multiplier === 1) ? '' : '-'}${'' + ((number1 === 1) ? '' : number1) + number2}`;
            }
        }
        return quaternion;
    }, [1]);
    return quaternion;
}

function ComplexConjugate (quaternion) {
    quaternion = Array.isArray(quaternion) ? quaternion : [quaternion];
    quaternion = quaternion.map(function (number, index) {
        return (index === 0) ?
            (number * 1.0) :
            (number === 0) ? number : (number * -1.0)
            ;
    });
    return quaternion;
}

function mathDecimalPlace (mathFunc, number, valueOfDecimalPlace) {
    // https://stackoverflow.com/questions/41586838/rounding-of-negative-numbers-in-javascript
    const m = 10 ** valueOfDecimalPlace;
    let result = (mathFunc(Math.abs(number * m)) / m) * ((number >= 0) ? 1 : -1);
    // Convert -0 to 0
    result = (result === 0) ? 0 : result;
    return result;
}

function QuaternionRotation (euler, vector, valueOfDecimalPlace = 7) {
    let qVector = [0, ...vector];
    euler.map(function (axisRotationDegrees, index) {
        const axisRotationRadian = axisRotationDegrees * Math.PI / 180;
        const halfAxisRotationRadian = axisRotationRadian / 2;
        const q = [Math.cos(halfAxisRotationRadian), 0, 0, 0];
        q[index + 1] = Math.sin(halfAxisRotationRadian);
        const qConjugate = ComplexConjugate(q);
        qVector = HamiltonProduct(HamiltonProduct(q, qVector), qConjugate);
    });
    const [, ...rotatedVector] = qVector.map((number) => mathDecimalPlace(Math.round, number, valueOfDecimalPlace));
    return rotatedVector;
}

export {
    ComplexConjugate,
    HamiltonProduct,
    QuaternionRotation
};
