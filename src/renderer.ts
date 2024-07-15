import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

// レンダラーが読み込まれていることを確認
// console.log('👋 This message is being logged by "renderer.js", included via webpack');

// アラーム追加
const addButton =  document.getElementById('add_alerm')
addButton.addEventListener('click',() => {
    window.buttons.addAlerm()
})

// アラーム一覧を表示。メインプロセスから呼ばれる
window.yaml.getSettings((v: any)=>{
    // get todoList
    const todoList = document.getElementById('todoList');
    // create html string
    const todoItems = v.reduce((html: string, todo: any) => {
        html += `<li class="todo-item">${todo.name}</li>`;
        return html;
    }, '');

    // set list html to the todo items
    todoList.innerHTML = todoItems;
})
