async function status(request, response) {
  const resposta = await fetch("https://diowgo.com.br");
  status.response(resposta);
}

export default status;
