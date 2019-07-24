import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  columns: computed(function() {
    return [
      { name: 'Ticker Symbol', valuePath: 'symbol', textAlign: 'center' },
      { name: 'Price (USD)', valuePath: 'price', textAlign: 'right' }
    ];
  }),

  rows: computed(function() {
    return [
      { symbol: 'AAPL', price: 105.5 },
      { symbol: 'MSFT', price: 85.5 },
      { symbol: 'SNAP', price: 15.5 }
    ];
  })
});
