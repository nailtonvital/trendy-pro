import React from 'react'

const ResultItem = ({props}) => {
	return(
        <tr>
		<th scope="row">1</th>
		<td >{props.query}</td>
		<td>{props.traffic}</td>
        </tr>
	)
}

export default ResultItem