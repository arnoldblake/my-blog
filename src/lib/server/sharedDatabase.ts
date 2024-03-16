import { writable } from 'svelte/store';

const db = writable(new Map());

export function createTodo(userid: any, description: any) {

    const todos = db.get(userid);
    todos.push({
        id: crypto.randomUUID(),
        description,
        done: false
    });
}