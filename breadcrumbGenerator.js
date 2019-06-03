"use strict";
// As breadcrumb menùs are quite popular today, 
// I won't digress much on explaining them, leaving the wiki link to do all the dirty work in my place.

// What might not be so trivial is instead to get a decent breadcrumb from your current url. 
// For this kata, your purpose is to create a function that takes a url, 
// strips the first part (labelling it always HOME) 
// and then builds it making each element but the last a <a> element linking to the relevant path; 
// last has to be a <span> element getting the active class.

// All elements need to be turned to uppercase and separated by a separator, 
// given as the second parameter of the function; 
// the last element can terminate in some common extension like 
//      .html, 
//      .htm, 
//      .php 
//      .asp; 
// if the name of the last element is index.something, you treat it as if it wasn't there, 
// sending users automatically to the upper level folder.

// A few examples can be more helpful than thousands of words of explanation, so here you have them:

// generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
// generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
// generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'

// Seems easy enough?

// Well, probably not so much, but we have one last extra rule: 
// if one element (other than the root/home) is longer than 30 characters, 
// you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); 
// url will be always given in the format this-is-an-element-of-the-url 
// and you should ignore words in this array while acronymizing: 
// ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; 
// a url composed of more words separated by - and equal or less than 30 characters long 
// needs to be just uppercased with hyphens replaced by spaces.

// Ignore anchors (www.url.com#lameAnchorExample) and 
// parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

// Examples:

// generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
// generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'

// You will always be provided valid url to webpages in common formats, 
// so you probably shouldn't bother validating them.

// If you like to test yourself with actual work/interview related kata, please also consider this one about building a string filter for Angular.js.

// Test.describe("Basic Tests",_=>{
//     compareResults(generateBC("mysite.com/pictures/holidays.html", " : "), '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>');
//     compareResults(generateBC("www.codewars.com/users/GiacomoSorbi", " / "), '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>');
//     compareResults(generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * "), '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>');
//     compareResults(generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "), '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>');
//     compareResults(generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "), '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>');
//     })


function generateBC(url, separator) {

    let hrefValue = '';
    let hrefText, spanText, href, span, responseArray;

    const skipWords = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
    const homeSpan = '<span class="active">HOME</span>';

    let urlComponents = url
        // remove http/s,
        .replace('https://', '')
        .replace('http://', '')
        // split on / to get each directory
        .split("/")
        // remove the domain
        .slice(1);

    // if no components, return only the span
    if (urlComponents.length == 0 || urlComponents[0].length == 0) {
        return homeSpan;
    }

    // split the last part of url into a new table. split on typical special char used in url
    let lastURLComponent = urlComponents[urlComponents.length - 1].split(/[?,#,.]/);

    // set the span text 
    if (lastURLComponent[0] == "index") {
        // if the last part of url is index, then get rid of it, use the last component in the span
        urlComponents.pop();
        // if index was the only url component, return just the HOME span
        if (urlComponents.length == 0) {
            return homeSpan;
        } else {
            // ele use the last url component in the span
            spanText = urlComponents[urlComponents.length - 1].toUpperCase();
        }
    } else {
        // else use the first value from the last url component
        spanText = lastURLComponent[0].toUpperCase();
    }

    // format the href and span strings for each component of the url
    responseArray = urlComponents.map((item, index, array) => {
        // last entry needs to be span
        if (index == array.length - 1) {
            spanText = acronymize(spanText);
            span = `<span class="active">${spanText}</span>`;
            return span;
        } else {
            hrefValue = hrefValue.concat('/', item);
            hrefText = acronymize(item);
            href = `<a href="${hrefValue}/">${hrefText}</a>`;
            return href;
        }
    })

    // add the HOME entry as the first entry
    responseArray.unshift('<a href="/">HOME</a>');

    return responseArray.join(separator);

    function acronymize(text) {
        if (text.length > 30) {
            // split word into array
            // let words = text.split('-')
            return text
                // split words in text into array
                .split('-')
                // remove words to be skipped in acronym
                .filter(word => {
                    return skipWords.includes(word.toLowerCase()) ? false : true
                })
                // get first letter of each word into an arrary
                .map(word => {
                    return word.charAt(0).toUpperCase()
                })
                // convert letters in array to  string
                .join('');
        }
        // replace all - with space when text < 30 char
        return text.replace(/-/g, ' ').toUpperCase();
    }
};

console.log(generateBC("github.com", "-"));
console.log(generateBC("github.com/index.htm", "-"));
// console.log(generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " : "));
// console.log(generateBC("www.codewars.com/users/Giacomo-Sorbi", " : "));
console.log(generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "));
console.log(generateBC("https://pippi.pi/kamehameha-research-pippi-uber-transmutation/diplomatic-kamehameha/giacomo-sorbi.asp#team?order=desc&filter=adult", " > "));
console.log(generateBC("pippi.pi/wanted/images/issues/insider-bed-uber-transmutation/login.php#bottom?previous=normalSearch&output=full", ' . '));