import * as userRepository from "../data/auth.js";

let tweets = [
  {
    id: "1",
    text: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: "2021-05-09T04:20:57.000Z",
    userId: "1",
  },
  {
    id: "2",
    text: "테스트 트윗 2",
    createdAt: "2021-05-09T04:20:57.000Z",
    userId: "2",
  },
  {
    id: "3",
    text: "테스트 트윗 3",
    createdAt: "2021-05-09T04:20:57.000Z",
    userId: "1",
  },
];

export const getAll = async () => {
  return Promise.all(
    tweets.map(async (tweet) => {
      const { username, name, url } = await userRepository.findById(
        tweet.userId
      );
      return { ...tweet, username, name, url };
    })
  );
};

export const getByUsername = async (username) => {
  return getAll().then((tweets) =>
    tweets.filter((tweet) => tweet.username === username)
  );
};

export const getById = async (id) => {
  const found = tweets.find((tweet) => tweet.id === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
};

export const create = async (text, userId) => {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    userId,
  };
  tweets = [tweet, ...tweets];
  return getById(tweet.id);
};

export const update = async (id, text) => {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return getById(tweet.id);
};

export const remove = async (id) => {
  tweets = tweets.filter((t) => t.id !== id);
};
