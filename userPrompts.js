import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewSpend(){
  return await inquirer.prompt(newSpendPrompt);
}

const newSpendPrompt = [
  {
    type: "date",
    name: "date",
    message: "Ingrese la fecha de su gasto:",
    locale:"es-ES",
    format:{month: "short", hour: undefined, minute: undefined}
  },
  {
    type: "input",
    name: "detail",
    message: "Ingrese el detalle de su gasto:",
  },
  {
    type: "input",
    name: "amount",
    message: "Ingrese la cantidad de dinero gastado:",
  },
  {
    type: "list",
    name: "category",
    message: "Seleccione la categoria de su gasto:",
    choices: ["Alimento", "Salud", "Servicio", "Ocio", "Educacion", "Otro"]
  }
]