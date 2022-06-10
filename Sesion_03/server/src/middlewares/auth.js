import jsonWebToken from 'jsonwebtoken'
import User from '../models/user.model'

export const verifyToken = (req, res, next) => {
  try {
    const token = req.body.token || req.query.token || req.headers['x-auth-token']

    if (!token)
      return res.status(401).send({
        message: 'No token provided.'
      })

    const decoded = jsonWebToken.verify(token, process.env.JWT_SECRET_KEY)
    req.userId = decoded.id

    const user = User.findById(req.userId, {password: 0})
    if (!user)
      return res.status(404).send({
        message: 'User not found.'
      })
    
    next()

  } catch (error) {
    res.status(401).send({
      message: error.message
    })
  }
}