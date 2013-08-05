
(function(root, factory) {

    // if AMD loaded
   if(typeof define == 'function' && define.amd) {
       define(factory);
   }
   else {

        var hasModule = (typeof module !== 'undefined' && module.exports); // true is we are in nodeJS env

        if (hasModule) { 
            module.exports = factory;
        }
        else { // browser env
            root.Parcours = factory;
        }

   }

})(this, function() {

    // true is obj is Object or Array
    var isBrowsable = function(obj) {
        return (toString.call(obj) == '[object Array]' || Object(obj) === obj);
    }

    var find = function(object, items, index, iterator) {
         if (index == items.length) {
            return false;   
         }
        if (typeof object[items[index]] != "undefined") {
       
        
            if (typeof items[index+1] != "undefined") {
                find(object[items[index]], items, index+1, iterator)
            }
            else {
                if (isBrowsable(object[items[index]])) {
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
                if(isBrowsable(object[i])) {
                    find(object[i], items, index, iterator);   
                } 
            }
        }
    }

    return {
        forEach : function(object,item, iterator) {
            var items = item.split('.');

            find(object, items, 0, iterator);
        }
    }


});

