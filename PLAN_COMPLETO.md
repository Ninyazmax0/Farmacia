# Plan Completo del Proyecto - Farmacia Santa Cruz

Fecha: 21 de Marzo 2026
Hora: 8:54 PM (Hora local de El Salvador)

---

## Enfoque del Proyecto

Este es un SISTEMA DE INVENTARIO para una farmacia LOCAL. No es una pagina web, no es un sistema de clientes. El enfoque debe ser:

1. Control de inventario de medicamentos
2. Control de stock
3. Alertas de caducidad
4. Reportes de ventas y compras
5. Compras a proveedores
6. Ventas (sin registrar clientes)

No tiene sentido registrar clientes en una farmacia de barrio. La gente va, compra y se va. No necesitamos saber quien compro que.

---

## Informacion del Proyecto

Nombre: Desarrollo del diseño de prototipo de inventariado de la farmacia Santa Cruz
Institucion: The Repair of System
Responsables: Stiven, Joel, Guadalupe, Tiffany
Fecha inicio: 16 febrero 2026
Fecha termino: 20 marzo 2026
Duracion: 5 semanas
Modalidad: tiempo parcial - equipo de 4 personas
Beneficiarios directos: Duena de la farmacia, empleados
Tipo: Proyecto tecnologico-productivo
Area: Desarrollo de software
Categoria: Sistema de inventario para farmacia
Alcance: Local-municipio de San Martin
Pais: El Salvador
Departamento: San Salvador
Municipio: San Martin
Institucion: La Farmacia Santa Cruz ubicada en el pasaje parroquial y avenida norte, San Martin Norte

---

## Problematica

La farmacia Santa Cruz gestiona anualmente $12,000 en medicamentos y productos de uso personal, sin embargo su modelo de registro manual le ha causado distintos conflictos:

1. Disminucion de clientes por falta de organizacion en el inventario
2. Perdida de $400 por los ultimos 2 años debido a productos vencidos no detectados
3. Dificultad para conocer existencias reales de medicamentos
4. Problemas para detectar cambios de precios en compras a proveedores
5. Ineficiencia en la busqueda de productos
6. Falta de reportes que permitan tomar decisiones basadas en datos

---

## Beneficios detectados

- 40% de reduccion de perdidas
- 30% de ahorro por registros exactos del inventario
- El proyecto es viable, eficiente y representa una buena inversion

---

## Objetivo general

Desarrollar e implementar un sistema digital de inventario para la Farmacia Santa Cruz que permita organizar y controlar los medicamentos, reduciendo las perdidas economicas.

---

## Objetivos especificos

1. Registrar todos los medicamentos en el sistema
2. Controlar el stock de productos
3. Detectar productos proximos a vencer
4. Facilitar la busqueda de medicamentos
5. Generar reportes de inventario y ventas
6. Registrar compras a proveedores
7. Registrar ventas de productos

---

## Requisitos funcionales

| Codigo | Nombre | Descripcion | Actor(es) | Prioridad |
|--------|--------|-------------|-----------|-----------|
| RF-001 | Inicio de Sesion | El sistema debe permitir el acceso mediante usuario y contrasena | Administrador, Vendedor | Alta |
| RF-002 | Registrar Productos | Permitir el registro de nuevos productos con nombre, precio, stock, laboratorio, fecha de vencimiento y categoria | Administrador | Alta |
| RF-003 | Registrar Compras | Registrar la compra de productos a proveedores, actualizando el stock y el precio de costo | Administrador | Alta |
| RF-004 | Registrar Ventas | Registrar ventas, calcular total, generar factura y descontar stock | Vendedor | Alta |
| RF-005 | Monitoreo de Costos | Detectar cambios en costo de compra y sugerir actualizacion de precio | Administrador | Media |
| RF-006 | Alerta de Caducidad | Generar alertas para medicamentos proximos a vencer | Administrador | Alta |
| RF-007 | Generar Reportes | Generar reportes de inventario, ventas y vencimientos | Administrador | Media |

---

## Casos de uso

### CU-01: Inicio de Sesion
Actor Principal: Administrador, Vendedor
Precondiciones:
1. El usuario debe estar registrado en el sistema
2. El sistema debe estar activo

Flujo Principal:
1. Usuario ingresa usuario y contrasena
2. Sistema valida credenciales
3. Sistema permite acceso

Flujos Alternativos:
- FA-01: Credenciales incorrectas - mensaje de error

Postcondiciones:
1. Usuario autenticado

### CU-02: Registrar Productos
Actor Principal: Administrador
Precondiciones:
1. Administrador autenticado
2. Producto no existe en sistema

Flujo Principal:
1. Administrador ingresa datos del producto (nombre, precio, stock, laboratorio, fecha de vencimiento, categoria)
2. Sistema valida los datos
3. Sistema guarda producto en BD
4. Sistema confirma el registro

Flujos Alternativos:
- FA-01: Datos invalidos - solicita correccion

Postcondiciones:
1. Producto registrado en inventario

### CU-03: Registrar Compras
Actor Principal: Administrador
Precondiciones:
1. Administrador autenticado
2. Proveedor registrado en sistema
3. Productos existentes en inventario

Flujo Principal:
1. Administrador selecciona proveedor
2. Administrador selecciona productos a comprar
3. Sistema calcula subtotal
4. Administrador ingresa cantidad y precio de costo
5. Sistema calcula total
6. Administrador confirma la compra
7. Sistema actualiza stock de productos
8. Sistema registra precio de costo

Flujos Alternativos:
- FA-01: Producto no existe - solicita registro de producto
- FA-02: Proveedor no registrado - solicita registro de proveedor

Postcondiciones:
1. Compra registrada
2. Stock actualizado
3. Precio de costo registrado

### CU-04: Registrar Ventas
Actor Principal: Vendedor
Precondiciones:
1. Usuario autenticado
2. Productos existentes en inventario con stock disponible

Flujo Principal:
1. Vendedor selecciona productos a vender
2. Sistema calcula subtotal
3. Vendedor ingresa cantidad
4. Sistema calcula total
5. Vendedor confirma la venta
6. Sistema genera factura
7. Sistema descuenta stock del inventario

Flujos Alternativos:
- FA-01: Producto sin stock - advertencia al vendedor

Postcondiciones:
1. Venta registrada
2. Factura generada
3. Stock actualizado

### CU-05: Monitoreo de Costos
Actor Principal: Administrador
Precondiciones:
1. Administrador autenticado
2. Registro de compras disponible en BD

Flujo Principal:
1. Administrador selecciona producto
2. Sistema muestra historial de precios de costo
3. Sistema detecta cambios de precio
4. Sistema sugiere ajuste de precio de venta
5. Administrador confirma o rechaza el ajuste

Flujos Alternativos:
- FA-01: Sin cambios detectados - no generar sugerencia

Postcondiciones:
1. Precios actualizados si el admin lo confirma

### CU-06: Alerta de Caducidad
Actor Principal: Administrador
Precondiciones:
1. Productos con fecha de vencimiento registrada en BD

Flujo Principal:
1. Sistema verifica fechas de vencimiento diariamente
2. Sistema identifica productos proximos a vencer (30 dias)
3. Sistema genera alerta visible
4. Sistema notifica al Administrador

Flujos Alternativos:
- FA-01: Sin productos proximos a vencer - no generar alerta

Postcondiciones:
1. Alertas visibles en el panel del sistema

### CU-07: Generar Reportes
Actor Principal: Administrador
Precondiciones:
1. Administrador autenticado
2. Datos disponibles en el sistema

Flujo Principal:
1. Administrador selecciona tipo de reporte (inventario, ventas, compras, vencimientos)
2. Sistema consulta los datos necesarios
3. Sistema genera el reporte
4. Sistema muestra vista previa
5. Administrador exporta o imprime

Flujos Alternativos:
- FA-01: Sin datos disponibles - mostrar mensaje de advertencia

Postcondiciones:
1. Reporte generado correctamente

---

## Orden logico de casos de uso

| Orden | Codigo | Nombre | Justificacion |
|-------|--------|--------|---------------|
| 1 | CU-01 | Inicio de Sesion | Primero el usuario debe acceder al sistema |
| 2 | CU-02 | Registrar Productos | Para tener inventario, primero hay que registrar productos |
| 3 | CU-03 | Registrar Compras | Para reabastecer el inventario, se necesitan registrar compras a proveedores |
| 4 | CU-04 | Registrar Ventas | Con productos registrados, se pueden realizar ventas |
| 5 | CU-05 | Monitoreo de Costos | Durante compras, se monitorean cambios de precios |
| 6 | CU-06 | Alerta de Caducidad | El sistema alerta sobre productos proximos a vencer |
| 7 | CU-07 | Generar Reportes | Finalmente, se generan reportes para analisis

---

## Diagrama de clases

### Clases necesarias:
1. Usuario - Login y control de acceso
2. Proveedor - Proveedores de medicamentos
3. Categoria - Organizacion de productos
4. Producto - Inventario
5. Compra - Compras a proveedores
6. DetalleCompra - Detalle de compras
7. Venta - Ventas realizadas
8. DetalleVenta - Detalle de ventas
9. Alerta - Notificaciones de caducidad
10. Reporte - Generacion de reportes

### Relaciones:
- Usuario "1" --> "*" Venta (Asociacion)
- Usuario "1" --> "*" Compra (Asociacion)
- Proveedor "1" --> "*" Compra (Asociacion)
- Producto "*" --> "1" Categoria (Asociacion)
- Venta "1" *-- "1..*" DetalleVenta (Composicion)
- Compra "1" *-- "1..*" DetalleCompra (Composicion)
- DetalleVenta "*" --> "1" Producto (Asociacion)
- DetalleCompra "*" --> "1" Producto (Asociacion)
- Producto "1" o-- "*" Alerta (Agregacion)
- Reporte "1" o-- "*" Venta (Agregacion)
- Reporte "1" o-- "*" Producto (Agregacion)
- Reporte "1" o-- "*" Compra (Agregacion)

---

## Resumen de cambios realizados

### Cambios en requisitos:
- Eliminado RF-005 (Registrar Clientes) - no tiene sentido en una farmacia local
- Fusionado RF-001 y RF-002 en RF-001 (Inicio de Sesion)
- Agregado RF-003 (Registrar Compras) - necesario para RF-005
- Actores corregidos: solo personas (Administrador, Vendedor)
- Eliminado "Sistema" como actor
- Eliminado "Cajero" como actor - no es necesario

### Cambios en casos de uso:
- Eliminado CU-05 (Registrar Clientes) - no tiene sentido
- Fusionado CU-01 y CU-02 en CU-01 (Inicio de Sesion)
- Agregado CU-03 (Registrar Compras)
- Actores corregidos en todos los CU
- Orden logico recalculado

### Cambios en diagrama de clases:
- Eliminada clase Cliente - no es necesaria
- Eliminada clase Persona - no es necesaria (Usuario no hereda de nadie)
- Eliminada clase Bitacora - no es necesaria para el MVP
- Agregadas clases: Proveedor, Compra, DetalleCompra, Categoria
- Relaciones actualizadas
- Foreign Keys definidas

---

## Tareas pendientes

1. Actualizar el HTML con los nuevos requisitos y casos de uso
2. Actualizar diagrama de clases
3. Generar imagen del diagrama de clases
4. Verificar consistencia entre todos los documentos