import './style.css';
import { getScores, postScores } from './scores.js';

document.getElementById('submit-btn').addEventListener('click', (e) => {
  e.preventDefault();
  postScores();
  document.getElementById('user-name').value = '';
  document.getElementById('user-score').value = '';
});

document.getElementById('refresh').addEventListener('click', () => window.location.reload());

window.addEventListener('load', () => getScores());