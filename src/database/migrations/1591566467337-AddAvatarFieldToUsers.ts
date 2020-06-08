import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

const tableName = 'users';
export default class AddAvatarFieldToUsers1591566467337
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      tableName,
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(tableName, 'avatar');
  }
}
