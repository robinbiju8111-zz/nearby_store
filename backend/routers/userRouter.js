import express from 'express';
import User from '../models/UserModel.js';
import data from '../Productdata.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';
import { isAuth } from '../utils.js';


const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
);
  
userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);

userRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
  if (User) {
    User.name = req.body.name || User.name;
    User.email = req.body.email || User.email;
    if (req.body.password) {
      User.password = bcrypt.hashSync(req.body.password, 8);
    }
    const updateUser = await User.save();
    res.send({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(updateUser),
    });
  }
}));
export default userRouter;