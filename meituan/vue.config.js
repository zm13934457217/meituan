var express = require('express');
var app = express();

var goods = require("./data/goods.json")
var ratings = require("./data/ratings.json")
var seller = require("./data/seller.json")

module.exports = {
	outputDir: "dist2",
	devServer: {
		open: true,
		host: "localhost",
		port: "8080",
		before: function(app) {
			app.get("/api/goods", (req, res) => {
					res.json(goods);
				}),
				app.get("/api/ratings", (req, res) => {
					res.json(ratings);
				}), app.get("/api/seller", (req, res) => {
					res.json(seller);
				})
		}
	}

}