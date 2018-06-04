'use strict';
const Hapi = require('hapi');
const MySQL = require('mysql');
const Joi = require('joi');
const Bcrypt = require('bcrypt');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8398
});
const connection = MySQL.createConnection({
    host    : "localhost",
    user    : "root",
    password: "blink8080",
    database: "TestDB"
});
// Add the route
server.route({
    method: 'GET',
    path: '/helloworld',
    handler: function (request, reply) {
        return reply('hello world...');
    }
});
server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
        connection.query('SELECT uid, username, email FROM users',
            function (error, results, fields) {
                if (error) throw error;
                reply(results);
            });
    }
});
server.route({
    method: 'GET',
    path: '/user/{uid}',
    handler: function (request, reply) {
        const uid = request.params.uid;
        connection.query('SELECT uid, username, email FROM users WHERE uid = "' + uid + '"',
            function (error, results, fields) {
                if (error) throw error;
                reply(results);
            });
    },
    config: {
        validate: {
            params: {
                uid: Joi.number().integer()
            }
        }
    }
});
server.route({
    method: 'POST',
    path: '/messages',
    handler: function (request, reply) {
        const uid = request.payload.uid;
        connection.query('SELECT * FROM messages WHERE uid_fk = "' + uid + '"',
            function (error, results, fields) {
                if (error) throw error;

                reply(results);
            });
    },
    config: {
        validate: {
            payload: {
                uid: Joi.number().integer()
            }
        }

    }
});
server.route({
    method: 'POST',
    path: '/messagedelete',
    handler: function (request, reply) {
        const mid = request.payload.mid;
        connection.query('Delete from messages WHERE mid = "' + mid + '"',
            function (error, results, fields) {
                if (error) throw error;

                reply(results);
            });
    },
    config: {
        validate: {
            payload: {
                mid: Joi.number().integer()
            }
        }

    }
});
server.route({
    method: 'POST',
    path: '/signup',
    handler: function (request, reply) {
        const username = request.payload.username;
        const email = request.payload.email;
        const password = request.payload.password;
        //Encryption
        var salt = Bcrypt.genSaltSync();
        var encryptedPassword = Bcrypt.hashSync(password, salt);
        //Decrypt
        var orgPassword = Bcrypt.compareSync(password, encryptedPassword);

        connection.query('INSERT INTO users (username,email,password) VALUES ("' + username + '","' + email + '","' + encryptedPassword + '")',
            function (error, results, fields) {
                if (error) throw error;
                reply(results);
            });
    },
    config: {
        validate: {
            payload: {
                username: Joi.string().alphanum().min(3).max(30).required(),
                email: Joi.string().email(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/)
            }
        }
    }
});
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
connection.connect();