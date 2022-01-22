const Cube = require('../models/Cube');
const cubeDb = [
    {
        name: 'New Cube',
        description: 'This is my first cube.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1966px-Rubik%27s_cube.svg.png',
        difficulty: '1'
      }
]

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);
    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;