import { log } from "./log.mjs";

export const handler = async (event) => {
  log("Log de execução" + JSON.stringify(event));

  return {
    statusCode: 200,
    body: `<html><body>Dados da requisicao ${JSON.stringify(
      event
    )} </body></html>`,
    headers: {
      "content-type": "application/JSON",
    },
  };
};
