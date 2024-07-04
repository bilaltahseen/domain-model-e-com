import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductAndOrderEntity1720096918033 implements MigrationInterface {
    name = 'ProductAndOrderEntity1720096918033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order_entity" ("id" SERIAL NOT NULL, "total" integer NOT NULL, CONSTRAINT "PK_428b558237e70f2cd8462e1bea1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "currency" character varying NOT NULL, "sku" character varying NOT NULL, "orderId" integer, "sellerId" integer, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD CONSTRAINT "FK_f3f80a69f920554c04dd0fd1bb8" FOREIGN KEY ("orderId") REFERENCES "order_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD CONSTRAINT "FK_76891dffc20e4764045d48a9444" FOREIGN KEY ("sellerId") REFERENCES "customer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_entity" DROP CONSTRAINT "FK_76891dffc20e4764045d48a9444"`);
        await queryRunner.query(`ALTER TABLE "product_entity" DROP CONSTRAINT "FK_f3f80a69f920554c04dd0fd1bb8"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
        await queryRunner.query(`DROP TABLE "order_entity"`);
    }

}
