const validateNewRestaurant = (formData) => {
  const { name, description, price, cuisine, location } = formData;
  const phoneNumber = formData.phoneNumber.replace(/([^\d])/g, "");
  const openingTime = formData.openingTime.toTimeString().substring(0, 8);
  const closingTime = formData.closingTime.toTimeString().substring(0, 8);
  const diningRestriction =
    formData.diningRestriction === "none" ? null : formData.diningRestriction;

  formData.tables.twoPersonTables =
    formData.tables.twoPersonTables === ""
      ? "0"
      : formData.tables.twoPersonTables;

  formData.tables.fourPersonTables =
    formData.tables.fourPersonTables === ""
      ? "0"
      : formData.tables.fourPersonTables;

  formData.tables.eightPersonTables =
    formData.tables.eightPersonTables === ""
      ? "0"
      : formData.tables.eightPersonTables;

  const tables =
    Number(formData.tables.twoPersonTables) +
    Number(formData.tables.fourPersonTables) +
    Number(formData.tables.eightPersonTables)
      ? formData.tables
      : null;

  const formattedBody = {
    name,
    description,
    phoneNumber,
    openingTime,
    closingTime,
    price,
    cuisine,
    location,
    diningRestriction,
  };
  if (tables) formattedBody.tables = tables;
  return formattedBody;
};

const restaurantDataToForm = (restData) => {
  const tables = restData.tables
    ? restData.tables
    : { twoPersonTables: 0, fourPersonTables: 0, eightPersonTables: 0 };

  const diningRestriction = restData.diningRestriction
    ? restData.diningRestriction
    : "none";

  const openingArr = restData.openingTime.split(":").map((e) => Number(e));
  const closingArr = restData.closingTime.split(":").map((e) => Number(e));

  const openingTime = new Date(Date.now());
  const closingTime = new Date(Date.now());

  openingTime.setHours(openingArr[0]);
  openingTime.setMinutes(openingArr[1]);
  openingTime.setSeconds(openingArr[2]);

  closingTime.setHours(closingArr[0]);
  closingTime.setMinutes(closingArr[1]);
  closingTime.setSeconds(closingArr[2]);

  const { name, description, phoneNumber, price, cuisine, location } = restData;

  return {
    name,
    description,
    phoneNumber,
    price,
    cuisine,
    location,
    tables,
    diningRestriction,
    openingTime,
    closingTime,
  };
};

const formDataToPatch = (formData, restaurantData) => {
  formData = validateNewRestaurant(formData);
  formData.tables = formData.tables ? formData.tables : null;
  const changedKeys = [];

  for (const key in formData) {
    if (key === "tables" && typeof key === "object") {
      if (
        Number(formData[key].twoPersonTables) !==
          restaurantData[key].twoPersonTables ||
        Number(formData[key].fourPersonTables) !==
          restaurantData[key].fourPersonTables ||
        Number(formData[key].eightPersonTables) !==
          restaurantData[key].eightPersonTables
      ) {
        changedKeys.push(key);
      }
    } else if (formData[key] !== restaurantData[key]) {
      changedKeys.push(key);
    }
  }

  const patchObj = changedKeys.reduce((acc, val) => {
    return { ...acc, [val]: formData[val] };
  }, {});

  if (JSON.stringify(patchObj) === "{}") {
    alert("No edits were made");
    throw new Error("No edits were made");
  } else {
    return patchObj;
  }
};

export { validateNewRestaurant, restaurantDataToForm, formDataToPatch };
