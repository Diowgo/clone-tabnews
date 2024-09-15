function status(request, response) {
  response.status(200).json({ RESPOSTA: "Tá tudo certo!" });
}

export default status;
