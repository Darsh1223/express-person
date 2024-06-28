const express = require('express');
const cors = require('cors');
const personController = require("./controllers/personController");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

app.get("/people", personController.getPeople);
app.get("/person/:id",personController.getPeopleId);
app.get("/people/age/above-30", personController.getPeopleAbove30);
app.get("/people/age/:age", personController.getpeopleByAge);

app.post('/people', (req, res) => {
  if(!req.body){
    res.status(400).json({ error: 'Body not specified' });
    return;
  }

  if(!req.body.name){
    res.status(400).json({ error: 'No name specified' });
    return;
  }

  if(!req.body.surname){
    res.status(400).json({ error: 'No surname specified' });
    return;
  }
  let nexPersonId = 6;

  const newPerson = {
    ...req.body,
    id: nexPersonId++
  };



  people.push(newPerson);

  res.send(newPerson);
});