import { helper } from '@ember/component/helper';
import colorRamp from '../utils/color-ramp';

export function rowClass([rowValue] /*, hash*/) {
  let pctChange = parseFloat(rowValue.pctChange);
  return colorRamp(pctChange);
}

export default helper(rowClass);
