import * as request from 'superagent';

require('dotenv').config();

const q = 'Answer to the Ultimate Question of Life, the Universe, and Everything';
const a = '42';
const url = `${process.env.APP_HOST}:${process.env.APP_HTTP_PORT}/api/storage/${q}`;

describe(url, () => {
  const client = request.agent();

  afterEach(async () => {
    await client.delete(url);
  })

  test(`should save and return value`, async () => {
    const res = await client
      .post(url)
      .send({ value: a});

      expect(res.text).toBe(a);
  });

  test(`should return saved value after save`, async () => {
    await client
      .post(url)
      .send({ value: a});

    const res = await client
      .get(url);
      
      expect(res.text).toBe(a);
  });

  test(`should return empty response if value deleted`, async () => {
    await client
      .post(url)
      .send({ value: a});

    await client
      .delete(url);

    const res = await client
      .get(url);
      
      expect(res.text).toBe('');
  });

  test(`should return empty response if value not exist`, async () => {
    const res = await client
      .get(url);
      
      expect(res.text).toBe('');
  });
});
