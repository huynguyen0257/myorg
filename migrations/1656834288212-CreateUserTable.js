const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateUserTable1656834288212 {
    name = 'CreateUserTable1656834288212'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying(36) NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "first_name" character varying, "last_name" character varying, "dob" TIMESTAMP, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
