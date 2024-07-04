import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductAndOrderEntityRelationFixed1720097312817 implements MigrationInterface {
    name = 'ProductAndOrderEntityRelationFixed1720097312817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_entity" DROP CONSTRAINT "FK_f3f80a69f920554c04dd0fd1bb8"`);
        await queryRunner.query(`ALTER TABLE "product_entity" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD "productsId" integer`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "FK_624f27796e6b8e45da0a202694a" FOREIGN KEY ("productsId") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "FK_624f27796e6b8e45da0a202694a"`);
        await queryRunner.query(`ALTER TABLE "order_entity" DROP COLUMN "productsId"`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD CONSTRAINT "FK_f3f80a69f920554c04dd0fd1bb8" FOREIGN KEY ("orderId") REFERENCES "order_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
