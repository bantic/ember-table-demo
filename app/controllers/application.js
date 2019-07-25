import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { compare } from '@ember/utils';
import { set } from '@ember/object';

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
    price: formatPrice(createPrice()),
    change: 0
  };
}

function createRows(num) {
  return Array(num)
    .fill()
    .map(createRow);
}

function adjustPrice(price) {
  let delta = (Math.random() * 30) / 100; // [0.0,0.3)
  let dir = Math.random() < 0.5 ? -1 : 1;
  return price * (1 + dir * delta);
}

function formatChange(change) {
  return change.toFixed(2);
}

export default Controller.extend({
  columns: computed(function() {
    return [
      { name: 'Ticker Symbol', valuePath: 'symbol', textAlign: 'center' },
      { name: 'Price (USD)', valuePath: 'price', textAlign: 'right' },
      { name: 'Change (USD)', valuePath: 'change', textAlign: 'right' }
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
    },

    adjustPrices() {
      this.rows.forEach(row => {
        if (Math.random() < 0.4) {
          let currentPrice = parseFloat(row.price);
          let newPrice = adjustPrice(currentPrice);
          set(row, 'price', formatPrice(newPrice));
          set(row, 'change', formatChange(newPrice - currentPrice));
        }
      });
    }
  }
});
