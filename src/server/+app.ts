import { html } from "client:page";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) =>
	c.html(html.replace("<!-- ssr -->", new Date().toTimeString())),
);

app.get("/json", (c) => c.json({ hello: "world" }));

export default app;
