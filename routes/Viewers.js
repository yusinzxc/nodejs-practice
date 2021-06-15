const express = require('express')
const router = express.Router()

/* Get */
router.get('/fetch',(req,res) => {
  res.json({
    "name":"yujin",
    "Age":18
  })
})
/* Post */
router.post('/insert',(req,res) => {
  res.json({
    "message": "Success!"
  })
})
/* Params */
router.get('/testparams/:name/:id', (req, res) => {
  const { name, id } = req.params;
  console.log('name: ', name, ' id: ', id)
  res.send(req.params)
  res.send('testparams')
})
/* Query */
router.get('/testquery', (req, res) => {
  const { username , password } = req.query;
  console.log(username)
  console.log(password)
  console.log(req.query)
  res.send(req.query)
})
router.get('/testbody', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
/* post 2.0 */
router.get('/post2', (req,res) => {
  const { name, group } = req.query;
  try{
    res.status(200).send(req.query)
  }catch (err){
    res.status(404).json({"message": "Fail"})
  }
})
module.exports = router;
