import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

const tableName = 'appointments';

export default class AlterProviderFieldProviderID1591478145528
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(tableName, 'provider');
    await queryRunner.addColumn(
      tableName,
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      tableName,
      new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(tableName, 'AppointmentProvider');
    await queryRunner.dropColumn(tableName, 'provider_id');
    await queryRunner.addColumn(
      tableName,
      new TableColumn({
        name: 'provider',
        type: 'varchar',
      }),
    );
  }
}
