import 'mocha';
import { expect } from 'chai';
import encodeHtml from '@/string/encodeHtml';

describe('encodeHtml', () => {
  it('returns right string', () => {
    expect(encodeHtml('<div>Fx</div>')).to.equal(
      '&lt;div&gt;Fx&lt;&#x2F;div&gt;'
    );
  });

  it('returns original string', () => {
    expect(encodeHtml('Fx')).to.equal('Fx');
  });
});
