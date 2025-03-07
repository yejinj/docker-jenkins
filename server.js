const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.json({ 
        message: 'Server is running',
        version: '1.0.4'
    });
});

app.post('/api/test', async (req, res) => {
  try {
    const testCollection = mongoose.connection.collection('test');
    const result = await testCollection.insertOne({ 
      message: "test data",
      timestamp: new Date() 
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/test', async (req, res) => {
  try {
    const testCollection = mongoose.connection.collection('test');
    const data = await testCollection.find({}).toArray();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok',
        message: 'Health check passed'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port.`);
});