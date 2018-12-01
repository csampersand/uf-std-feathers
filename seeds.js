// import { capitalize, random, shuffle, times } from 'lodash';
// import faker from 'faker';
// import app from './src/server/app';

const times = require('lodash/times');
const capitalize = require('lodash/capitalize');
const random = require('lodash/random');
const shuffle = require('lodash/shuffle');
const faker = require('faker');
// import { capitalize, random, shuffle, times } from 'lodash';

const app = require("./src/server/app");


async function seed(name, data) {
    console.log(name);
    const service = app.service(name);
    return service.create(data);
  }

  async function main() {
    //Clean database
    const userService = app.service('users');
    const postService = app.service('posts');
    await userService.Model.remove({});
    await postService.Model.remove({});

    var createdUsers = [];
    const users = [
      {
        email:"carlos@gmail.com",
        fname:"Carlos",
        lname: "Avogadro",
        gradYear:"2020",
        bio:capitalize(faker.lorem.words(random(3, 7))),
        public:"false",
        isAdmin:"false",
        password:"secret"
    },
    {
        email:"james@gmail.com",
        fname:"James",
        lname: "Hollnad",
        gradYear:"2022",
        bio:capitalize(faker.lorem.words(random(3, 7))),
        public:"false",
        isAdmin:"false",
        password:"secret"
    },
    {
        email:"jake@gmail.com",
        fname:"Jake",
        lname: "StateFarm",
        gradYear:"2018",
        bio:capitalize(faker.lorem.words(random(3, 7))),
        public:"true",
        isAdmin:"false",
        password:"secret"
    },
    {
        email:"jane@gmail.com",
        fname:"Jane",
        lname: "Doe",
        gradYear:"2021",
        bio:capitalize(faker.lorem.words(random(3, 7))),
        public:"false",
        isAdmin:"false",
        password:"secret"
    },
    {
        email:"mike@gmail.com",
        fname:"Mike",
        lname: "Arboleda",
        gradYear:"2020",
        bio:capitalize(faker.lorem.words(random(3, 7))),
        public:"false",
        isAdmin:"false",
        password:"secret"
    },
    {
        email:"admin@gmail.com",
        fname:"Travis",
        lname: "Scott",
        gradYear:"2020",
        bio:capitalize(faker.lorem.words(random(3, 7))),
        public:"true",
        isAdmin:"true",
        password:"secret"
    }
    ];

    // // Create each user
    for(var i = 0;i < users.length;i++){
        createdUsers.push(await seed('users', users[i]));
    }
    console.log("\n Users: ", createdUsers);

    for(var i = 0; i < 20;i++){
        var post = await seed('posts',
        {
            title: capitalize(faker.lorem.words(random(3, 7))),
            body: capitalize(faker.lorem.words(random(3, 7))),
            author: shuffle(createdUsers)[0]._id,
        // comments:[]
    }
    );
    console.log("\n Posts: ",post);

    }


    console.log("\nSeeds DONE");
    process.exit();
  }

  main();
