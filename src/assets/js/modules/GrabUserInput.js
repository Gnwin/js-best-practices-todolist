import Todo from './Todo';
import TodoItems from './TodoItems';

const todoinput = document.querySelector('.todoinput');

class GrabUserInput {
  grab = (event) => {
    event.preventDefault();
    if (todoinput.value === '') {
      return;
    }
    const idx = JSON.parse(localStorage.getItem('todos')).length + 1;
    const todo = new Todo(todoinput.value, idx);
    TodoItems.addtodo(todo);
    todoinput.value = '';
  }

  remove = (event) => {
    event.preventDefault();
    if (!event.target.parentElement.children[0].checked) {
      return;
    }
    TodoItems.deletetodo();
  }

  changeBackground = (event) => {
    event.preventDefault();
    const parent = event.target.parentElement;
    parent.children[2].style.display = 'none';
    parent.children[3].style.display = 'block';
  }

  changeBlur = (event) => {
    event.preventDefault();
    const parent = val.target.parentElement;
    parent.children[2].style.display = 'block';
    parent.children[3].style.display = 'none';
  }

  changeValue = (event, description) => {
    if (event.target.value === '') {
      event.target.value = description;
      return;
    }
    const idx = Number(event.target.id);
    TodoItems.edit(event.target.value, idx);
  }

  clearAllCompleted = () => {
    TodoItems.clearAll();
  }

  completed = (event) => {
    TodoItems.complete(event);
  }
}

const grabinput = new GrabUserInput();
export default grabinput;