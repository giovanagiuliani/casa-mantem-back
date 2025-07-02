-- CreateTable
CREATE TABLE "favoritoscliente" (
    "idfavoritocliente" BIGSERIAL NOT NULL,
    "idprestador" BIGINT NOT NULL,
    "idcliente" BIGINT NOT NULL,

    CONSTRAINT "favoritoscliente_pkey" PRIMARY KEY ("idfavoritocliente")
);
