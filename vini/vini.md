```sql
    CREATE DATABASE  feng_vini CHARACTER SET utf8mb4;
```

```sql

CREATE TABLE base_assinantes(
    idassinante INT NOT NULL PRIMARY KEY,
    sexo CHAR(1) NOT NULL,
    data_nascimento DATETIME NOT NULL,
    estado_civil VARCHAR(20),
    escolaridade VARCHAR(20),
    cidade VARCHAR(20),
    uf CHAR(2)
)DEFAULT CHARSET=utf8;

CREATE TABLE base_contratos(
    idcontrato	INT NOT NULL PRIMARY KEY,
    idassinante	INT NOT NULL,
    plano CHAR(1), 
    forma_pagamento	VARCHAR(60), 
    duracao_plano	INT,
    data_inicial	DATETIME,
    data_final	DATETIME,
    CONSTRAINT fk_base_assinantes FOREIGN KEY (idassinante)  REFERENCES base_assinantes(idassinante)
 )DEFAULT CHARSET=utf8;

CREATE TABLE base_cobrancas(
    idcobranca	INT NOT NULL PRIMARY KEY,
    idcontrato	INT NOT NULL,
    status_parcela CHAR(2), 
    data_vencimento	DATETIME,
    data_pagamento	DATETIME,
    data_cancelamento DATETIME,
    valor_cobrança FLOAT(6,2),
    CONSTRAINT fk_base_contratos FOREIGN KEY (idcontrato)  REFERENCES base_contratos(idcontrato)
 )DEFAULT CHARSET=utf8;



```