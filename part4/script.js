function KmToM(km) {
  km = km * 1000;
  return km;
}

function KmToCm(km) {
  km = km * 100000;
  return km;
}

function getMetric(metric, km, m, cm) {
  km = prompt("Enter how many kilometers?");

  metric = prompt("Witch metric should be converted to: 'm' or 'cm' ?");

  m = KmToM(+km);

  cm = KmToCm(+km);

  if (metric == "m") {
    return m;
  } else if (metric == "cm") {
    return cm;
  }
}

alert(getMetric());