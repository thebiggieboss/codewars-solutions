function parseInt(string) {
    string = string.replace(/-/gi, ' ').split(" ")
    let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let c = ['', '', 'hundred', 'thousand', '', '', 'million']
    for(let i = 0; i < a.length; i++) {
        console.log(a.indexOf(string[i]))
    }
}

// console.log(parseInt('one'))
// console.log(parseInt('twenty'))
console.log(parseInt('two hundred forty-six'))