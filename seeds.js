const times = require('lodash/times');
const capitalize = require('lodash/capitalize');
const random = require('lodash/random');
const shuffle = require('lodash/shuffle');
const faker = require('faker');

const app = require("./src/server/app");


async function seed(name, data) {
    const service = app.service(name);
    return service.create(data);
  }

  async function main() {
    //Clean database
    const userService = app.service('users');
    const postService = app.service('posts');
    const majorsService = app.service('majors');
    await userService.Model.remove({});
    await postService.Model.remove({});
    await majorsService.Model.remove({});

    var createdUsers = [];
    var createdMajors = [];
    var users =[];

    const majors = [
        {
            majorName: "Aerospace"
        },
        {
            majorName: "Biological"
        },
        {
            majorName: "Biomedical"
        },
        {
            majorName: "Chemical"
        },
        {
            majorName: "Civil"
        },
        {
            majorName:"Computer"
        },
        {
            majorName: "Electrical"
        },
        {
            majorName: "Enviromental"
        },
        {
            majorName: "Industrial and Systems"
        },
        {
            majorName: "Mechanical"
        },
        {
            majorName: "Nuclear"
        },
        {
            majorName: "Sales"
        }
    ];

    const majorCall = async () => {
        for(var i = 0;i < majors.length;i++){
            createdMajors.push(await seed('majors', majors[i]));
        }
        return createdMajors;
    }

    majorCall().then(function(createdMajors){
        console.log("Majors: ", createdMajors);

        users = [
            {
              email:"carlos@gmail.com",
              fname:"Carlos",
              lname: "Avogadro",
              gradYear:"2020",
              bio:capitalize(faker.lorem.words(random(3, 7))),
              public:"false",
              isAdmin:"false",
              password:"secret",
              major : shuffle(createdMajors)[0]._id
          },
          {
              email:"james@gmail.com",
              fname:"James",
              lname: "Hollnad",
              gradYear:"2022",
              bio:capitalize(faker.lorem.words(random(3, 7))),
              public:"false",
              isAdmin:"false",
              password:"secret",
              major : shuffle(createdMajors)[0]._id
          },
          {
              email:"jake@gmail.com",
              fname:"Jake",
              lname: "StateFarm",
              gradYear:"2018",
              bio:capitalize(faker.lorem.words(random(3, 7))),
              public:"true",
              isAdmin:"false",
              password:"secret",
              major : shuffle(createdMajors)[0]._id
          },
          {
              email:"jane@gmail.com",
              fname:"Jane",
              lname: "Doe",
              gradYear:"2021",
              bio:capitalize(faker.lorem.words(random(3, 7))),
              public:"false",
              isAdmin:"false",
              password:"secret",
              major : shuffle(createdMajors)[0]._id
          },
          {
              email:"mike@gmail.com",
              fname:"Mike",
              lname: "Arboleda",
              gradYear:"2020",
              bio:capitalize(faker.lorem.words(random(3, 7))),
              public:"false",
              isAdmin:"false",
              password:"secret",
              major : shuffle(createdMajors)[0]._id
          },
          {
              email:"admin@gmail.com",
              fname:"Travis",
              lname: "Scott",
              gradYear:"2020",
              bio:capitalize(faker.lorem.words(random(3, 7))),
              public:"true",
              isAdmin:"true",
              password:"secret",
              major : shuffle(createdMajors)[0]._id
          }
          ];

          return users;
    })
    .then(async function(users){

            for(var i = 0;i < users.length;i++){
                createdUsers.push(await seed('users', users[i]));
            }
            return createdUsers;

    })
    .then(async function(createdUsers){

        console.log("\n Users: ", createdUsers);

        // Making 20 posts and assigning them random users as creators
        for(var i = 0; i < 20;i++){
            // Create a random amount of comments for each post

            var post = await seed('posts',
            {
                title: capitalize(faker.lorem.words(random(3, 7))),
                body: capitalize(faker.lorem.words(random(50, 200))),
                author: shuffle(createdUsers)[0]._id,
                comments:Array.from(Array(random(5)), () => ({
                    text: capitalize(faker.lorem.words(random(3, 7))),
                    postedBy: shuffle(createdUsers)[0]._id
                })),
                flag:shuffle([true,false])[0]
            }
            );

            console.log("\n Posts: ",post);
        }

        console.log("\nSeeds DONE");
        process.exit();

    });
  }

  main();
