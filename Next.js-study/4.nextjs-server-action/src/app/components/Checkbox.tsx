"use client";
import React, {useOptimistic, useTransition} from "react";
import {Todo} from "./TodoList";
import {updateTodo} from "@/lib/actions";

const Checkbox = ({todo}: {todo: Todo}) => {
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (state: Todo, completed: boolean) => ({...state, completed})
  );

  return (
    <input
      className="min-w-[1.5rem] min-h-[1.5rem]"
      type="checkbox"
      checked={optimisticTodo.completed}
      id="completed"
      name="completed"
      onChange={async () => {
        addOptimisticTodo(!todo.completed);
        await updateTodo(todo);
      }}></input>
  );
};

export default Checkbox;

// const Checkbox = ({todo}: {todo: Todo}) => {
//   const [isPending, startTransition] = useTransition();
//   return (
//     <input
//       className="min-w-[1.5rem] min-h-[1.5rem]"
//       type="checkbox"
//       checked={todo.completed}
//       id="completed"
//       name="completed"
//       disabled={isPending}
//       onChange={() =>
//         startTransition(() => {
//           updateTodo(todo);
//         })
//       }></input>
//   );
// };

// export default Checkbox;
