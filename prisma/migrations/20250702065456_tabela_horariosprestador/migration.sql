-- CreateTable
CREATE TABLE "horariosprestador" (
    "idhorarioprestador" BIGSERIAL NOT NULL,
    "idprestador" BIGINT NOT NULL,
    "diadesemana" BOOLEAN NOT NULL DEFAULT false,
    "sabado" BOOLEAN NOT NULL DEFAULT false,
    "domingoferiado" BOOLEAN NOT NULL DEFAULT false,
    "horarios" TEXT[],

    CONSTRAINT "horariosprestador_pkey" PRIMARY KEY ("idhorarioprestador")
);
