const userModel = require('../models/UserModel')

class UserController {

  async create(req, res){
    const { body } = req;

    await userModel.create(body).then(doc => {
      return res.json(doc)
    }, (reason) => {
      console.log(reason)
    })
  }

  async delete(req, res){
    const { id } = req.params

    await userModel.deleteOne({_id: id}, (err) => {
      if(err)
        return res.json({ status: false, message: err })
      return res.json({ status: true, message: 'User Deletado' })
    })
  }

  async update(req, res){
    const { body } = req
    const { id } = req.params
    
    await userModel.updateOne({ _id: id}, body, (err, raw) => {
      if(err)
        return res.json({ status: false, message: err })
      return res.json(raw)
    })
  }

  async listUsers(req, res){
    await userModel.find((err, doc) => {
      if(err)
        return res.json({ status: false, message: err })
      return res.json(doc)
    })
  }

  async listById(req, res){
    const { id } = req.params

    await userModel.findById(id, (err, doc) => {
      if(err)
        return res.json({ status: false, message: err })
      return res.json(doc)
    })
  }
}

module.exports = new UserController()