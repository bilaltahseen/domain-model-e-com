import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedJoinColumn1720100213260 implements MigrationInterface {
    name = 'AddedJoinColumn1720100213260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "FK_124f27796e6b8e42dc0b202694a"`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "UQ_4480b7afbd07c9d3dfa5324862a" UNIQUE ("customerId")`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "FK_4480b7afbd07c9d3dfa5324862a" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "FK_4480b7afbd07c9d3dfa5324862a"`);
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "UQ_4480b7afbd07c9d3dfa5324862a"`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "FK_124f27796e6b8e42dc0b202694a" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
