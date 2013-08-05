var personnes =
  { 
      "geeks" : {
                "programmeurs": [
      { "nom": "McLaughlin", "prenom": "Brett", "email": "brett@email.com" },
      { "nom": "Hunter", "prenom": "Jason", "email": "jason@servlets.com" },
      { "nom": "Harold", "prenom": "Elliot", "email": "elharo@macfaq.com" }
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
  
Parcours.each(personnes, 'programmeurs', '',function(keys, val) {
   console.log(keys, val); 
});

