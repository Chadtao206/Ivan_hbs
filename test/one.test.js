const sequelize = require("../config/connection");
const { User } = require("../models");
require("dotenv").config();

console.log(User)

test('Can connect to mysql server using sequelize in connection.js module', async () => {
    return sequelize.sync().then(connection => {
        expect(connection.config.database).toBe(process.env.DB_NAME);
        expect(connection.config.password).toBe(process.env.DB_PASSWORD);
        expect(connection.config.username).toBe(process.env.DB_USER);
    });
});

// describe('User Model Test', () => {
//     it('Should have a name when created ', () => {
//         expect(!!User.name).toBe(!null);
//     });
//     it('Should have a email property when created ', () => {
//         expect(!!User.email).toBe(!null);
//     });
//     it('Should have a password property when created ', () => {
//         expect(!!User.password).toBe(!null);
//     });
//     it('Should not contain random properties like age', () => {
//         expect(!User.age).toBe(true)
//     })
// })
