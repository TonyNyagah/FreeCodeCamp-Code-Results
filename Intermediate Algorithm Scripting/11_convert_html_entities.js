/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.

& = &amp; < = &lt; > = &gt; " = &quot; ' = &apos;
*/


function convertHTML(str) {
  // find all that match the required pattern  
  var htmlRegex = /[&,<,>,",']/g;
  // return str.replace(htmlRegex, "[&amp;, ^lt;]");
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));