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

export { validateNewRestaurant };
