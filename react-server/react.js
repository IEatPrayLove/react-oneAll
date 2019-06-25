var express = require("express");

var router = express.Router();

var {
	conn
} = require("./utils/db");
var {
	setError,
	aesEncrypt,
	aesDecrypt,
	keys
} = require("./utils");
var {
	getConn
} = require("./utils/mongoose");
var {
	ObjectID
} = require("mongodb");
var {
	series
} = require("async");

router.get("/index", (req, res) => {
	res.send("这是 react项目的接口 地址 ")
})

// 查询评论
router.get("/getComments", (req, res) => {
	conn((err, db) => {
		setError(err, res, db);
		db.collection("comments").find({}, {}).sort({ _id: 1 }).toArray((err, result) => {
			setError(err, res, db);
			res.json({
				code: 200,
				msg: "评论查询成功",
				result
			})
			db.close
		})
	})
})

// 删除评论
router.get("/delComment", (req, res) => {
	var _id = req.query._id || ""
	console.log(_id);
	conn((err, db) => {
		setError(err, res, db);
		db.collection("comments").remove({ _id: ObjectID(_id) }, (err, result) => {
			setError(err, res, db);
			res.json({
				code: 200,
				msg: "评论删除成功",
				result
			})
			db.close();
		})
	})
})

// 添加评论
router.post("/addComment", (req, res) => {
	var body = req.body;
	conn((err, db) => {
		setError(err, res, db);
		var comments = db.collection("comments");
		series([
			(callback) => {
				comments.insert(body, (err, result) => {
					callback(err, result);
				})
			},
			(callback) => {
				comments.find({}, {}).sort({ _id: 1 }).toArray((err, result) => {
					callback(err, result);
				})
			}
		], (err, result) => {
			setError(err, res, db)
			res.json({
				code: 200,
				msg: "评论添加成功",
				result: result[1]
			})
			db.close();
		})
	})
})

// 查询电影
router.get("/movie", (req, res) => {
	var limit = req.query.limit * 1 || 0;
	console.log(req.session);
	conn((err, db) => {
		setError(err, res, db);
		db.collection("move").find({}, { title: 1, year: 1, id: 1, genres: 1, 'rating.average': 1, 'images.large': 1 }).sort({ _id: -1 }).limit(limit).toArray((err, result) => {
			setError(err, res, db);
			res.json({
				code: 200,
				msg: "获取movie-数据成功",
				result
			})
			db.close();
		})
	})
})

// 商品分类
router.get("/getGoodTypes", (req, res) => {
	conn((err, db) => {
		setError(err, res, db);
		db.collection("list").distinct("type", (err, result) => {
			setError(err, res, db);
			res.json({
				code: 200,
				msg: "查询 商品分类 成功",
				result
			})
			db.close();
		})
	})
})

// 根据商品分类查询商品

router.get("/getGoodList", (req, res) => {
	conn((err, db) => {
		setError(err, res, db);
		db.collection("list").find({}, {}).toArray((err, result) => {
			setError(err, res, db);
			res.json({
				code: 200,
				msg: "查询 商品 成功",
				result
			})
		})
	})
})

// 点击换一换

router.get("/getNewWriter", (req, res) => {
	var limit = req.query.limit * 1 || "";
	var skip = req.query.skip * 1;
	conn((err, db) => {
		setError(err, res, db);
		db.collection("writer").find({}, {}).sort({ user_id: 1 }).limit(limit).skip(skip).toArray((err, result) => {
			setError(err, res, db);
			res.json({
				code: 200,
				msg: "作家更新成功",
				result
			})
			db.close();
		})
	})

})

// 查询作家

router.get("/getWriter", (req, res) => {
	var limit = req.query.limit * 1 || ""
	console.log(limit)
	conn((err, db) => {
		setError(err, res, db);
		db.collection("writer").find({}, {}).sort({ user_id: 1 }).limit(limit).toArray((err, result) => {
			setError(err, res, db);
			res.json({
				code: 200,
				msg: "作家查询成功",
				result
			})
			db.close();
		})
	})
})


module.exports = router;