 function performSearch() {
            const query = prompt("Enter your search term:");
            if (query) {
                alert(`Searching for: ${query}`);
            } else {
                alert("Search query is empty!");
            }
        }