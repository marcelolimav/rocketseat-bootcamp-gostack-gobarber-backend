import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

import AppError from '../errors/AppError';

/**
 * [x] Recebimento das infromações
 * [x/x] Tratativa de erros/excessões
 * [x] Acesso ao repositório
 */

interface Request {
  provider_id: string;
  date: Date;
}

/**
 * O que aplicamos até aqui do SOLID
 * S = Single Responsability Principle
 * D = Dependency Inversion Principle
 */

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked.');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
