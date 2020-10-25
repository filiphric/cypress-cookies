let str = document.cookie;
const $ = document.querySelector.bind(document)

let arr = []

if (str.length) {
  str = str.split('; ');
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i].split('='))
  }
}

function makeTableHTML(ar) {
  return `
  <table>
    <tr>
      <th>NAME</th>
      <th>VALUE</th>
    </tr>
  ${ar.reduce((c, o) => c += `<tr>${o.reduce((c, d) => (c += `<td>${d}</td>`), '')}</tr>`, '')}
  </table>`
}

$('#cookieContainer').innerHTML = `no cookies were found`
if (arr.length) $('#cookieContainer').innerHTML = `${makeTableHTML(arr)}`
