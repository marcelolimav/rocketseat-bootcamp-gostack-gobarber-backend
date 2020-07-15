import ICreteNotificationDTO from '../dtos/ICreteNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(data: ICreteNotificationDTO): Promise<Notification>;
}
