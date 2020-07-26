var recipes = {Object};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
return (recipes.key = value);
}
function deleteFromObjectByKey(object, key){
  delete key[object];
  return recipes;
}
function destructivelyDeleteFromObjectByKey(){
  
}