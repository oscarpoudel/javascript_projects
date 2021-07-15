function convertWeight(pound){
    var kg = pound* (0.453592);
    console.log(kg);
    var kg = kg.toFixed(2)
    document.getElementById('result').innerHTML=kg+" kg";
}