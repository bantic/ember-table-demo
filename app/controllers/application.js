import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { compare } from '@ember/utils';

function createSymbol() {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let length = 2 + Math.floor(4 * Math.random()); // [2,5]
  let symbol = '';
  while (symbol.length < length) {
    symbol += chars[Math.floor(chars.length * Math.random())];
  }
  return symbol;
}

function createPrice() {
  return 0.5 + 500 * Math.random(); // [0.5,500.5);
}

function formatPrice(price) {
  return price.toFixed(2);
}

function createRow() {
  return {
    symbol: createSymbol(),
    price: formatPrice(createPrice())
  };
}

function createRows(num) {
  return Array(num)
    .fill()
    .map(createRow);
}

export default Controller.extend({
  columns: computed(function() {
    return [
      { name: 'Ticker Symbol', valuePath: 'symbol', textAlign: 'center' },
      { name: 'Price (USD)', valuePath: 'price', textAlign: 'right' }
    ];
  }),

  rows: computed(function() {
    return createRows(this.numRows);
  }),

  numRows: 25,

  compareFunction: computed(function() {
    return (a, b) => {
      let isNumeric = !Number.isNaN(parseFloat(a));

      if (isNumeric) {
        a = parseFloat(a);
        b = parseFloat(b);
      }

      return compare(a, b);
    };
  }),

  actions: {
    addRows() {
      this.rows.pushObjects(createRows(parseInt(this.numRows)));
    }
  }
});
