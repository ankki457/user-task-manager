const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'mobile'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                email: { type: 'string', minLength: 1, maxLength: 255 },
                mobile: { type: 'string', minLength: 1, maxLength: 15 }
            }
        };
    }
}

module.exports = User;
