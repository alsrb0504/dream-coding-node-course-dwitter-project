import express from "express";
import "express-async-errors";
// import {
//   createTweet,
//   deleteTweet,
//   editTweet,
//   getTweetsAll,
//   getTweetsId,
//   getTweetsUsername,
// } from "../controller/tweets.js";

const router = express.Router();

import * as tweetRepository from "../data/tweets.js";

// let tweets = [
//   {
//     id: "1",
//     text: "드림코딩에서 강의 들으면 너무 좋으다",
//     createdAt: "2021-05-09T04:20:57.000Z",
//     name: "Bob",
//     username: "bob",
//     url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
//   },
//   {
//     id: "2",
//     text: "테스트 트윗 2",
//     createdAt: "2021-05-09T04:20:57.000Z",
//     name: "alice",
//     username: "alice",
//     url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
//   },
//   {
//     id: "3",
//     text: "테스트 트윗 3",
//     createdAt: "2021-05-09T04:20:57.000Z",
//     name: "Bob",
//     username: "bob",
//     url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
//   },
// ];

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getByUsername(username)
    : tweetRepository.getAll();

  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweetRepository.getById(id);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found!` });
  }
});

router.post("/", (req, res, next) => {
  const { text, username, name } = req.body;
  const tweet = tweetRepository.create(text, username, name);
  res.status(201).json(tweet);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.update(id, text);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found!` });
  }
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204);
});

export default router;
