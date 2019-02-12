function array_diff(a, b) {
    return a.filter((number) => { return b.indexOf(number) >= 0 ? false : true })
}