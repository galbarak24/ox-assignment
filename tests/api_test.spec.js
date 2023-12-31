
import { test, expect } from "@playwright/test";
import *  as nodeFetch from "node-fetch"

test("api test", async () => {
    const response = await nodeFetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await response.json()

    console.log(response.status)
    expect(response.status).toBe(200);

    console.log(todo.title)
    expect(todo.title).toBe('delectus aut autem')


});






