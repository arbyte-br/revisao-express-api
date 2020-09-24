async function getUsers() {
    try {
        return [
            {
                name: 'João',
                age: 34
            },
            {
                name: 'Maria',
                age: 52
            },
            {
                name: 'Pedro Pé na Cova',
                age: 110
            }
        ]
    } catch (err) {
        return err;
    }
}

module.exports = {
    getUsers
}