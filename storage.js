// set data in local storage
localStorage.setItem('username', 'John');

// get data from local storage
const username = localStorage.getItem('username');
console.log(username); // John

// remove data from local storage
localStorage.removeItem('username');


// set data in session storage
sessionStorage.setItem('isLoggedIn', 'true');

// get data from session storage
const isLoggedIn = sessionStorage.getItem('isLoggedIn');
console.log(isLoggedIn); // true

// remove data from session storage
sessionStorage.removeItem('isLoggedIn');

// set a cookie with an expiration date of 1 day
document.cookie = 'username=John; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();

// get the value of a cookie
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
console.log(cookieValue); // John

// delete a cookie
document.cookie = 'username=; expires=' + new Date(0).toUTCString();
