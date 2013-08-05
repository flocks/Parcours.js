Parcours.js
===========

Tiny lib for browsing javascript objects/array.

Let's say you have the following object : 

````javascript
var personnes =
  { 
  "geeks" : {
          "programmeurs": [
              { "nom": "McLaughlin", "prenom": "Brett", "email": "brett@email.com" },
              { "nom": "Hunter", "prenom": "Jason", "email": "jason@servlets.com" },
              { "nom": "Harold", "prenom": "Elliot", "email": "elharo@macfaq.com" }
   ],
         "gamers" : [
              { "nom": "Play1", "prenom": "Brett", "email": "brett@email.com" },
              { "nom": "Play23", "prenom": "Paul", "email": "paull@servlets.com" },
              { "nom": "Play33", "prenom": "Pierre", "email": "pierre@macfaq.com" }     
          ]
  },
    
  "auteurs": [
      { "nom": "Asimov", "prenom": "Isaac", "genre": "science fiction" },
      { "nom": "Williams", "prenom": "Tad", "genre": "horreur" },
      { "nom": "Peretti", "prenom": "Frank", "genre": "policier" }
    ],
  "musiciens": [
      { "nom": "Clapton", "prenom": "Eric", "instrument": "guitare" },
      { "nom": "Rachmaninoff", "prenom": "Laurent", "instrument": "piano" }
   ]
  };
````
You might want to list the geeks's emails, you would basically have to write something like : 
````javacsript
  for(var kindOfGeek in personnes['geeks']) {
    for(var person in personnes['geeks'][kindOfGeek]) {
      console.log(personnes['geeks'][kindOfGeek][person]['name']);
    }
  }
````
With Parcours.JS you just write 
````javascript 
Parcours.forEach(personnes, "geeks.name", function(val) {
  console.log(val);
});
````

<h2>Usage</h2>
````javascript
  Parcours.forEach(object, fields, iterator);
````
- Object is the Javascript object or Array, you want to find the fields in.
- fields is a string representing the query
- iterator is the function callback called every time your query is matched in the object

You can put whatever you want in fields, like "auteurs", or "auteurs.genre".
For example if you want to list the name of every person in persons, you do 
````javascript
Parcours.forEach(personnes, "nom", function(val) {
  console.log(val);
});
````
