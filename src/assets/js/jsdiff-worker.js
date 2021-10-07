importScripts("./diff.min.js");

onmessage = function (e) {
  const [first, second] = e.data;
  postMessage(Diff.diffWordsWithSpace(first, second));
};
