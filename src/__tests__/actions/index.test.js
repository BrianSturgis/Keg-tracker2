import * as actions from '../../actions/Index';
import * as c from '../../actions/ActionTypes';

describe('tap room actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({names: 'henry whine herds', brand: 'ipa',price: 350, alcoholContent: 12.0, pintsLeft: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
      names: 'henry whine herds',
      brand: 'ipa',
      price: 350,
      alcoholContent: 12.0,
      pintsLeft: 124,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });
});