### Parcours.js : browse smoothly your JS obects.
Parcours.is is a tiny lib I wrote to browse your JS objects with a nicer and less verbose syntax. It's available both in **nodeJS** and **browser** environment. Also **AMD** compatible.

Let assume we have this object

````javascript
var buddies ={
    "geeks": {
        "programmers ": [
            {
                "name": "McLaughlin",
                "firstname": "Brett",
                "email": "brett@email.com"
            },
            {
                "name": "Hunter",
                "firstname": "Jason",
                "email": "jason@servlets.com"
            },
            {
                "name": "Harold",
                "firstname": "Elliot",
                "email": "elharo@macfaq.com"
            }
        ],
        "gamers": [
            {
                "name": "Play1",
                "firstname": "Brett",
                "email": "brett@email.com"
            },
            {
                "name": "Play23",
                "firstname": "Paul",
                "email": "paull@servlets.com"
            },
            {
                "name": "Play33",
                "firstname": "Pierre",
                "email": "pierre@macfaq.com"
            }
        ]
    },
    "authors": [
        {
            "name": "Asimov",
            "firstname": "Isaac",
            "genre": "Sci-fi"
        },
        {
            "name": "Williams",
            "firstname": "Tad",
            "genre": "Comedy"
        },
        {
            "name": "Peretti",
            "firstname": "Frank",
            "genre": "Thriller"
        }
    ],
    "musicians": [
        {
            "name": "Clapton",
            "firstname": "Eric",
            "instrument": "guitar"
        },
        {
            "name": "Rachmaninoff",
            "firstname": "Laurent",
            "instrument": "piano"
        }
    ]
}
````

Let's say you want to list all the buddies's name. Since of the buddies object structure, you would have to write something pretty **ugly** like this :
````javascript

for(var typeOfGeek in buddies['geeks']) {
   for(var geek in buddies['geeks'][typeOfGeek]) {
      console.log(buddies['geeks'][typeOfGeek][geek]['name']);
   }
}

for(var author in buddies['authors']) {
   console.log(buddies['authors'][author]['name']);
}

for(var musician in buddies['musicians']) {
   console.log(buddies['musicians'][musician]['name']);
}
````

With Parcours.js
````javascript
Parcours.forEach(buddies, 'name', function(val) {
  console.log(val);
});
````

Now you want to get only the geeks's name.

````javascript
Parcours.forEach(buddies, 'geeks.name', function(val) {
   console.log(val);
});
`````

Or may be you want all the gamers 

````javascript
Parcours.forEach(buddies, 'gamers', function(gamer) {
   console.log(gamer);
});
`````

### Installation
#### In NodeJS
```
npm install parcours.js
```
````javascript
var Parcours = require('parcours.js');
````

#### In the browser
````javascript
<script src="moment.js"></script>
````

#### AMD loading
````javascript
`````

### Usage
Parcours.forEach(object, "query", iterator);

- object is the JS object or array
- query is a string.
- callback being called for each occurs

### Authors and Contributors
 I'm currently the only contributor of the project, but feel free to fork the projects and send me pull requests !

teissierflorent@gmail.com
