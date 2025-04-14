// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Load comments from file
function loadComments() {
  if (fs.existsSync('comments.json')) {
    const data = fs.readFileSync('comments.json');
    return JSON.parse(data);
  }
  return [];
}

// Save comments to file
function saveComments(comments) {
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}