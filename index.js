function throwRandomly() {
	if (Math.random() < 0.5) {
		throw new Error("Something went wrong");
	}

	return "Hello";
}

console.log(useLocal(throwRandomly));

button.addEventListener("click", () => {
	console.log(useLocal(throwRandomly));
});
