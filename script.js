let input = document.getElementById('user-input');


input.addEventListener('input', function(){
    let inputText = input.value;

    let wordsArr = inputText.replace(/[^\w]/g, ' ').split(' ').filter(word => word.length > 0);
    let wordsNum = wordsArr.length;

    let h3 = document.getElementById('counted');
    h3.innerHTML = `Words counted: ${wordsNum}`;

});