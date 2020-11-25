import { cnpj } from "cpf-cnpj-validator";

const validateCnpj = (value) => {
  let cnpjValue = value;
  cnpjValue = cnpjValue.replace(/\./g, "");
  cnpjValue = cnpjValue.replace("-", "");
  cnpjValue = cnpjValue.replace("/", "");

  return cnpj.isValid(cnpjValue);
};

export default validateCnpj;
