import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTodo1664743700122 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "todo",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "todo",
            type: "varchar",
          },
          {
            name: "create_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("todo");
  }
}
