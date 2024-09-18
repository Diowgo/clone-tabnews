async function status(request, response) {
  const resposta = await fetch("https://diowgo.com.br");
  response.status(resposta.status).json({ Resposta: resposta.status });
}

export default status;
