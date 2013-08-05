

(function(root) {

  var isBrowsable = function(obj) {
         return (toString.call(obj) == '[object Array]' || Object(obj) === obj);    
    };

  var Parcours = {
    
    each : function(obj, field, property, iterator, context) {
    
      if (typeof obj[field] != "undefined") {
          if(isBrowsable(obj[field])) {
              for(var i in obj[field]) {
                  if (typeof obj[field][i][property] != "undefined") {
                      iterator(i,obj[field][i][property]);
                  }
                  else {
                    iterator(i,obj[field][i]);
                  }
              }
          }
          else {
              iterator(i, obj[field]);
          }
 
     }
    
      // also looking for field in subEntites 
      for(var i in obj) {
          if (isBrowsable(obj[i])) {
              Parcours.each(obj[i], field, property, iterator, context);    
          }
      }
   
    };
  };

  root.Parcours = Parcours;

})(window);



