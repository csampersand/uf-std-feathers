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
    console.log(data.length + ' ' + name);
    const service = app.service(name);
    await service.Model.remove({});
    return service.create(data);
  }

  async function main() {
    const users = await seed('users', [
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
    }
    ]);

    for(var i = 0; i < 20;i++){
        var post = await seed('posts',
        {
            title: capitalize(faker.lorem.words(random(3, 7))),
            body: capitalize(faker.lorem.words(random(3, 7))),
            author: shuffle(users)[0]._id,
        // comments:[]
    }
    );
    console.log("\n Posts: ",post);

    }


    console.log("\nSeeds DONE");
    process.exit();
  }

  main();
