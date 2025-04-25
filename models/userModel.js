const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/users.json');

exports.getAll = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

exports.create = (user) => {
    const users = exports.getAll();
    users.push(users);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};