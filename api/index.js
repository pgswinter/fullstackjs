import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';
import data from '../src/loadingData'

// let mdb;
// MongoClient.connect(config.mongodbUri, (err,db)=>{
// 	assert.equal(null, err);
// 	mdb = db;
// })

const router = express.Router();

// router.get('/contests',(req,res)=>{
// 	res.send({contests:data.contests});
// })

const contests = data.contests.reduce((obj, contest) => {
	obj[contest.id] = contest;
	return obj;
},{});

router.get('/contests', (req,res) => {
	res.send({
		contests: contests
	});
});

router.get('/contests/:contestId', (req,res) => {
	let contest = contests[req.params.contestId]
	contest.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eaque quisquam iste eligendi cumque excepturi doloremque ducimus illo, fugiat placeat!'
	res.send(contest);
});

export default router;