module.exports = function toReadable (number) {

    let array = String(number).split('');

    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let dozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let unit = '';
    let ten = '';
    let hundreds = '';

    if(array.length === 3){

        if(array[array.length-2] === '0'){
            hundreds = units[array[array.length-3]] + ' ' + 'hundred';
        } else{
            hundreds = units[array[array.length-3]] + ' ' + 'hundred' + ' ';
        }

       if(array[1] === '1'){
           ten = dozens[array[array.length-1]];
        } else if(array[array.length-1] === '0'){
           ten = tens[array[array.length-2]];
        } else{
           ten = tens[array[array.length-2]] + ' ';
           unit = units[array[array.length-1]];
        }
    } else if(array.length === 2){

        if(array[0] === '1'){
            ten = dozens[array[array.length-1]];
        } else if(array[1] === '0') {
        ten = tens[array[array.length-2]];
        } else{
            ten = tens[array[array.length-2]] + ' ';
            unit = units[array[array.length-1]];
        }

    } else{
        unit = units[array[array.length-1]];
    }

        return (hundreds+ten+unit)
 }