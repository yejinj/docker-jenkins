const mongoose = require('mongoose');

const uri = 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/myDatabase?replicaSet=rs0';

test('MongoDB connection', async () => {
  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });
  expect(mongoose.connection.readyState).toBe(1);
  await mongoose.disconnect();
}, 15000);