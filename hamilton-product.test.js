import {assert, expect, should} from 'chai'; // eslint-disable-line no-unused-vars

import {HamiltonProduct, ComplexConjugate, QuaternionRotation} from './hamilton-product';

describe('Hamilton Test', function () {
    describe('Basic', function () {
        let q1 = [1, 1, 0, 0];
        let q1c = [1, -1, 0, 0];
        let VectorX1 = [1, 0, 0];
        const Vector3Forward = [0, 0, 1];
        it('product', function () {
            expect(ComplexConjugate(q1)).to.deep.equal(q1c);
            expect(HamiltonProduct(q1, q1c)).to.deep.equal(HamiltonProduct(q1c, q1));

            console.log(QuaternionRotation([0, 90, 0], VectorX1));
        });
    });
});
