import alfy from "alfy";
import { createDayjs } from "./utils.js";

const input = alfy.input;
const [dateString, pattern] = input.split(" ");
const output = createDayjs(dateString).format(pattern);

alfy.output([
  {
    title: output,
    subtitle: "回车复制",
    arg: output,
    text: {
      copy: output,
    },
  },
]);
