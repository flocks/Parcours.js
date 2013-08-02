var objet = {
    id1 : {
        sub_id1_1 : '1',
        sub_id1_2 : '2'
    },
    id2 : {
        sub_id2_1 : '451',
        sub_id2_2 : '2001'
    },
    id3 : {
        sub_id3_1 : '123',
        sub_id3_2 : '54'
    }
};

var Parcours = {};
         
Parcours.resursy = function(obj, depth, iterator, context) {
    if (typeof depth == undefined || depth == 0 || depth == 1) {
         return Parcours.each(obj, iterator, context);   
    }
    else {
           
    }
}
                

Parcours.each = function(obj, iterator, context) {
    for(var k  in obj) {
        iterator(k, obj[k]);
    }
}

Parcours.resursy(objet,1, function(keys, val) {
    console.log(val);
});
