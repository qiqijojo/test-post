
function collect_same_elements(collection_a, object_b) {
	var mychar = [];
 	for(var i=0;i<collection_a.length;i++){
		var index = object_b.value.indexOf(collection_a[i].key);
			if(index>=0){
				mychar.push(collection_a[i].key);
			}
	}
	return mychar;
}
module.exports = collect_same_elements;
