export const getAnchorEnum = <E, K extends string>(
  enumDef: { [key in K]: E },
  valueToConvert: E,
) => {
  const enumValues = Object.entries(enumDef);
  for (let index = 0; index < enumValues.length; index++) {
    const element = enumValues[index];
    if (element) {
      if (valueToConvert === element[1]) {
        const isAllCaps = element[0].toUpperCase() === element[0];
        const key = isAllCaps
          ? element[0].toLowerCase()
          : element[0].charAt(0).toLowerCase() + element[0].slice(1);
        return { [key]: {} } as never;
      }
    }
  }
  throw new Error(`${valueToConvert} is not found in the enum`);
};
