/**
 * Created by fisher on 1/7/17.
 */

'use strict';

import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Strings  from '../resources/Strings';

const colorA = '#82ca9d';
const colorO = '#aa0000';

let getChartData = function (status, screenWidth) {
	let data = [];
	for (let i = 0; i < 6; i++) {
		const a = status.available[i], o = status.occupied[i], t = a + o;
		data.push({
			name: screenWidth > 768 ? `${i}F (${a}/${t})` : `${i}F`,
			available: a,
			occupied: o
		});
	}
	return data;
};

class LibraryStatus extends React.Component {

	render() {
		let {status, doRefreshData} = this.props;
		let width = window.innerWidth > 1200 ? 1170 : window.innerWidth;
		if (!status) {
			doRefreshData();
			return <div>Loading...</div>;
		}
		let availableAmount = status.available.reduce((a, b) => {
			return a + b
		}, 0);
		let occupiedAmount = status.occupied.reduce((a, b) => {
			return a + b
		}, 0);
		let totalAmount = availableAmount + occupiedAmount;
		let availablePercentage = (availableAmount / totalAmount * 100).toFixed(2) + '%';
		let occupiedPercentage = (occupiedAmount / totalAmount * 100).toFixed(2) + '%';
		let data = getChartData(status, width);
		let date = new Date();
		date.setHours(0);
		date = new Date(date.setMinutes(status.minutes) - date.getTimezoneOffset() * 60 * 1000).toISOString();
		date = `${date.substr(11, 5)} (${date.substr(0, 10)})`;
		return (
			<div>
				<BarChart width={width} height={width / 2} data={data}
				          style={{margin: '10px -18px 10px -18px'}}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<CartesianGrid strokeDasharray="3 3"/>
					<Tooltip/>
					<Legend />
					<Bar dataKey="available" name={Strings.availableLabel} stackId="a" fill={colorA} label/>
					<Bar dataKey="occupied" name={Strings.occupiedLabel} stackId="a" fill={colorO} label/>
				</BarChart>
				<div style={{margin: '10px'}}>
					<p>
						<span>{Strings.availableSeatsAmountLabel}</span>
						<span
							style={{color: colorA}}><b>{availableAmount} ({availablePercentage})</b></span>
					</p>
					<p>
						<span>{Strings.occupiedSeatsAmountLabel}</span>
						<span style={{color: colorO}}><b>{occupiedAmount} ({occupiedPercentage})</b></span>
					</p>
					<p><span>{Strings.todayStudentsAmountLabel}</span><b>{status.today}</b></p>
					<p>
						<span>{Strings.dataFetchedTimeLabel}</span>
						<date>{date}</date>
					</p>
				</div>
			</div>
		);
	}
}


export default LibraryStatus;

