const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const SampleModel = require('../../models/sample');

describe('API /samples/transactional 트랜잭션 처리 테스트', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb');
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    await SampleModel.deleteMany({});
  });

  test('POST /samples/transactional - 트랜잭션 성공 시 모두 반영', async () => {
    const res = await request(app)
      .post('/samples/transactional')
      .send({
        data: {
          name: 'item1',
          value: 123
        },
        withLog: true
      });

    expect(res.statusCode).toBe(201);

    const docs = await SampleModel.find({ name: 'item1' });
    expect(docs.length).toBe(1);
  });

  test('POST /samples/transactional - 오류 발생 시 롤백', async () => {
    const res = await request(app)
      .post('/samples/transactional')
      .send({
        data: {
          name: 'fail-case',
          value: 999
        },
        triggerError: true
      });

    expect(res.statusCode).toBe(500);

    const docs = await SampleModel.find({ name: 'fail-case' });
    expect(docs.length).toBe(0);
  });
});
