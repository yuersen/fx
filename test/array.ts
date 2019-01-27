import Fx from '../src/fx';
import 'mocha';
import { expect } from 'chai';

describe('Operate Array method', () => {
  // every
  describe('Fx(arr: any[]).every(callback, thisArg): boolean', () => {
    const arr = [2018, 2019, 2020];
    // The number of parameters is expected
    it(`The number of parameters is expected`, () => {
      expect(Fx(arr).every((item: number, idx: number, srcArr: number[]) => {
        return (item + idx + srcArr.length) > 2018;
      })).to.equal(true);
    });

    // All item >= 2018
    it(`All item >= 2018`, () => {
      expect(Fx(arr).every((item: number) => {
        return item >= 2018;
      })).to.equal(true);
    });

    // All item >= 2019
    it(`Not all item >= 2019`, () => {
      expect(Fx(arr).every((item: number) => {
        return item >= 2019;
      })).to.equal(false);
    });

    // The callback is not a function
    it(`The callback is not a function`, () => {
      try {
        expect(Fx(arr).every('not a function')).to.equal(false);
      } catch(e) {
        // TOOD
      }
    });
  });

  // some
  describe('Fx(arr: any[]).some(callback, thisArg): boolean', () => {
    const arr = [2018, 2019, 2020];
    // The number of parameters is expected
    it(`The number of parameters is expected`, () => {
      expect(Fx(arr).some((item: number, idx: number, srcArr: number[]) => {
        return (item + idx + srcArr.length) > 2018;
      })).to.equal(true);
    });

    // All item >= 2019
    it(`Not all item >= 2019`, () => {
      expect(Fx(arr).some((item: number) => {
        return item >= 2019;
      })).to.equal(true);
    });

    // All item >= 2022
    it(`All item >= 2022`, () => {
      expect(Fx(arr).some((item: number) => {
        return item >= 2022;
      })).to.equal(false);
    });
  });

  // filter
  describe('Fx(arr: any[]).filter(callback, thisArg): any[]', () => {
    const arr = [2018, 2019, 2020];
    // The first parameter is item.
    it(`The first parameter is item.`, () => {
      expect(Fx(arr).filter((item: number) => {
        return item > 2019;
      }).length).to.equal(1);
    });

    // The second parameter is index.
    it(`The second parameter is index.`, () => {
      expect(Fx(arr).filter((item: number, idx: number) => {
        return idx > 1;
      }).length).to.equal(1);
    });

    // The second parameter is index.
    it(`The third parameter is array.`, () => {
      expect(Fx(arr).filter((item: number, idx: number, src: any[]) => {
        return src.length === arr.length;
      }).length).to.equal(3);
    });

    // New array is [2019, 2020].
    it(`New array is [2019, 2020].`, () => {
      expect(Fx(arr).filter((item: number) => {
        return item >= 2019;
      }).join()).to.equal('2019,2020');
    });
  });

  // forEach
  describe('Fx(arr: any[]).forEach(callback, thisArg): void', () => {
    const arr = [2018, 2019, 2020];
    // The first parameter is item.
    it(`The first parameter is item.`, () => {
      let sum = 0;
      Fx(arr).forEach((item: number) => {
        sum += item;
      });
      expect(sum).to.equal(6057);
    });

    // The second parameter is index.
    it(`The second parameter is index.`, () => {
      let sum = 0;
      Fx(arr).forEach((item: number, index: number) => {
        sum += index;
      });
      expect(sum).to.equal(3);
    });

    // The second parameter is index.
    it(`The third parameter is array.`, () => {
      let sum = 0;
      Fx(arr).forEach((item: number, index: number, src: number[]) => {
        if (arr.length === src.length) {
          sum += index;
        }
      });
      expect(sum).to.equal(3);
    });

    // The sum of all item is 6057
    it(`The sum of all item is 6057.`, () => {
      let sum = 0;
      Fx(arr).forEach((item: number) => {
        sum += item;
      });
      expect(sum).to.equal(6057);
    });

    // Return Truth to break loop
    it(`Return Truth to break loop`, () => {
      let sum = 0;
      Fx(arr).forEach((item: number) => {
        sum += item;
        return item > 2019;
      });
      expect(sum).to.equal(6057);
    });
  });

  // map
  describe('Fx(arr: any[]).map(callback, thisArg): any[]', () => {
    const arr = [2018, 2019, 2020];
    // The first parameter is item.
    it(`The first parameter is item.`, () => {
      expect(Fx(arr).map((item: number) => {
        return item + 1;
      }).join()).to.equal('2019,2020,2021');
    });

    // The second parameter is index.
    it(`The second parameter is index.`, () => {
      expect(Fx(arr).map((item: number, index: number) => {
        return item + index;
      }).join()).to.equal('2018,2020,2022');
    });

    // The second parameter is index.
    it(`The third parameter is array.`, () => {
      expect(Fx(arr).map((item: number, index: number, src: number[]) => {
        return item + src.length;
      }).join()).to.equal('2021,2022,2023');
    });

    // New array is [2020, 2021, 2022]
    it(`New array is [2020, 2021, 2022]`, () => {
      expect(Fx(arr).map((item: number, index: number, src: number[]) => {
        return item + 2;
      }).join()).to.equal('2020,2021,2022');
    });
  });

  // find
  describe('Fx(arr: any[]).find(callback, thisArg): any', () => {
    const arr = [2018, 2019, 2020];

    // The first parameter is item.
    it(`The first parameter is item.`, () => {
      expect(Fx(arr).find((item: number) => {
        return item > 2018;
      })).to.equal(2019);
    });

    // The second parameter is index.
    it(`The second parameter is index.`, () => {
      expect(Fx(arr).find((item: number, index: number) => {
        return item - index >= 2018;
      })).to.equal(2018);
    });

    // The Third parameter is index.
    it(`The third parameter is array.`, () => {
      expect(Fx(arr).find((item: number, index: number, src: number[]) => {
        return item + src.length > 2021;
      })).to.equal(2019);
    });

    // Find nothing
    it(`Find nothing`, () => {
      expect(Fx(arr).find((item: number, index: number, src: number[]) => {
        return item > 2028;
      })).to.equal(void 0);
    });
  });

  // indexOf
  describe('Fx(arr: any[]).indexOf(search: any, start?: number): number', () => {
    const arr = [2018, 2019, 2020, 2018];

    // The Third parameter is index.
    it(`2018 in the ${arr}`, () => {
      expect(Fx(arr).indexOf(2018)).to.equal(0);
    });

    // The start position > array.length
    it(`Return -1`, () => {
      expect(Fx(arr).indexOf(2018, 10)).to.equal(-1);
    });

    // array.length = 0
    it(`Return -1`, () => {
      expect(Fx([]).indexOf(2018, 2)).to.equal(-1);
    });

    // start < 0
    it(`Return -1`, () => {
      expect(Fx(arr).indexOf(2018, -2)).to.equal(3);
    });

    // Not search anything
    it(`Return -1`, () => {
      expect(Fx(arr).indexOf(2025)).to.equal(-1);
    });
  });

  // lastIndexOf
  describe('Fx(arr: any[]).lastIndexOf(search: any, start?: number): number', () => {
    const arr = [2018, 2019, 2020, 2018];

    // The Third parameter is index.
    it(`2018 in the ${arr}`, () => {
      expect(Fx(arr).lastIndexOf(2018)).to.equal(3);
    });

    // The start position > array.length
    it(`Return -1`, () => {
      expect(Fx(arr).lastIndexOf(2018, 10)).to.equal(-1);
    });

    // array.length = 0
    it(`Return -1`, () => {
      expect(Fx([]).lastIndexOf(2018, 2)).to.equal(-1);
    });

    // start < 0
    it(`Return -1`, () => {
      expect(Fx(arr).lastIndexOf(2018, -2)).to.equal(0);
    });

    // Not search anything
    it(`Return -1`, () => {
      expect(Fx(arr).lastIndexOf(2025)).to.equal(-1);
    });
  });

  // unique
  describe('Fx(arr: any[]).unique(): any[]', () => {
    const arr = [2018, '2019', 2018, 2019, 2020];

    it(`Unique the array`, () => {
      expect(Fx(arr).unique().join()).to.equal('2018,2019,2019,2020');
    });
  });

  // shuffle
  describe('Fx(arr: any[]).shuffle(): any[]', () => {
    const arr = [2018, 2019, 2020, 2021, 2022];

    it(`Shuffle`, () => {
      expect(Fx(arr).shuffle().join()).not.to.equal(Fx(arr).shuffle().join());
    });
  });

  // includes
  describe('Fx(arr: any[]).includes(search: any, start?: number): boolean', () => {
    const arr = [2018, 2019, 2020, 2018];

    it(`Should be return true`, () => {
      expect(Fx(arr).includes(2020)).to.equal(true);
    });

    it(`Should be return false`, () => {
      expect(Fx(arr).includes(2028)).to.equal(false);
    });

    // strat > 0
    it(`Should be return false`, () => {
      expect(Fx(arr).includes(2018, 2)).to.equal(true);
    });

    // strat < 0
    it(`Should be return false`, () => {
      expect(Fx(arr).includes(2018, -2)).to.equal(true);
    });

    // array.length = 0
    it(`Should be return false`, () => {
      expect(Fx([]).includes(2028)).to.equal(false);
    });
  });

  // clone
  describe('Fx(arr: any[]).clone(): any[]', () => {
    const arr = [2020, 2021, 2022];

    it(`Should be return true`, () => {
      expect(Fx(arr).clone().join()).to.equal('2020,2021,2022');
    });
  });
});