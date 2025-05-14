-- CreateTable
CREATE TABLE "clientes" (
    "idcliente" BIGSERIAL NOT NULL,
    "dtregistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nmcliente" VARCHAR(60) NOT NULL,
    "emailcliente" VARCHAR(60) NOT NULL,
    "senhacliente" VARCHAR(60) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("idcliente")
);

-- CreateTable
CREATE TABLE "enderecoscliente" (
    "idenderecocliente" BIGSERIAL NOT NULL,
    "idcliente" BIGINT NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "bairro" VARCHAR(60) NOT NULL,
    "logradouro" VARCHAR(60) NOT NULL,
    "numero" VARCHAR(60),
    "complemento" VARCHAR(60),
    "cidadecliente" VARCHAR(60) NOT NULL,
    "ufcliente" VARCHAR(2) NOT NULL,

    CONSTRAINT "enderecoscliente_pkey" PRIMARY KEY ("idenderecocliente")
);

-- CreateTable
CREATE TABLE "prestadores" (
    "idprestador" BIGSERIAL NOT NULL,
    "dtregistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nmprestador" VARCHAR(60) NOT NULL,
    "cpfprestador" VARCHAR(11) NOT NULL,
    "senhaprestador" VARCHAR(60) NOT NULL,
    "cidadeprestador" VARCHAR(60) NOT NULL,
    "ufprestador" VARCHAR(2) NOT NULL,
    "celularprestador" VARCHAR(20),
    "emailprestador" VARCHAR(60),
    "whatsapp" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "prestadores_pkey" PRIMARY KEY ("idprestador")
);

-- CreateTable
CREATE TABLE "servicos" (
    "idservico" BIGSERIAL NOT NULL,
    "nmservico" VARCHAR(60) NOT NULL,
    "tipocargahoraria" INTEGER NOT NULL DEFAULT 1,
    "observacao" VARCHAR(160),

    CONSTRAINT "servicos_pkey" PRIMARY KEY ("idservico")
);

-- CreateTable
CREATE TABLE "servicosprestadores" (
    "idservicoprestador" BIGSERIAL NOT NULL,
    "idservico" BIGINT NOT NULL,
    "idprestador" BIGINT NOT NULL,

    CONSTRAINT "servicosprestadores_pkey" PRIMARY KEY ("idservicoprestador")
);

-- CreateTable
CREATE TABLE "servicosagendados" (
    "idservicoagendado" BIGSERIAL NOT NULL,
    "idservico" BIGINT NOT NULL,
    "idprestador" BIGINT NOT NULL,
    "idcliente" BIGINT NOT NULL,
    "dtregistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dtprevisto" DATE NOT NULL,
    "horainicio" VARCHAR(5) NOT NULL,
    "horafim" VARCHAR(5),
    "situacao" INTEGER NOT NULL,

    CONSTRAINT "servicosagendados_pkey" PRIMARY KEY ("idservicoagendado")
);

-- CreateTable
CREATE TABLE "agendaprestador" (
    "idagendaprestador" BIGSERIAL NOT NULL,
    "idprestador" BIGINT NOT NULL,
    "idservicoagendado" BIGINT,
    "dtregistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dtprevisto" DATE NOT NULL,
    "horainicio" VARCHAR(5) NOT NULL,
    "horafim" VARCHAR(5),

    CONSTRAINT "agendaprestador_pkey" PRIMARY KEY ("idagendaprestador")
);

-- CreateTable
CREATE TABLE "avaliacoescliente" (
    "idavaliacaocliente" BIGSERIAL NOT NULL,
    "idservicoagendado" BIGINT NOT NULL,
    "dtregistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nota" INTEGER NOT NULL,

    CONSTRAINT "avaliacoescliente_pkey" PRIMARY KEY ("idavaliacaocliente")
);
