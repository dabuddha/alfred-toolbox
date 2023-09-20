import alfy from 'alfy';

alfy.output([
  {
    title: encodeURIComponent(alfy.input),
    subtitle: "回车复制",
    arg: encodeURIComponent(alfy.input),
    text: {
      copy: encodeURIComponent(alfy.input)
    }
  }
]);