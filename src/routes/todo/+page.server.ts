import * as db from '$lib/server/database';
import type { RequestEvent } from '@sveltejs/kit';

export function load({ cookies }: RequestEvent) {
    let id = cookies.get('userid');
    
    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, { path: '/' });
    }

    return {
        todos: db.getTodos(id)
    }
}

export const actions = {
    create: async ({ cookies, request }: RequestEvent) => {
        const data = await request.formData();
        db.createTodo(cookies.get('userid'), data.get('description'));
    },
    delete: async ({ cookies, request }: RequestEvent) => {
        const data = await request.formData();
        db.deleteTodo(cookies.get('userid'), data.get('id'));
    }
}