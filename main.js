document.getElementById('btnContainer').addEventListener('click',function (event) {
    const value = event.target.innerText;
    console.log(value);
    let inputValue= document.getElementById('mainInp').value;
    if (value =='C') {
        document.getElementById('mainInp').value='';
        document.getElementById('secondaryInp').value='';
    }else if (value == '<') {
        const newValue = inputValue.slice(0,inputValue.length - 1);
        document.getElementById('mainInp').value=newValue;
        console.log('asif')
        
    }
    else if (value=='=') {
        if (inputValue == '') {
        
        }else{
            document.getElementById('secondaryInp').value=inputValue;
            const finalValue= eval(inputValue)
            document.getElementById('mainInp').value=finalValue;
            console.log('ad')
        }
        
    }
    else{

    document.getElementById('mainInp').value=inputValue + value;
    }
})