import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './component_styles/PatientList.css'

class PatientList extends React.Component {
	render () {
		return (
			<div className="component-patient-list panel">
				<table className='table is-narrow'>

					<thead>
						<tr>
							<th>NHS Number</th>
							<th>Name</th>
							<th>Condition</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.props.patients).map((key, i) => {
							return (
								[<tr key={i}>
									<th><span id='patientnhs' >{this.props.patients[key]['NHS number']}</span></th>
									<td><Link id='patientsNameLink' to={`/patient/${key}`}>{this.props.patients[key].name}</Link></td>
									<td><span id='patientProblem' >{this.props.patients[key].condition}</span></td>
								</tr>]
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default PatientList;

PatientList.propTypes = {
	patients: PropTypes.object.isRequired
};
