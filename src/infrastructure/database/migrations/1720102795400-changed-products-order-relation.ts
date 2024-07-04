import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangedProductsOrderRelation1720102795400 implements MigrationInterface {
    name = 'ChangedProductsOrderRelation1720102795400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "FK_624f27796e6b8e45da0a202694a"`);
        await queryRunner.query(`CREATE TABLE "order_entity_products_product_entity" ("orderEntityId" integer NOT NULL, "productEntityId" integer NOT NULL, CONSTRAINT "PK_5322509495e49989e212f5eb881" PRIMARY KEY ("orderEntityId", "productEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_951264ef1da29b989128d97205" ON "order_entity_products_product_entity" ("orderEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9ed4576b473c912197318bc47e" ON "order_entity_products_product_entity" ("productEntityId") `);
        await queryRunner.query(`ALTER TABLE "order_entity" DROP COLUMN "productsId"`);
        await queryRunner.query(`ALTER TABLE "customer_entity" ADD "productsId" integer`);
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "FK_4480b7afbd07c9d3dfa5324862a"`);
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "UQ_4480b7afbd07c9d3dfa5324862a"`);
        await queryRunner.query(`ALTER TABLE "customer_entity" ADD CONSTRAINT "FK_b66bd94329ed117b70c6ecce593" FOREIGN KEY ("productsId") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "FK_4480b7afbd07c9d3dfa5324862a" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_entity_products_product_entity" ADD CONSTRAINT "FK_951264ef1da29b989128d972050" FOREIGN KEY ("orderEntityId") REFERENCES "order_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_entity_products_product_entity" ADD CONSTRAINT "FK_9ed4576b473c912197318bc47e9" FOREIGN KEY ("productEntityId") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_entity_products_product_entity" DROP CONSTRAINT "FK_9ed4576b473c912197318bc47e9"`);
        await queryRunner.query(`ALTER TABLE "order_entity_products_product_entity" DROP CONSTRAINT "FK_951264ef1da29b989128d972050"`);
        await queryRunner.query(`ALTER TABLE "order_entity" DROP CONSTRAINT "FK_4480b7afbd07c9d3dfa5324862a"`);
        await queryRunner.query(`ALTER TABLE "customer_entity" DROP CONSTRAINT "FK_b66bd94329ed117b70c6ecce593"`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "UQ_4480b7afbd07c9d3dfa5324862a" UNIQUE ("customerId")`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "FK_4480b7afbd07c9d3dfa5324862a" FOREIGN KEY ("customerId") REFERENCES "customer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_entity" DROP COLUMN "productsId"`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD "productsId" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9ed4576b473c912197318bc47e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_951264ef1da29b989128d97205"`);
        await queryRunner.query(`DROP TABLE "order_entity_products_product_entity"`);
        await queryRunner.query(`ALTER TABLE "order_entity" ADD CONSTRAINT "FK_624f27796e6b8e45da0a202694a" FOREIGN KEY ("productsId") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
