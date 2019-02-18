
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

// Test.describe("longest",function() {
//     Test.it("Basic tests",function() {
//         Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//         Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//         Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
//     })})


function longest(s1, s2) {
    // create array from a Set of the 2 strings, sort, convert back to string
    // note that the [...new Set ] creates an array (converts set into an array)
    let test = [... new Set(s1.concat(s2))];
    console.log(test);
      return Array.prototype.concat(...new Set(s1.concat(s2))).sort().join('')
    };


    console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));