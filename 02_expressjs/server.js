import express from 'express';

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.json());

// In-memory array to store car data
let cars = [
  { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 22000 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price: 30000 },
];

router.get('/', (req, res) => {
  res.json(cars);
});

router.post('/', (req, res) => {
  res.send('Create a new car.');
}); 

router.put('/:id', (req, res) => {
  res.send(`Update car with ID ${req.params.id}.`);
}); 

router.delete('/:id', (req, res) => {
  res.send(`Delete car with ID ${req.params.id}.`);
}); 

router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  let car = cars.find(car => car.id === id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).send(`Car with ID ${id} not found.`);
  }
}); 

app.use('/api/v1/cars', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});