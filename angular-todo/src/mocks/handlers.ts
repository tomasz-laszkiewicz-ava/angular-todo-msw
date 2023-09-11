import { rest } from "msw";
import { TodoItemEntity } from "src/app/todo-list/todo-item-entity";

// GET http://localhost:3000/tasks
// POST http://localhost:3000/tasks
// PATCH http://localhost:3000/tasks/1
// DELETE http://localhost:3000/tasks/1

export const handlers = [
  rest.get("*/tasks", (req, res, ctx) => {
    const result = [
      {
        id: 1,
        label: "install msw",
        category: "work",
        description: "use npm install",
        done: false,
      },
    ];
    return res(ctx.delay(3000), ctx.status(200), ctx.json(result));
  }),

  rest.post("*/tasks", async (req, res, ctx) => {
    const body = (await req.json()) as TodoItemEntity;
    return res(ctx.delay(1000), ctx.status(200), ctx.json(body));
  }),

  rest.patch("*/tasks/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const body = (await req.json()) as TodoItemEntity;
    console.log(`body`, body);

    return res(ctx.delay(1000), ctx.status(200), ctx.json(body));
  }),

  rest.delete("*/tasks/:id", async (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200));
  }),
];
