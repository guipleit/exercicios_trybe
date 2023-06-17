const conn = require('./connection');

const insert = async (person) => conn.execute(
 'INSERT INTO people (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)',
    [person.firstName, person.lastName, person.email, person.phone],
);

const getAll = async () => conn.execute(
    'SELECT * FROM people',
);

const findById = async (id) => conn.execute(
    'SELECT * FROM people WHERE id = ?',
    [id],
);

const update = async (id, person) => conn.execute(
    'UPDATE people SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?',
    [person.firstName, person.lastName, person.email, person.phone, id],
);

const deleteById = async (id) => conn.execute(
    'DELETE FROM people WHERE id = ?',
    [id],
);


module.exports = {  
    insert,
    getAll,
    findById,
    update,
    deleteById,
};
