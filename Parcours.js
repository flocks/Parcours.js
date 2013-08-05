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


Parcours = {};
Parcours.isBrowsable = function(obj) {
   return (toString.call(obj) == '[object Array]' || Object(obj) === obj);    
 
}
Parcours.find = function(object, items, index, iterator) {
    if (index == items.length) {
        return false;   
    }
    if (typeof object[items[index]] != "undefined") {
       
        
        if (typeof items[index+1] != "undefined") {
            Parcours.find(object[items[index]], items, index+1, iterator)
        }
        else {
            if (Parcours.isBrowsable(object[items[index]])) {
                for(var i in object[items[index]]) {
                    iterator(i, object[items[index]][i]);
                }
            }
            else {
                 iterator(0, object[items[index]]);   
            }
        }
    }
    else {
        for(var i in object) {
            if( Parcours.isBrowsable(object[i])) {
               Parcours.find(object[i], items, index, iterator);   
             }
             
        }
    }
}

Parcours.forEach = function(object, item, iterator) {
     var items = item.split('.');
    
    Parcours.find(object, items, 0, iterator);
}

Parcours.forEach(personnes, "gamers.nom", function(key,val) {
    console.log(key, val);
});