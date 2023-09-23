CREATE TABLE
    Category (
        id SERIAL NOT NULL,
        name VARCHAR(100) NOT NULL,
        createdAt TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    Product (
        id SERIAL NOT NULL,
        name VARCHAR(100) NOT NULL,
        price DECIMAL,
        createdAt TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
        categoryId INT,
        PRIMARY KEY ("id"),
        FOREIGN KEY(categoryId) REFERENCES Category(id)
    );

CREATE TABLE
    Users (
        id SERIAL NOT NULL,
        createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        CONSTRAINT "User_pkey" PRIMARY KEY ("id")
    );

CREATE TABLE
    Tenants (
        id SERIAL NOT NULL,
        createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
    );

CREATE TABLE
    Countries (
        id SERIAL NOT NULL,
        name VARCHAR(100) NOT NULL,
        PRIMARY KEY(id)
    );

CREATE TABLE
    Provinces (
        id SERIAL NOT NULL,
        name VARCHAR(100) NOT NULL,
        countryId INT,
        PRIMARY KEY(id),
        FOREIGN KEY(countryId) REFERENCES Countries(id)
    );

CREATE TABLE
    Cities (
        id SERIAL NOT NULL,
        name VARCHAR(100) NOT NULL,
        provinceId INT,
        countryId INT,
        PRIMARY KEY(id),
        FOREIGN KEY(provinceId) REFERENCES Provinces(id),
        FOREIGN KEY(countryId) REFERENCES Countries(id)
    );

CREATE TABLE
    Units (
        id SERIAL NOT NULL,
        address VARCHAR(100) NOT NULL,
        unitType VARCHAR(50) NOT NULL DEFAULT 'APPARTMENT',
        userId INT,
        countryId INT,
        provinceId INT,
        cityId INT,
        PRIMARY KEY (id),
        FOREIGN KEY(countryId) REFERENCES Countries(id),
        FOREIGN KEY(provinceId) REFERENCES Provinces(id),
        FOREIGN KEY(cityId) REFERENCES Cities(id)
    );

CREATE TABLE
    Rents (
        id TEXT NOT NULL,
        rentedAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        tenantId INTEGER NOT NULL,
        unitId INTEGER NOT NULL,
        CONSTRAINT "Rent_pkey" PRIMARY KEY ("id")
    );

-- select * from units WHERE location LIKE '%N%' AND unittype = 'Apartment'

-- CREATE TABLE "Location" (

--     "id" SERIAL NOT NULL,

--     "abbreviation" TEXT NOT NULL,

--     "province" TEXT NOT NULL,

--     CONSTRAINT "Location_pkey" PRIMARY KEY ("id")

-- );