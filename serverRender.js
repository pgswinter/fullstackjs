// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/spa/components/App'

import config from './config'
import axios from 'axios'

// const serverRender = () =>
// 	axios.get(`${config.serverUrl}/api/contests`)
// 		.then(resp=>{
// 			console.log(resp.data);
// 			return ReactDOMServer.renderToString(
// 				<App initialContest={resp.data.contests}/>
// 			)
// 		})

// **** NOT routing for a contest YET
// const serverRender = () =>
// 	axios.get(`${config.serverUrl}/api/contests`)
// 		.then(resp=>{
// 			// **** before refactor
// 			// return{
// 			// 	initialmarkup: ReactDOMServer.renderToString(
// 			// 		<App initialContests={resp.data.contests}/>
// 			// 	),
// 			// 	initialData: resp.data
// 			// }
// 			// **** before refactor
// 			// **** after refactor
// 			return{
// 				initialMarkup: ReactDOMServer.renderToString(
// 					<App initialData={resp.data}/>
// 				),
// 				initialData: resp.data
// 			}
// 			// **** after refactor
			
// 		})
// **** NOT routing for a contest YET

// **** Server side routing for a contest

const getApiUrl = contestId => {
	if(contestId){
		return `${config.serverUrl}/api/contests/${contestId}`;
	}
	return `${config.serverUrl}/api/contests`;
}

const getInitialData = (contestId, apiData) => {
	if(contestId){
		return {
			currentContestId: apiData._id,
			contests:{
				[apiData._id]: apiData
			}
		}
	}
	return {
		contests: apiData.contests
	}
}

const serverRender = (contestId) =>
	axios.get(getApiUrl(contestId))
		.then(resp => {
			// **** after refactor
			const initialData = getInitialData(contestId, resp.data);
			return{
				initialMarkup: ReactDOMServer.renderToString(
					<App initialData={initialData}/>
				),
				initialData
			};
			// **** after refactor
		});
// **** Server side routing for a contest

export default serverRender;