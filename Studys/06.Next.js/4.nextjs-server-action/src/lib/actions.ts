"use server";

import {Todo} from "@/app/components/TodoList";
import {revalidatePath} from "next/cache";
import sleep from "./sleep";

export async function addTodo(data: FormData) {
  const title = data.get("title");
  await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({userId: 1, title, completed: false}),
  });
  revalidatePath("/");
}

export async function deleteTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      id: todo.id,
    }),
  });
  // await res.json();
  revalidatePath("/");
}

export async function updateTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });
  await res.json();
  await sleep(2000);
  revalidatePath("/");
}
