async function status(request, response) {
  response.status(200).json({ "Tá tudo ok, a resposta é": 200 });
}

export default status;
