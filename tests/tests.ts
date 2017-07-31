import { assert } from 'chai';
import * as Observable from 'zen-observable';

describe('Exports', () => {
  it('constructor', () => {
    assert(Observable.of(1));
  });
});
