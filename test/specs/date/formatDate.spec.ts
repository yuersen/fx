import 'mocha';
import { expect } from 'chai';
import formatDate from '@/date/formatDate';

describe('formatDate', () => {
  const current = new Date('2020/10/06 10:10:10');

  it('returns yyyy-MM-dd', () => {
    expect(formatDate(current, 'yyyy-MM-dd')).to.equal('2020-10-06');
  });

  it('returns yyyy-M-d', () => {
    expect(formatDate(current, 'yyyy-M-d')).to.equal('2020-10-6');
  });

  it('returns yyyy-MM-dd HH', () => {
    expect(formatDate(current, 'yyyy-MM-dd HH')).to.equal('2020-10-06 10');
  });

  it('returns yyyy-MM-dd HH:mm', () => {
    expect(formatDate(current, 'yyyy-MM-dd HH:mm')).to.equal(
      '2020-10-06 10:10'
    );
  });

  it('returns yyyy-MM-dd HH:mm:ss', () => {
    expect(formatDate(current, 'yyyy-MM-dd HH:mm:ss')).to.equal(
      '2020-10-06 10:10:10'
    );
  });

  it('returns yyyy-MM-dd hh:mm:ss', () => {
    expect(formatDate(current, 'yyyy-MM-dd hh:mm:ss')).to.equal(
      '2020-10-06 10:10:10'
    );
  });

  it('returns yyyy年MM月dd日 hh时mm分ss秒', () => {
    expect(formatDate(current, 'yyyy年MM月dd日 hh时mm分ss秒')).to.equal(
      '2020年10月06日 10时10分10秒'
    );
  });
});
