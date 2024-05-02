//JSON =javascript object notation
//exchange data between different programming languages
//JSON file {key:value} OR [value, value, value]OR [{},{},{}]

//JSON.stringify() = converts a JS object to a JSON string
//JSON.parse() = converts a JSON string to a JS object

const jsonnames = `[
  "Spongebob",
  "Patrick",
  "Squidward",
  "Sandy",
  "Morty",
  "Barry",
  "Rick",
  "Krusty",
  "Jerry",
  "Beth"
]`;

const jsonperson = `{
    "name": "Spongebob",
    "age": 25,
    "isEmployed": true,
    "bobbys": ["jellyfishing", "Karate", "cooking"]
  }
  `;

const jsonpeople = `[
    {
      "name": "Patrick",
      "age": 24,
      "isEmployed": false,
      "hobbies": ["reading", "swimming", "hiking"]
    },
    {
      "name": "Spongebob",
      "age": 25,
      "isEmployed": true,
      "bobbys": ["jellyfishing", "Karate", "cooking"]
    },
    {
      "name": "Squidward",
      "age": 26,
      "isEmployed": false,
      "hobbies": ["painting", "reading", "hiking"]
    },
    {
      "name": "Sandy",
      "age": 27,
      "isEmployed": true,
      "hobbies": ["reading", "swimming", "hiking"]
    }
  ]
  `;
//---------stringigy - json string
// const jsonString = JSON.stringify(people);
// console.log(jsonString); // ["Spongebob","Patrick","Squidward","Sandy","Morty","Barry","Rick","Krusty","Jerry","Beth"]
//----------parse - json string to js object
// const parseData = JSON.parse(jsonpeople);
// console.log(parseData);
//---------fetch
fetch("people.json") //返回一个promise对象
  .then((response) => response.json()) //json方法返回一个promise对象
  .then((values) => {
    values.forEach((value) => {
      console.log(value.name);
    });
  })
  .catch((error) => console.log(error));
