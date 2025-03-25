let message = ''

if (process.argv.length <= 2){
    message = 'Hello Boolean'
} else if (process.argv.length > 2) {
    for (let i = 2; i < process.argv.length; i++) {
    message += `${process.argv[i]} ` ;
}
}

// console.log(process.argv)
console.log(message);