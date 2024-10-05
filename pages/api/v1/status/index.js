import database from "infra/database.js";

async function status(request, response) {
  const res = await database.query("SELECT 1 + 1 as UM_MAIS_UM;");
  console.log(res);
  response.status(200).json({ "Tá tudo ok, a resposta é": 200 });
}

export default status;
