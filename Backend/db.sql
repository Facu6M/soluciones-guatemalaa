-- Crear la tabla de Clientes
CREATE TABLE Clientes (
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    correo_electronico VARCHAR(100)
)


-- Crear la tabla de Productos con ID autoincremental
CREATE TABLE Productos (
    id_producto int PRIMARY KEY,
    codigo_barras VARCHAR(50),
    nombre_producto VARCHAR(100),
    descripcion VARCHAR(255),
    categoria VARCHAR(50),
    precio DECIMAL(10, 2)
)


-- Crear la tabla de Ventas FALTA ESTA
CREATE TABLE Ventas (
    id_venta int PRIMARY KEY,
    fecha_venta DATE,
    id_cliente INT,
    id_producto INT,
    cantidad INT,
    total_venta DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
)

