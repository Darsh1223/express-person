const people = [
    {id: 1, name: 'John', surname: 'Doe', age: 35},
    {id: 2, name: 'Anna', surname: 'Dopey', age: 42},
    {id: 4, name: 'Rose', surname: 'Jeni', age: 40},
    {id: 5, name: 'Siva', surname: 'Darshini', age: 20},
];

 const getPeople = (req,res) => {
    res.send(people);
    };



 const getPeopleId=(req,res)=>{
    const personId = +req.params.id;

    const person = people.find(person => person.id === personId);
  
    if(!person) {
      res.sendStatus(404);
      return;
    }
    res.send(person);
};
const getPeopleAbove30 = (req,res) => {
    const peopleAbove30 = people.filter(person => person.age > 30);
    res.send(peopleAbove30);
  };



const getpeopleByAge= (req, res) => {
    const age = +req.params.age;
  
    const peopleWithAge = people.filter(person => person.age === age);
    
    if (peopleWithAge.length === 0) {
      res.status(404).json({ error: 'No people found with the specified age' });
      return;
    }
   res.send(peopleWithAge);
  };




  module.exports = {
    getPeople,
     getPeopleId,
     getPeopleAbove30,
     getpeopleByAge
};

