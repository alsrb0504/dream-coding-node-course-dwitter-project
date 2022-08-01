import tweets from "../data/tweets.js";

export const getTweetsAll = () => {
  return tweets;
};

export const getTweetsUsername = (username) => {
  const data = tweets.filter((t) => t.username === username);
  return data;
};

export const getTweetsId = (id) => {
  const tweet = tweets.find((t) => t.id === id);

  return tweet;
};

export const createTweet = (text, username, name) => {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
    url: "",
  };

  return tweet;
};

export const editTweet = (id, text) => {
  const tweet = tweets.find((t) => t.id === id);

  if (tweet) {
    tweet.text = text;
  }

  return tweet;
};

export const deleteTweet = (id) => {
  const deleteIdx = tweets.findIndex((t) => t.id === id);

  if (deleteIdx !== -1) {
    tweets.splice(deleteIdx, 1);
    return 204;
  } else {
    return 404;
  }
};
