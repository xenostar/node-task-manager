const { userOneId, userOne, setupDatabase } = require('./fixtures/db');
const app = require('../src/app');
const request = require('supertest');
const User = require('../src/models/user');

beforeEach(setupDatabase);

test('Should signup a new user', async () => {
	const response = await request(app)
		.post('/users')
		.send({
			name: 'Bryan Testwood',
			email: 'bryan.testwood@gmail.com',
			password: 'SuperPass888!',
		})
		.expect(201);

	// Assert that the database was changed correctly
	const user = await User.findById(response.body.user._id);
	expect(user).not.toBeNull();

	// Assertions about the response
	// expect(response.body.user.name).toBe('Bryan Testwood');
	expect(response.body).toMatchObject({
		user: {
			name: 'Bryan Testwood',
			email: 'bryan.testwood@gmail.com',
		},
		token: user.tokens[0].token,
	});

	expect(user.password).not.toBe('SuperPass888!');
});

test('Should login existing user', async () => {
	const response = await request(app)
		.post('/users/login')
		.send({
			email: userOne.email,
			password: userOne.password,
		})
		.expect(200);

	// Check to make sure auth token is valid
	const user = await User.findById(userOneId);
	expect(response.body.token).toBe(user.tokens[1].token);
});

test('Should not login nonexistent user', async () => {
	await request(app)
		.post('/users/login')
		.send({
			email: 'nonexistentuser',
			password: 'nonexistentpassword123',
		})
		.expect(400);
});

test('Should get profile for user', async () => {
	await request(app)
		.get('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);
});

test('Should not get profile for unauthenticated user', async () => {
	await request(app).get('/users/me').send().expect(401);
});

test('Should delete account for authenticated user', async () => {
	await request(app)
		.delete('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);

	const user = await User.findById(userOneId);
	expect(user).toBeNull();
});

test('Should not delete account for unauthenticated user', async () => {
	await request(app).delete('/users/me').send().expect(401);
});

test('Should upload avatar image', async () => {
	await request(app)
		.post('/users/me/avatar')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.attach('avatar', 'tests/fixtures/profile-pic.jpg')
		.expect(200);

	const user = await User.findById(userOneId);
	expect(user.avatar).toEqual(expect.any(Buffer));
});

test('Should update valid user fields', async () => {
	const response = await request(app)
		.patch('/users/me')
		.send({
			name: 'MikeUpdated',
		})
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.expect(200);

	const user = await User.findById(userOneId);
	expect(user.name).toBe('MikeUpdated');
});

test('Should not update invalid user fields', async () => {
	const response = await request(app)
		.patch('/users/me')
		.send({
			invalidUserField: 'Test',
		})
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.expect(400);

	expect(response.body.error).toBe('Invalid updates provided!');
});
