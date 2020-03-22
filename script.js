let orderedCount = function (text) {
  // Implement me!
  let mass = text.split ("");
  let k = 0;
  let finishMass = [];
    while (mass.length>0){
    let counter = 1;
    for (let i = 1; i < mass.length; i++){
    
    if (mass[0] == mass[i]){
      counter++;
      mass.splice(i,1);
    }
  }
  finishMass[k] = [mass[0],counter];
  mass.splice(0,1);
  k++;
}
  return finishMass;
};
