import Fx from '../src/fx';

import 'mocha';
import chai = require('chai');
const expect = chai.expect;

describe('Static methods', () => {
  it('type(o: any)', () => {
    expect(Fx.type(2019)).to.equal('number');
  });
});
