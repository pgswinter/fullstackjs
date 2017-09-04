import express from 'express';
import {MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';
// import data from '../src/loadingData'

let mdb;
MongoClient.connect(config.mongodbUri, (err,db)=>{
	assert.equal(null, err);
	mdb = db;
})

const router = express.Router();

// router.get('/contests',(req,res)=>{
// 	res.send({contests:data.contests});
// })

// **** Set ID for each of object
// const contests = data.contests.reduce((obj, contest) => {
// 	obj[contest.id] = contest;
// 	return obj;
// },{});

router.get('/contests', (req,res) => {
	// **** Loading data from file JS
	// res.send({
	// 	contests: contests
	// });
	// **** Loading data from file JS

	// **** Loading data from MONGO DB
	let contests = {};
	mdb.collection('contests').find({})
		.project({
			// id: 1,// Change to use Object ID
			categoryName: 1,
			contestName: 1
		})
		.each((err,contest)=>{
			assert.equal(null, err);

			if(!contest){ // no more contests
				res.send({contests});
				return;
			}

			// contests[contest.id] = contest
			contests[contest._id] = contest // Change to use Object ID
		})
	// **** Loading data from MONGO DB
});

router.get('/names/:nameIds', (req,res) => {
	// **** Loading data from MONGO DB
	// const nameIds = req.params.nameIds.split(',').map(Number); // Change to use Object ID
	const nameIds = req.params.nameIds.split(',').map(ObjectID);
	let names = {};
	setTimeout(()=>{
		// mdb.collection('names').find({ id: {$in: nameIds}}) // Change to use Object ID
		mdb.collection('names').find({ _id: {$in: nameIds}})
			.each((err,name)=>{
				assert.equal(null, err);

				if(!name){ // no more names
					res.send({names});
					return;
				}

				// names[name.id] = name
				names[name._id] = name // Change to use Object ID
			})
	},1000)
	// **** Loading data from MONGO DB
});

router.get('/contests/:contestId', (req,res) => {
	// **** Loading data from file JS
	// let contest = contests[req.params.contestId]
	// contest.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eaque quisquam iste eligendi cumque excepturi doloremque ducimus illo, fugiat placeat!'
	// res.send(contest);
	// **** Loading data from file JS

	// **** Loading data from MONGO DB
	mdb.collection('contests')
		// .findOne({id:Number(req.params.contestId)})
		.findOne({ '_id': ObjectID(req.params.contestId)}) // Change to use Object ID
		.then(contest => res.send(contest))
		.catch(error => {
			console.log(error);
			res.status(404).send('Bad Request');
		});
	// **** Loading data from MONGO DB
});

router.post('/names', (req, res) => {
	// insert data
	const contestId = ObjectID(req.body.contestId);
	const name = req.body.newName;
	// validate ...
	mdb.collection('names').insertOne({name}).then(result =>
		mdb.collection('contests').findAndModify(
				{_id: contestId},
				[],
				{$push: {nameIds: result.insertedId}},
				{new: true}
			).then(doc =>
				res.send({
					updateContest: doc.value,
					newName: {_id: result.insertedId, name}
				})
			)
		)
		.catch(error => {
			console.log(error);
			res.status(404).send('Bad Request');
		});
})

export default router;