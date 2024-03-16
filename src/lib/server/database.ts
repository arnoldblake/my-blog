const db = new Map();

export function getTodos(userid: any) {
    if (!db.get(userid)) {
        db.set(userid, [{
            id: crypto.randomUUID(),
            description: 'Learn SvelteKit',
            done: false
        }]);
    }
    return db.get(userid);
}

export function createTodo(userid: any, description: any) {
    const todos = db.get(userid);
    todos.push({
        id: crypto.randomUUID(),
        description,
        done: false
    });
}

export function deleteTodo(userid: any, todoid: any) {
    const todos = db.get(userid);
    const index = todos.findIndex((todo: any) => todo.id === todoid);
    if (index !== -1) {
        todos.splice(index, 1);
    }
}