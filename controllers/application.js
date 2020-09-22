const express = require('express');
const Application = require('../models/application.js');
const app = express.Router();

//INDEX - Get
app.get('/', (req,res) => {
  Application.find({}, (err, allApps) => {
    res.json(allApps)
  })
})

// DELETE
app.delete('/:id', (req,res) => {
  Application.findByIdAndRemove(req.params.id, (err, deletedApp) => {
    if (err) {
      res.send(err);
    } else {
      Application.find({}, (err, allApps) => {
        res.json(allApps);
      })
    }
  })
})

// Update - Put
app.put('/:id', (req,res) => {
  Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedApp) => {
      res.json(updatedApp);
    }
  )
})

// POST - CREATE
app.post('/', (req,res) => {
  Application.create(req.body, (err, createdApp) => {
    if (err) {
      res.send(err)
    } else {
      Application.find({}, (err, allApps) => {
        res.json(allApps)
      })
    }
  })
})

module.exports = app;
