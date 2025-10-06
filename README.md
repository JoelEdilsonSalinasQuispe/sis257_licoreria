# sis257_Licoreria
# Descripción del negocio
La licorería “Chupe C++” es un emprendimiento dedicado a la venta de bebidas alcohólicas nacionales e importadas, que busca modernizar su modelo de gestión mediante la implementación de un sistema informático integral.
El propósito principal del proyecto es desarrollar una aplicación web completa que permita centralizar la administración de la licorería, abarcando desde la gestión de productos y usuarios hasta el registro de ventas y control de inventario.
El sistema ofrecerá una interfaz intuitiva tanto para los clientes como para los administradores. Los clientes podrán registrarse, consultar el catálogo de productos, realizar pedidos y revisar su historial de compras. Los administradores, por su parte, contarán con herramientas para agregar, editar o eliminar productos, verificar el stock, gestionar los datos de los usuarios y revisar las ventas realizadas.
Este proyecto busca mejorar la eficiencia operativa del negocio, reducir errores en el manejo de información y ofrecer una experiencia moderna y confiable a los usuarios. A través de esta solución tecnológica, Chupe C++ aspira a digitalizar sus procesos, logrando un mayor control y una visión global del funcionamiento de la licorería.
# Descripción del sistema
El sistema a desarrollar será una aplicación web completa, compuesta por un frontend, un backend y una base de datos.
El frontend se encargará de la presentación visual y la interacción con el usuario, utilizando tecnologías como HTML, CSS y JavaScript.
El backend gestionará la lógica del negocio y la comunicación con la base de datos, empleando el lenguaje de programación Nest.js.
La base de datos será implementada en postgres y dbaber y contendrá toda la información relevante del negocio, organizada de forma estructurada y segura.
El sistema será escalable, modular y con una arquitectura tipo MVC (Modelo - Vista - Controlador), que permitirá mantener la separación entre la lógica del negocio, la presentación y la gestión de datos.
# Base de datos
El nombre de la base de datos será: sis257_licoreria
Esta base de datos almacenará la información esencial del sistema y se organizará en diferentes tablas relacionadas entre sí mediante claves primarias y foráneas. Las tablas tentativas son las siguientes:
# Tabla: usuarios
Esta tabla almacenará la información de las personas que interactúan con el sistema, tanto clientes como administradores. Permitirá controlar el acceso, los permisos y la identificación de cada usuario dentro del sistema.
Campos tentativos:
# id_usuario (INT, PK, autoincremental): Identificador único del usuario.
# nombre (VARCHAR): Nombre completo del usuario.
# correo (VARCHAR): Correo electrónico utilizado para iniciar sesión.
# contraseña (VARCHAR): Contraseña cifrada del usuario.
# rol (ENUM): Rol del usuario, puede ser “cliente” o “administrador”.
# fecha_registro (DATE): Fecha de creación del registro.
# Tabla: productos
Contendrá los datos de los productos que ofrece la licorería. Permitirá registrar cada bebida con sus características, precio y cantidad disponible en inventario.
Campos tentativos:
# id_producto (INT, PK, autoincremental): Identificador único del producto.
# nombre_producto (VARCHAR): Nombre comercial del producto.
# tipo (VARCHAR): Tipo de bebida (vino, cerveza, ron, etc.).
# marca (VARCHAR): Marca o fabricante.
# precio (DECIMAL): Precio unitario del producto.
# stock (INT): Cantidad disponible en el inventario.
# descripcion (TEXT): Breve descripción del producto.
# imagen_url (VARCHAR): Dirección o enlace de la imagen del producto.
# Tabla: ventas
La tabla de ventas registrará todas las transacciones realizadas por los usuarios. Estará relacionada con las tablas de usuarios y productos, y permitirá conocer los detalles de cada operación comercial.
# Campos tentativos:
# id_venta (INT, PK, autoincremental): Identificador único de la venta.
# id_usuario (INT, FK): Usuario que realizó la compra.
# fecha_venta (DATETIME): Fecha y hora de la transacción.
# monto_total (DECIMAL): Monto total de la venta.
# metodo_pago (VARCHAR): Forma de pago utilizada (efectivo, tarjeta, etc.).

