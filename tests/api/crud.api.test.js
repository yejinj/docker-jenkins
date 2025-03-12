const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const SampleModel = require('../../models/sample');

describe('API /samples CRUD 테스트', () => {
  let createdId;

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb');
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    await SampleModel.deleteMany({});
    const doc = await SampleModel.create({ name: 'sample1', value: 100 });
    createdId = doc._id;
  });

  test('POST /samples - 문서 생성', async () => {
    const res = await request(app)
      .post('/samples')
      .send({ name: 'new sample', value: 200 });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('new sample');
    expect(res.body.value).toBe(200);
    expect(res.body._id).toBeDefined();
  });

  test('GET /samples - 전체 문서 조회', async () => {
    const res = await request(app).get('/samples');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  // 3. 수정
  test('PUT /samples/:id - 문서 수정', async () => {
    const res = await request(app)
      .put(`/samples/${createdId}`)
      .send({ name: 'updated', value: 300 });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('updated');
    expect(res.body.value).toBe(300);
  });

  // 4. 삭제
  test('DELETE /samples/:id - 문서 삭제', async () => {
    const res = await request(app).delete(`/samples/${createdId}`);
    expect(res.statusCode).toBe(204);

    const deleted = await SampleModel.findById(createdId);
    expect(deleted).toBeNull();
  });

  test('PUT /samples/invalid-id - 잘못된 ID 예외 반환', async () => {
    const res = await request(app)
      .put('/samples/invalid-id')
      .send({ name: 'fail', value: 0 });

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });
});
