import express from "express";
import "express-async-errors";

const router = express.Router();

import tweets from "../data/tweets.js";

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
    ? tweets.filter((t) => t.username === username)
    : tweets;

  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found!` });
  }
});

router.post("/", (req, res, next) => {
  const { text, username, name } = req.body;

  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
    url: "",
  };
  // tweets = [tweet, ...tweets];

  tweets.unshift(tweet);

  res.status(201).json(tweet);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id === id);

  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found!` });
  }
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  const deleteIdx = tweets.find((t) => t.id !== id);

  tweets.splice(deleteIdx, 1);

  res.sendStatus(204);
});

export default router;
