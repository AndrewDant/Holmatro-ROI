import { helper } from '@ember/component/helper';

export function roiCellClass([roi, ...rest]) {
	let val = parseInt(roi);
	if (val <= 0)
		return "negCell";
	else
		return "posCell";
}

export default helper(roiCellClass);
