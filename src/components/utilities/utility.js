export const days = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

export const getSorted = (array, target) => {
  let sorted = array.sort((a, b) => {
    if (a[target] > b[target]) {
      return 1;
    }
    if (a[target] < b[target]) {
      return -1;
    }
    return 0;
  });
  return sorted;
};

export const reduce = (array) => {
  let result = array.filter((item, idx) => {
    return array.indexOf(item) === idx;
  });
  return result;
};

export const reduceObjects = (array) => {
  let buffer = [];
  let result = array.filter((item) => {
    let exist = buffer.indexOf(item.location);
    if (exist === -1) {
      buffer.push(item.location);
    }
    return exist === -1;
  });
  return result;
};

export const duplicate = (element) => {
  return JSON.parse(JSON.stringify(element));
};

export const getSearch = ({ target, subTargets, properties, subProperties, keyWord }, callback) => {
  let result = target.filter((arrayItem) => {
    let exist = false;
    let existBelow = false;

    //Buscar en el primer nivel
    properties.forEach((property) => {
      let stringValue = String(arrayItem[property]); //Convertir valores a string
      if (stringValue.indexOf(keyWord) !== -1) {
        exist = true;
      }
    });

    //Descender un nivel
    if (subProperties && subTargets) {
      //buscar el valor en una matriz
      if (subProperties.length > 0) {
        subTargets.forEach((subTarget) => {
          subProperties.forEach((subProperty) => {
            arrayItem[subTarget].forEach((subItem) => {
              let normalized = String(subItem[subProperty]).toLowerCase();
              if (normalized.indexOf(keyWord) !== -1) {
                existBelow = true;
              }
            });
          });
        });
      } else {
        //buscar el valor en un campo
        subTargets.forEach((subTarget) => {
          arrayItem[subTarget].forEach((value) => {
            let normalized = String(value).toLowerCase();
            if (normalized.indexOf(keyWord) !== -1) {
              existBelow = true;
            }
          });
        });
      }
    }
    //////////////////////////////////////
 
    return exist || existBelow;
  });
  callback(result);
  return result;
};

export const getShortCode = () => {
  const text = "abcdefghijklmnopqrstuvwxyz";
  const randomLetter = () => {
    let random = Math.round(Math.random() * (25 - 0));
    let letter = text.slice(random, random + 1);
    return letter;
  };
  const TextCode = randomLetter() + randomLetter();
  const numberCode = String(Math.random()).substr(-4);
  return TextCode + numberCode;
};
