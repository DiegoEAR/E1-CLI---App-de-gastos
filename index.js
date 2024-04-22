import inquirer from "inquirer";
import { get, save } from "./filesMethods.js";
import { promptNewSpend } from "./userPrompts.js";
import chalk from "chalk";

const main = async () => {
  let run = true;
  while(run){
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Elija por favor una de las opciones:",
        choices: [
          {value: 1, name: "Obtener todos los gastos."},
          {value: 2, name: "Agregar nuevo gasto."},
          {value: 99, name: "Salir."}
        ],
      },
    ]);
    switch(action.chosen){
      case 1:
        await getAllSpends();
        break;

      case 2:
        await createNewSpend();
        break;

      case 99:
        run = false;
        break;

      default:
        run = false;
        break;
    }
  }
  console.log(chalk.yellow.bgBlue("Gracias por usar esta App"));
};

main();

async function createNewSpend(){
  console.log(chalk.bgWhite("Agregando un nuevo gasto..."));
  const newSpendData = await promptNewSpend();
  console.log(chalk.bgWhite("Creando", newSpendData));

  const currentSpends = await get("spends");

  currentSpends.push(newSpendData);
  await save("spends", currentSpends);
}

async function getAllSpends() {
  const currentSpends = await get("spends");
  console.log(currentSpends);
}