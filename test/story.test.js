let request = require('supertest')

describe('Testing story', () => {
    request = request('http://localhost:3111')

    describe('Get story', () => {
        test('Get all stories', async () => {
            const response = await request
                .get('/story/get_stories')
                .expect('Content-Type', /json/)
                .expect(200)
            expect(response.body.status).toEqual('ok');
        })
        test('Get top stories', async () => {
            const response = await request
                .get('/story/get_top_stories')
                .expect('Content-Type', /json/)
                .expect(200)
            expect(response.body.status).toEqual('ok')
        })
    })

    describe('Update story upvotes', () => {
        test('Correct story id', async () => {
            const response = await request
                .patch('/story/up_vote?id=6513d46a6410fa3b6c14794d&email=demo@gmail.com&operation=inc')
                .expect('Content-Type', /json/)
                .expect(200)
            expect(response.body.status).toEqual('ok');
        })
        test('Inorrect story id', async () => {
            await request
                .patch('/story/up_vote?id=6513d46a6410fa3b6c14999d&email=demo@gmail.com&operation=inc')
                .expect(204)
        })
    })


    describe('Save story', () => {
        test('Save story', async () => {
            const response = await request
                .post('/story/save_story')
                .send({
                    prompt: 'a prompt',
                    story: 'a story',
                    theme: 'theme'
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
            expect(response.body).toEqual({ status: 'ok', msg: 'story has been added successfully' });
        })
    })
});

