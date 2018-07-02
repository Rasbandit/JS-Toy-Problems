// Letter Frequency

// TEACHER NOTES
// This problem can be solved using a double for loop but it is super inefficient. It works best to use a hash table like we used in week 5 letter frequency. This is a great example of how big 0 Notation effects efficiency. by using the hash table it turns this into a linear complexity instead of exponential

// We want make a 'ransom note' from the a magazine article be before we go
// and start cutting up the page we want to see if we can even make the note
// from the given article.
// Write a function that takes in two strings, one being the string we are searching through, and the second being the string we are trying to make. If it is possible to make the second string from the words in the first then have the function return true, if no then return false.

// 'this is a secret note for you from a secret admirer'
// 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'

// this should returns true
