import { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from '../../models/user';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await UserModel.scan().limit(50).exec();
    res.status(200).json(users);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/test', async (req: Request, res: Response) => {
  try {
    res.status(200).json('server test pass! 123');
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

// router.get('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;

//   try {
//     const user = await UserModel.get(id);
//     res.status(200).json(user);
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ error: 'Could not fetch user' });
//   }
// });

router.post('/', async (req: Request, res: Response) => {
  try {
    const user = new UserModel({
      id: uuidv4(),
      ...req.body,
    });
    user.save();
    res.status(201).json({ message: 'new item created', item: user });
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Could not create book' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    await UserModel.update({ id, name, email });
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Could not update user' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await UserModel.update({ id }, { isDeleted: true });
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Could not delete user' });
  }
});

export default router;
