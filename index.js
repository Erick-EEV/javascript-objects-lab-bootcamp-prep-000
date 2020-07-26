var recipes = {Object};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value;
return recipes;
}
const
function deleteFromObjectByKey(object, key){
  delete key[object];
  return recipes;
}
function destructivelyDeleteFromObjectByKey(){
  return recipes
}