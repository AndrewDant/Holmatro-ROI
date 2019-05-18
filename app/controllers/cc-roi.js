import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	NUM_WEEKS: 4,

	catValue: 60,
	systemCost: 6950,
	rowList: computed('catValue', 'systemCost', function() {
		let NUM_WEEKS = this.get('NUM_WEEKS');
		let catValue = this.get('catValue');
		let systemCost = this.get('systemCost');
		
		let rowList = [];
		for(let catsPer=10; catsPer <= 100; catsPer+=10) {
			let row = [];
			for(let week=0; week<=NUM_WEEKS; week++) {
				if (week == 0)
					row.push(catsPer);
				else
					row.push(catValue * catsPer * week - systemCost);
			}
			rowList.push(row);
		}
		return rowList;
	})
});
