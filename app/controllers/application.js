import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { compare } from '@ember/utils';
import { reads } from '@ember/object/computed';
import { task, timeout } from 'ember-concurrency';

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
    change: 0,
    pctChange: 0
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

function formatPercentChange(pctChange) {
  return `${(100 * pctChange).toFixed(0)}%`;
}

export default Controller.extend({
  columns: computed(function() {
    return [
      { name: 'Ticker Symbol', valuePath: 'symbol', textAlign: 'center' },
      { name: 'Price (USD)', valuePath: 'price', textAlign: 'right' },
      { name: 'Change (USD)', valuePath: 'change', textAlign: 'right' },
      { name: '% Change (USD)', valuePath: 'pctChange', textAlign: 'right' }
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

  animatePricesTask: task(function*() {
    while (true) {
      yield timeout(1000);
      this.send('adjustPrices');
    }
  }),

  isAnimating: reads('animatePricesTask.isRunning'),

  actions: {
    addRows() {
      this.rows.pushObjects(createRows(parseInt(this.numRows)));
    },

    adjustPrices() {
      let { rows, selection } = this;
      let newRows = rows.map(row => {
        let currentPrice = parseFloat(row.price);
        let newPrice = currentPrice;

        if (Math.random() < 0.4) {
          newPrice = adjustPrice(currentPrice);
        }

        return {
          ...row,
          price: formatPrice(newPrice),
          change: formatChange(newPrice - currentPrice),
          pctChange: formatPercentChange(
            (newPrice - currentPrice) / currentPrice
          )
        };
      });
      this.set('rows', newRows);

      let newSelection = (selection || []).map(selected => {
        return this.rows.find(row => row.symbol === selected.symbol);
      });
      this.set('selection', newSelection);
    },

    animatePrices() {
      if (this.isAnimating) {
        this.animatePricesTask.cancelAll();
      } else {
        this.animatePricesTask.perform();
      }
    }
  }
});
