import alfy from 'alfy';
import dayjs from 'dayjs';

alfy.output([
  {
    title: dayjs().valueOf(),
    subtitle: "回车复制",
    arg: dayjs().valueOf(),
    text: {
      copy: dayjs().valueOf()
    }
  }
]);