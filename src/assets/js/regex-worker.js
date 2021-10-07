let specialReplace = (str, re, before, after) => {
  let output = "";
  let currentIndex = 0;
  while ((match = re.exec(str)) != null) {
    console.log("yes");
    output += str.slice(currentIndex, match.index);
    output += `${before}${match[0]}${after}`;
    currentIndex = match.index + match[0].length;
  }

  output += str.slice(currentIndex);

  return output;
};

onmessage = function (e) {
  const cmd = e.data[0];
  let result;

  switch (cmd) {
    case "numMatches": {
      const str = e.data[1];
      const regex = e.data[2];
      result = (str.match(regex) || []).length;
      break;
    }
    case "replace": {
      const str = e.data[1];
      const regex = e.data[2];
      const rep = e.data[3];
      result = str.replace(regex, rep);
      break;
    }
    case "specialReplace": {
      const str = e.data[1];
      const regex = e.data[2];
      const before = e.data[3];
      const after = e.data[4];
      result = specialReplace(str, regex, before, after);
      break;
    }
  }

  postMessage(result);
};
