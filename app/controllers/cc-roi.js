import Controller from '@ember/controller';
import { computed } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
	NUM_WEEKS: 4,

	catValue: 60,
	systemCost: 6950,
	graphCatsPer: 50,
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
	}),

	graphData: computed('catValue', 'systemCost', 'graphCatsPer', function() {
		let NUM_WEEKS = this.get('NUM_WEEKS');
		let catValue = this.get('catValue');
		let systemCost = this.get('systemCost');
		let catsPer = this.get('graphCatsPer');

		let date = moment();
		let labels = [];
		let dataPoints = [];

		for(let week=0; week<=NUM_WEEKS; week++) {
			labels.push(date.format('MM-DD'));
			date.add(7, 'days');
			dataPoints.push(catValue * catsPer * week - systemCost);
		}

		let graphData = {
			labels: labels,
			datasets: [{
				data: dataPoints,
				backgroundColor: 'rgba(244, 101, 35, .5)',
	            borderColor: 'rgba(244, 101, 35, 1)',
	            pointBackgroundColor: 'rgba(244, 101, 35, 1)'
			}]
		}
		return graphData;
	}),

	graphOptions: {
		legend: {
			display: false
		},
		scales : {
			yAxes : [{
				ticks : {
					beginAtZero : true
				}
			}]
		}
	}
});
