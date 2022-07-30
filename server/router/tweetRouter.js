import express from "express";

const router = express.Router();

const tweets = [
  {
    id: 1,
    text: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
  },
  {
    id: 2,
    text: "테스트 트윗 2",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "alice",
    username: "alice",
    url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
  },
  {
    id: 3,
    text: "테스트 트윗 3",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
  },
];

router.get("/", (req, res, next) => {
  const query = req.query;

  if (query.username) {
    const filtered = tweets.filter(
      (tweet) => tweet.username === query.username
    );
    res.status(200).send(filtered);
  } else {
    res.status(200).send(tweets);
  }

  // next();
});

router.get("/:id", (req, res, next) => {
  const param = req.params;
  const id = Number(param["id"]);

  const filtered = tweets.filter((tweet) => tweet.id === id);
  res.status(200).send(filtered);

  // next();
});

router.post("/", (req, res, next) => {
  const body = req.body;
  const { text, username, name } = body;

  const newTweet = {
    id: tweets.length + 1,
    text,
    createdAt: new Date(),
    name,
    username,
    url: "",
  };

  tweets.push(newTweet);
  res.status(201).send(tweets);
});

router.put("/:id", (req, res, next) => {
  const body = req.body;
  const { text } = body;

  const param = req.params;
  const id = Number(param["id"]);

  const idx = tweets.findIndex((tweet) => tweet.id === id);

  tweets[idx].text = text;
  res.status(202).send(tweets[idx]);
});

router.delete("/:id", (req, res, next) => {
  const param = req.params;
  const id = Number(param["id"]);

  const idx = tweets.findIndex((tweet) => tweet.id === id);

  tweets.splice(idx, 1);

  res.status(200).send(tweets);
});

export default router;
