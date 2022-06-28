# useLocal
Use cache if something went wrong

## Example

Import the `useLocal` file.

```js
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
```

## Args

```js
useLocal(function, ...args) // returns result after calling function with args
```
