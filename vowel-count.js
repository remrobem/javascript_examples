function vowelCount(argCount, ...args) {

    args.reduce((count, arg) => {
        console.log(arg.match(/[aeiou]/gi) ? arg.match(/[aeiou]/gi).length : 0);
    }, 0);

    return '';
}
function vowelCount1(argCount, ...args) {

    for (let i = 0; i < argCount; ++i) {
        console.log(args[i].match(/[aeiou]/gi) ? args[i].match(/[aeiou]/gi).length : 0)
    };
    return ''; Ï
}

vowelCount(3, 'sjhddAjhOgj', 'zzzzZZzzzz', 'ajer iRoU', 'response');
vowelCount1(3, 'sjhddAjhOgj', 'zzzzZZzzzz', 'ajer iRoU', 'no response');