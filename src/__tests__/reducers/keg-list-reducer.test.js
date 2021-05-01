import kegListReducer from '../../reducers/keg-list-reducer';

describe('keg list reducer', () => {

  let action;
  const currentState ={
    1 : {
      names: 'henry whine herds',
      brand: 'ipa',
      price: 350,
      alcoholContent: 12.0,
      pintsLeft: 124,
      id: 1 },
    2: {
      name: 'rubinator',
      brand: 'edgefiled',
      priceByKeg: 225,
      alcoholContent: 9.0,
      pintsLeft: 100,
      id: 2,
    }
  };

describe('kegListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});

test('Should successfully add new keg data to masterKegList', () => {
    const { names, brand, price, alcoholContent, pintsLeft, id } = kegData;
    action = {
      type: 'ADD_KEG',
      names: names,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      issue: issue,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsLeft: pintsLeft,
        issue: issue,
        id: id
      }
    });
  });

});