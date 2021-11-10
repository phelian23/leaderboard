import addScoresToList from './addcores.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QH8RZRLzI8I3QLPQbGgT/scores/';

const postScores = async () => {
  const newScore = {
    user: document.getElementById('user-name').value,
    score: document.getElementById('user-score').value,
  };

  (await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newScore),
  })).json();
};

function displaySores(scores) {
  scores.forEach((score) => addScoresToList(score));
}

const getScores = async () => {
  const request = await fetch(baseUrl);
  const scores = await request.json();
  const scoreList = scores.result;
  displaySores(scoreList);
};

export { getScores, postScores };