document.getElementById("search").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

function search() {
  window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(document.getElementById("search").value);
}
