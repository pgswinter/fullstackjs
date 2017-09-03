import config, {nodeEnv} from './config'
import apiRouter from './api'

import express from 'express'
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

server.set('view engine', 'ejs');

import serverRender from './serverRender';

// server.get('/', (req,res) => {
//   serverRender()
//     .then(content => {
//       res.render('index',{
//         content
//       });
//     })
//     .catch(console.error);
// })

// **** NOT routing for a contest YET
// server.get('/', (req,res) => {
//   serverRender()
//     .then(({initialMarkup, initialData}) => {
//       res.render('index',{
//         initialMarkup,
//         initialData
//       });
//     })
//     .catch(console.error);
// })
// **** NOT routing for a contest YET

// **** Server side routing for a contest 
server.get(['/','/contest/:contestId'], (req,res) => { // add array to routing link, easy wtf
	// Get variable on URL: req.params.contestId, like as $_GET('<variable>') of PHP
	// console.log(req.params.contestId);
	serverRender(req.params.contestId)
	    .then(({initialMarkup, initialData}) => {
	      res.render('index',{
	        initialMarkup,
	        initialData
	      });
	    })
	    .catch(error => {
	    	console.log(error);
	    	res.status(404).send('Bad request');
	    });
})
// **** Server side routing for a contest 

// server.get(['/', '/contest/:contestId'], (req, res) => {
//   serverRender(req.params.contestId)
//     .then(({ initialMarkup, initialData }) => {
//       res.render('index', {
//         initialMarkup,
//         initialData
//       });
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(404).send('Bad Request');
//     });
// });

server.use('/api',apiRouter);
server.use(express.static("views")) // Set current patch inside the folder

server.listen(config.port, config.host, ()=>{
	console.log('express listening on port',config.port)
})