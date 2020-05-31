module.exports = ({ req }) => {
  const auth = req.headers.authorization
  console.log(auth)
}