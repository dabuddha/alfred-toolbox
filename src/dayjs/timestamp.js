import alfy from 'alfy';
import { createDayjs } from './utils.js';

const input = alfy.input;
const date = createDayjs(input);
const timestamp = date.valueOf();

alfy.output([
  {
    title: timestamp,
    subtitle: "回车复制",
    arg: timestamp,
    text: {
      copy: timestamp,
    },
  },
]);
