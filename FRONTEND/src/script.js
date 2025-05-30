document.querySelectorAll(".hexagon").forEach(hex => {
    hex.addEventListener("click", () => {
        hex.computedStyleMap.backgroundColor = "#F3C623";
    });
});

document.querySelectorAll(".hexagon").forEach(hex => {
    hex.addEventListener("click", () => {
        hex.classList.toggle("Completed");
    });
});

document.querySelectorAll(".hexagon").forEach(hex => {
    hex.addEventListener("click", () => {
        hex.classList.toggle("InProgress");
        localStorage.setItem(hex.textContent, hex.classList.contains("completed"));
    });

    if (localStorage.getItem(hex.textContent) === "true") {
        hex.classList.add("completed");
    }
});

// Aufgabe erstellen

document.getElementById("createTask").addEventListener("click", () => {
    const
})