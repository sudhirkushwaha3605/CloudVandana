function appendToDisplay(value){
    document.getElementById('display').value += value ;
}

function clearAll(){
    document.getElementById('display').value = '';
    document.getElementById('result').value = '';
}

function equal(){
    var expression = document.getElementById('display').value;
    try{
        var result = eval(expression);
        document.getElementById('display').value = result;
        document.getElementById('result').textContent = '';
    }
    catch(error){
        document.getElementById('result').textContent = 'Error';
    }
}