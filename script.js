// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
var key=undefined;
//rHWR8WY5BGnKLaD7w6ekhTzdomu6zYHQ
let headline = document.getElementById('heading');
//var key = document.getElementById('word').value;
//console.log(key);

function get(){debugger;
  key = document.getElementById('word').value;
  console.log(key);

  let url = 
`https://api.nytimes.com/svc/topstories/v2/${key}.json?api-key=rHWR8WY5BGnKLaD7w6ekhTzdomu6zYHQ`;

fetch(url)
.then(response => response.json())
.then(data => {console.log(data);
data.results.map(item => {
  console.log(item.title)

  let a = document.createElement("a");
a.setAttribute('href' , item.url);
a.innerHTML = item.title;

let p = document.createElement("p");
p.innerHTML = item.abstract;

let img = document.createElement("img");
img.setAttribute ( 'src', item.multimedia[0].url);

headline.appendChild(a);
headline.appendChild(p);
headline.appendChild(img);
})
})

}