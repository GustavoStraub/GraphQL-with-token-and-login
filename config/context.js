module.exports = async ({ req }) => {
  //em desenvolvimento
  await require('./simularUsuarioLogado')(req)

  const auth = req.headers.authorization

}