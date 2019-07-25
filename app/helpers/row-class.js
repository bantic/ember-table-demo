import { helper } from '@ember/component/helper';

export function rowClass([rowValue] /*, hash*/) {
  let pctChange = parseFloat(rowValue.pctChange);
  if (pctChange > 0) {
    return 'bg-green-200';
  } else if (pctChange < 0) {
    return 'bg-red-200';
  }
}

export default helper(rowClass);
