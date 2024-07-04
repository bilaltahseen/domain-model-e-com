import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCustomerFieldInOrder1720098994888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_entity" ADD "customerId" integer`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "FK_124f27796e6b8e42dc0b202694a" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "FK_124f27796e6b8e42dc0b202694a"`);
        await queryRunner.query(`ALTER TABLE "order_entity" DROP COLUMN "customerId"`);
    }

}
