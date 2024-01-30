const { googleFormsToJson } = require("react-google-forms-hooks");

googleFormsToJson("https://docs.google.com/forms/d/e/1FAIpQLSfJTYihaA_ZdTe8apVuFQW51AhDH02x54zzl9ZTFPs4V5GYVA/viewform?usp=sf_link")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
