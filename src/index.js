import './style.css';
import addScoresToList from './addcores.js';
import scores from './scores.js';

scores.forEach((score) => addScoresToList(score));
