import 'mocha';
import { expect } from 'chai';
import decodeHtml from '@/string/decodeHtml';

describe('decodeHtml', () => {
  it('returns encode html', () => {
    expect(decodeHtml('&lt;div&gt;Fx&lt;&#x2F;div&gt;')).to.equal(
      '<div>Fx</div>'
    );
  });

  it('returns original string', () => {
    expect(decodeHtml('<div>Fx</div>')).to.equal('<div>Fx</div>');
  });
});
