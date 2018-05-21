function charFreq(sentence) {
  const charactersArray = sentence
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
  let count = {};

  charactersArray.forEach(character => {
    count[character] ? count[character]++ : (count[character] = 1);
  });
  return count;
}

function longestIncrSequence(seq) {
  let currentSeq = [];
  let longestSeq = [];

  seq.forEach((current, index) => {
    let next = seq[index + 1];
    let prev = seq[index - 1];

    if (current < next) {
      currentSeq.push(current);
    } else if (
      (prev < current && current > next) ||
      (prev < current && !next)
    ) {
      currentSeq.push(current);
      if (currentSeq.length > longestSeq.length) {
        longestSeq = currentSeq;
      }
      currentSeq = [];
    } else {
      currentSeq = [];
    }
  });

  return longestSeq;
}

function formidableSeries(start, end) {
  let seriesArray = [];

  for (var i = start; i < end + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      seriesArray.push("FormidableLabs");
    } else if (i % 3 === 0) {
      seriesArray.push("Formidable");
    } else if (i % 5 === 0) {
      seriesArray.push("Labs");
    } else {
      seriesArray.push(i);
    }
  }
  return seriesArray;
}
