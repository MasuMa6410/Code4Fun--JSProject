function onClick(params) {
  let Weight = document.querySelector("#weight").value;
  let Height = document.querySelector("#height").value;
  let theWeight = Weight;
  let theHeight = Height ** 2;
  let output = Math.floor(theWeight / theHeight);
  document.querySelector("#result").innerHTML = `Your BMI is ${output}`;
}
