import { Request, Response } from 'express';
import State from '../models/state';
import user from '../models/user';
import state from '../models/state';

export const createState = async (req: Request, res: Response) => {
  console.log("inside crating state");
  const { name, description, status, createdBy } = req.body;

  const newState = new State({
    name,
    description,
    status,
    createdBy,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  try {
    const savedState = await newState.save();
    res.status(201).json(savedState);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create state' });
  }
};

export const updateState = async (req: Request, res: Response) =>{
  const { name, id, status } = req.body;
try{
  console.log("inside update"+name +id+status);
 const updatedJson =  await state.findOneAndUpdate({name: name,id:id},{status:status,updatedAt: new Date()},{new:true});
 res.status(201).json(updatedJson);
}
catch(error){
  res.status(500).json({ error: 'Failed to Update state' });
}
}


export const deleteState = async (req: Request, res: Response) =>{
  const { name, id} = req.body;
try{
  await state.deleteOne({name: name,id:id});
 res.status(201).json({"message":"deleted successfully"});
}
catch(error){
  res.status(500).json({ error: 'Failed to Update state' });
}
}

export const readState = async (req: Request, res: Response) =>{
  const { name} = req.params;
try{
  const responseState = await state.findOne({name: name}).exec();
 res.status(201).json(responseState);
}
catch(error){
  res.status(500).json({ error: 'Failed to retrieve state' });
}
}