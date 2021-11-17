const { userOneId, userOne, setupDatabase } = require('./fixtures/db');
const app = require('../src/app');
const request = require('supertest');
const Task = require('../src/models/task');

beforeEach(setupDatabase);

test('Should create task for user', async () => {
	const response = await request(app)
		.post('/tasks')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send({
			description: 'From my test',
		})
		.expect(201);

	const task = await Task.findById(response.body._id);
	expect(task).not.toBeNull();
});

// test('Should create task for user', async () => {
// 	expect(1).toBe(1);
// });
