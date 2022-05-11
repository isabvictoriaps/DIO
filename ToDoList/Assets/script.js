const form = document.getElementById('task-form');
const task = document.getElementById('task')

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('taskTarefa');
	addTask(inputField.value);
	form.reset();
};
