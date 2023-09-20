import alfy from 'alfy';

alfy.output([
  {
    title: decodeURIComponent(alfy.input),
    subtitle: "回车复制",
    arg: decodeURIComponent(alfy.input),
    text: {
      copy: decodeURIComponent(alfy.input)
    }
  }
]);