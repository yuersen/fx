import Fx from '../src/fx';
import 'mocha';
import { expect } from 'chai';

describe('Fx.EventEmit', () => {
  describe('new Fx.EventEmit().on(eventName: string, callback: () => void, oneof: boolean = false)', () => {
    // Add event in listeners sequence
    it(`listeners has one callback`, () => {
      const event = new Fx.EventEmit();
      event
        .on('EvtA', () => {
          alert('EvtA');
        })
        .on('EvtB', () => {
          alert('EvtB');
        });

      expect(event.include('EvtA')).to.equal(true);
      expect(event.include('EvtB')).to.equal(true);
    });

    it(`oneof = true`, () => {
      const event = new Fx.EventEmit();
      event.on(
        'EvtC',
        () => {
          // TODO
        },
        true
      );

      event.emit('EvtC');
      expect(event.listeners('EvtC').length).to.equal(0);
    });

    // The callback is not function
    it('The callback is not function, throw syntax', () => {
      const event = new Fx.EventEmit();
      const callback: any = 2019;
      try {
        event.on('EvtA', callback);
      } catch(e) {
        // todo
      }
    });
  });

  describe('new Fx.EventEmit().once(eventName: string, callback: () => void)', () => {
    // Add event in listeners sequence
    it(`listeners has one callback`, () => {
      const event = new Fx.EventEmit();
      event.once('EvtA', () => {
        // alert('EvtA');
      });
      event.emit('EvtA');

      expect(event.listeners('EvtA').length).to.equal(0);
    });
  });

  describe('new Fx.EventEmit().include(eventName: string)', () => {
    const event = new Fx.EventEmit();
    event.once('EvtA', () => {
      alert('EvtA');
    });

    it(`The value in listeners`, () => {
      expect(event.include('EvtA')).to.equal(true);
    });

    it(`The value are not in listeners`, () => {
      expect(event.include('EvtB')).to.equal(false);
    });
  });

  describe('new Fx.EventEmit().emit(eventName: string, ...data: any[])', () => {
    const event = new Fx.EventEmit();
    let val: number;
    event.on('EvtA', year => {
      val = year;
    });

    it(`The value in listeners`, () => {
      event.emit('EvtA', 2019);
      expect(val).to.equal(2019);
    });

    event.on('EvtB', (a, b) => {
      val = a + b;
    });
    it(`The value are not in listeners`, () => {
      event.emit('EvtB', 100, 200);
      expect(val).to.equal(300);
    });
  });

  describe('new Fx.EventEmit().listeners(eventName: string)', () => {
    const event = new Fx.EventEmit();

    event
      .on('EvtA', (year: number) => {
        alert(year);
      })
      .on('EvtA', (month: number) => {
        alert(month);
      });

    it(`Two events in listeners`, () => {
      expect(event.listeners('EvtA').length).to.equal(2);
    });

    event.on('EvtB', (minute: number) => {
      alert(minute);
    });
    it(`One events in listeners`, () => {
      expect(event.listeners('EvtB').length).to.equal(1);
    });
  });

  describe('new Fx.EventEmit().off(eventName: string, callback?: (...data: any[]) => void)', () => {
    const event = new Fx.EventEmit();
    const process = (val: string) => {
      alert(val);
    };

    event.on('EvtA', process).on('EvtA', data => {
      alert(data);
    });

    it(`Remove one event`, () => {
      event.off('EvtA', process);
      expect(event.listeners('EvtA').length).to.equal(1);
    });

    event.on('EvtB', process).on('EvtB', data => {
      alert(data);
    });
    it(`Remove all event`, () => {
      event.off('EvtB');
      expect(event.listeners('EvtB').length).to.equal(0);
    });

    // remove callback is not in events list
    event.on('EvtC', process).on('EvtC', data => {
      alert(data);
    });
    it(`Remove all event`, () => {
      event.off('EvtC', () => {
        // todo
      });
      expect(event.listeners('EvtC').length).to.equal(2);
    });
  });
});
