import { subjectRepository } from './../repositories/subjectRepository';
import { Request, Response } from "express";

export class SubjectController {
  async create(req: Request, res: Response) {

    const { name } = req.body
    if (!name) {
      return res.status(400).json({ message: "Campo nome obrigatório." });
    }

    try {
      const newSubject = subjectRepository.create({name})

      await subjectRepository.save(newSubject)

      console.log(newSubject)

      res.status(201).json(newSubject)

    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }
}
