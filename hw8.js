function log(arrItem) {
	console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i]);
	}
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);