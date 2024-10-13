import Elysia from "elysia";
import { staticPlugin } from "@elysiajs/static";

new Elysia().use(staticPlugin({ prefix: "/" })).listen(3000);
