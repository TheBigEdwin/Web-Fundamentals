console.log("page loading...");

// index     0  1   2
var likes = [200, 13, 100];
var spans = [
    document.querySelector("#usuario-1"),
    document.querySelector("#usuario-2"),
    document.querySelector("#usuario-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}