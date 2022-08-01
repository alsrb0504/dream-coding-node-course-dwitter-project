let tweets = [
  {
    id: "1",
    text: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
  },
  {
    id: "2",
    text: "테스트 트윗 2",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "alice",
    username: "alice",
    url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
  },
  {
    id: "3",
    text: "테스트 트윗 3",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg",
  },
];

export const getAll = () => {
  return tweets;
};

export const getByUsername = (username) => {
  return tweets.filter((t) => t.username === username);
};

export const getById = (id) => {
  return tweets.find((t) => t.id === id);
};

export const create = (text, username, name) => {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
    url: "",
  };
  tweets = [tweet, ...tweets];
  return tweet;
};

export const update = (id, text) => {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
};

export const remove = (id) => {
  tweets = tweets.filter((t) => t.id !== id);
};
