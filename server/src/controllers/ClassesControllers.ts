import { Request, Response } from "express";

import db from "../database/connection";
import convertHoursToMinutes from "../utils/convertHoursToMinutes";

interface ScheduleTypeItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesContollers {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: "Erro ao filtrar as classes.",
      });
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await db("classes")
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const txr = await db.transaction();

    try {
      const insertedUsersId = await txr("users").insert({
        name,
        avatar,
        bio,
        whatsapp,
      });

      const user_id = insertedUsersId[0];

      const insertedClassesId = await txr("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesId[0];

      const classSchedule = schedule.map((element: ScheduleTypeItem) => {
        return {
          class_id,
          week_day: element.week_day,
          from: convertHoursToMinutes(element.from),
          to: convertHoursToMinutes(element.to),
        };
      });

      await txr("class_schedule").insert(classSchedule);

      await txr.commit();

      return response.status(201).send();
    } catch (error) {
      console.error(error);

      await txr.rollback();

      return response.status(400).json({
        erro: "Erro ao criar usuário e classes.",
      });
    }
  }
}
