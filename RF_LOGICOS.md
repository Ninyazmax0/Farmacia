# Requisitos Funcionales - Orden Logico
## Farmacia Santa Cruz

Fecha: 21 de Marzo 2026
Hora: 7:36 PM 

---

## SEGURIDAD (Lo primero que debe existir)

### RF-001: Inicio de Sesion y Autenticacion
- Codigo: RF-001
- Nombre: Inicio de Sesion y Autenticacion
- Descripcion: El sistema debe permitir el acceso mediante usuario y contrasena, validando credenciales y asignando permisos segun el rol.
- Prioridad: ALTA
- Actor(es): Administrador, Vendedor, Cajero
- Clase del diagrama: Usuario.iniciarSesion(), Usuario.verificarPermisos(), Usuario.verificarRol()
- Nota: Se fusiono con RF-002 porque iniciar sesion YA incluye validar credenciales.

---

## INVENTARIO (Segundo - tener productos para vender)

### RF-002: Registrar Productos
- Codigo: RF-002
- Nombre: Registrar Productos
- Descripcion: Permitir el registro de nuevos productos con nombre, precio, stock, laboratorio, fecha de vencimiento y categoria.
- Prioridad: ALTA
- Actor(es): Administrador
- Clase del diagrama: Producto + Categoria

### RF-003: Registrar Compras (NUEVO - necesario para RF-006)
- Codigo: RF-003
- Nombre: Registrar Compras
- Descripcion: Registrar la compra de productos a proveedores, actualizando el stock y el precio de costo.
- Prioridad: ALTA
- Actor(es): Administrador
- Clase del diagrama: Compra + DetalleCompra

---

## VENTAS (Tercer paso - vender lo que tienes)

### RF-004: Registrar Ventas
- Codigo: RF-004
- Nombre: Registrar Ventas
- Descripcion: Registrar ventas, calcular total, generar factura y descontar stock.
- Prioridad: ALTA
- Actor(es): Vendedor, Cajero
- Clase del diagrama: Venta + DetalleVenta + Producto.reducirStock()

### RF-005: Registrar Clientes
- Codigo: RF-005
- Nombre: Registrar Clientes
- Descripcion: Registrar informacion de clientes para facturacion, seguimiento y programa de fidelizacion.
- Prioridad: MEDIA
- Actor(es): Vendedor
- Clase del diagrama: Cliente

---

## CONTROL Y REPORTES (Lo ultimo - analizar lo que haces)

### RF-006: Monitoreo de Costos
- Codigo: RF-006
- Nombre: Monitoreo de Costos
- Descripcion: Detectar cambios en costo de compra de proveedores y sugerir actualizacion de precio de venta.
- Prioridad: MEDIA
- Actor(es): Administrador
- Clase del diagrama: Compra + Producto.precioCosto + Producto.actualizarPrecio()

### RF-007: Alerta de Caducidad
- Codigo: RF-007
- Nombre: Alerta de Caducidad
- Descripcion: Generar alertas para medicamentos proximos a vencer y productos con stock bajo.
- Prioridad: ALTA
- Actor(es): Administrador
- Clase del diagrama: Alerta + Producto.verificarVencimiento() + Producto.estaBajoStock()

### RF-008: Generar Reportes
- Codigo: RF-008
- Nombre: Generar Reportes
- Descripcion: Generar reportes de inventario, ventas, compras, productos proximos a vencer y ganancias.
- Prioridad: MEDIA
- Actor(es): Administrador
- Clase del diagrama: Reporte

---

## AUDITORIA (Siempre presente - seguridad)

### RF-009: Bitacora del Sistema
- Codigo: RF-009
- Nombre: Registro de Acciones (Bitacora)
- Descripcion: Registrar todas las acciones importantes del sistema (login, ventas, cambios de precios, etc.) para auditoria.
- Prioridad: MEDIA
- Actor(es): Sistema
- Clase del diagrama: Bitacora

---

## Resumen - Orden Logico

| Orden | Codigo | Nombre | Justificacion |
|-------|--------|--------|---------------|
| 1 | RF-001 | Inicio de Sesion y Autenticacion | Primero el usuario debe acceder |
| 2 | RF-002 | Registrar Productos | Segundo, tener que vender |
| 3 | RF-003 | Registrar Compras | Tercero, reabastecer inventario |
| 4 | RF-004 | Registrar Ventas | Cuarto, vender los productos |
| 5 | RF-005 | Registrar Clientes | Quinto, registrar compradores (opcional) |
| 6 | RF-006 | Monitoreo de Costos | Sexto, analizar costos |
| 7 | RF-007 | Alerta de Caducidad | Septimo, mantener calidad |
| 8 | RF-008 | Generar Reportes | Octavo, analizar el negocio |
| 9 | RF-009 | Bitacora | Siempre presente |

---

## Diferencias con el documento original

| Original | Nuevo | Razon |
|----------|-------|-------|
| RF-001 + RF-002 | RF-001 (fusionados) | Eran redundantes |
| RF-004 Registrar Ventas | RF-004 Registrar Compras | Habia conflicto de numeros |
| - | RF-004 Ventas | Ahora es RF-004 |
| - | RF-005 Clientes | Ahora es RF-005 |
| - | RF-006 Monitoreo | Ahora es RF-006 (antes RF-006) |
| - | RF-007 Alerta | Ahora es RF-007 (antes RF-007) |
| - | RF-008 Reportes | Ahora es RF-008 (antes RF-008) |
| - | RF-009 Bitacora | NUEVO - necesario para empresa real |