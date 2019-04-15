export default function objectSort(data, prop, order) {
  return data.sort((item1, item2) => {
    let compareResult;
    const a = item1[prop];
    const b = item2[prop];

    if (a > b) compareResult = 1;
    else if (a < b) compareResult = -1;
    else compareResult = 0;

    if (order === "asc") return compareResult;
    else return compareResult * -1;
  });
}
