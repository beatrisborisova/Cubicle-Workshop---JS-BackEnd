const uniqid = require('uniqid');

class Cube {

    static cubes = [
        {
            id: 'adaaaddefeacfea',
            name: 'New Cube',
            description: 'This is my first cube.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1966px-Rubik%27s_cube.svg.png',
            difficulty: '1'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static getAll() {
        return Cube.cubes.slice();
    }

    static add(cube) {
        Cube.cubes.push(cube);
    }
}

module.exports = Cube;