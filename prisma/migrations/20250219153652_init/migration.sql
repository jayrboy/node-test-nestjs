-- CreateEnum
CREATE TYPE "StationType" AS ENUM ('MOBILE_STATION', 'WATER_STATION', 'INTAKE_STATION', 'MEASUREMENT_STATION', 'PUBLIC_RAIL', 'RID_MEASUREMENT_STATION', 'RID_INTAKE_STATION');

-- CreateEnum
CREATE TYPE "StationUserGroup" AS ENUM ('ADMINISTRATOR', 'SUBSCRIBER', 'OPERATOR');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE', 'DELETED');

-- CreateTable
CREATE TABLE "station_catalogs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "StationType" NOT NULL,
    "sub_types" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "device_rules" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "pictures" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "icon" TEXT,
    "plc_template_id" TEXT,

    CONSTRAINT "station_catalogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "station_metas" (
    "code" TEXT NOT NULL,
    "name" TEXT,
    "short_name" TEXT,

    CONSTRAINT "station_metas_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "station_users" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "station_id" TEXT NOT NULL,
    "group" "StationUserGroup" NOT NULL DEFAULT 'OPERATOR',

    CONSTRAINT "station_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "ext_station_id" TEXT,
    "ext_station_code" TEXT,
    "station_catalog_id" TEXT,
    "station_meta_code" TEXT,
    "address" TEXT,
    "basin_name" TEXT,
    "sub_basin_name" TEXT,
    "river" TEXT,
    "amphur_name" TEXT,
    "tambon_name" TEXT,
    "province_name" TEXT,
    "phone" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "pictures" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "bank_fr_height" DOUBLE PRECISION,
    "bank_fl_height" DOUBLE PRECISION,
    "bank_br_height" DOUBLE PRECISION,
    "bank_bl_height" DOUBLE PRECISION,
    "bank_r_height" DOUBLE PRECISION,
    "bank_l_height" DOUBLE PRECISION,
    "thresholds" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "floating_switch_level" DOUBLE PRECISION,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "layout_picture" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "info" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "owner_name" TEXT,
    "project_name" TEXT,
    "source_group" TEXT,
    "alias_code" TEXT,

    CONSTRAINT "stations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "station_users_user_id_station_id_key" ON "station_users"("user_id", "station_id");

-- AddForeignKey
ALTER TABLE "station_users" ADD CONSTRAINT "station_users_station_id_fkey" FOREIGN KEY ("station_id") REFERENCES "stations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stations" ADD CONSTRAINT "stations_station_catalog_id_fkey" FOREIGN KEY ("station_catalog_id") REFERENCES "station_catalogs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stations" ADD CONSTRAINT "stations_station_meta_code_fkey" FOREIGN KEY ("station_meta_code") REFERENCES "station_metas"("code") ON DELETE SET NULL ON UPDATE CASCADE;
