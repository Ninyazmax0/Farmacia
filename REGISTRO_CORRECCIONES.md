# Registro de Correcciones - Diagrama de Clases

## Fecha: 22 de Marzo 2026
## Proyecto: Sistema Inventario Farmacia Santa Cruz

---

## ✅ Correcciones Realizadas (Sesión 1 - 21 Marzo)

### 1. Eliminación de clases innecesarias
**Problema:** El diagrama incluía clases que no estaban en los requisitos funcionales.
**Corrección:** Se eliminaron:
- Proveedor (no documentado en RF)
- Categoria (no documentado en RF)
- Bitacora (no documentado en RF)
- Compra/DetalleCompra (no documentado en RF)

**Resultado:** Diagrama más simple y apegado a los 8 requisitos originales.

---

### 2. Eliminación de atributos innecesarios
**Problema:** Se incluyeron atributos que no estaban en los requisitos.
**Corrección:** Se eliminaron:
- Cliente.puntosFidelidad (no está en RF-005)
- Cliente.email (no está en RF-005)
- Alerta.tipo (solo hay alerta de caducidad en RF-007)
- Producto.descripcion (RF-003 solo menciona nombre, precio, stock, laboratorio, fechaVencimiento)
- Producto.estaActivo (no está en requisitos)

**Resultado:** Atributos coinciden exactamente con los requisitos originales.

---

### 3. Corrección de relaciones
**Problema:** Relaciones mal dirigidas o con cardinalidad incorrecta.
**Corrección:**
- DetalleVenta → Producto: Se agregó la relación
- Alerta → Producto: Se cambió cardinalidad
- Se eliminó relación redundante Proveedor → Producto

**Resultado:** Relaciones coherentes con la lógica del negocio.

---

### 4. Agregación de Primary Keys (PK) y Foreign Keys (FK)
**Corrección:** Se agregaron claves a todas las clases.

**Resultado:** Diagrama listo para implementación de base de datos.

---

## 🔄 Actualización (Sesión 2 - 22 Marzo)

### 5. Se agregaron clases necesarias para empresa REAL

**Problema identificado:** El documento original no contemplaba todas las funciones de una empresa real.

**Corrección:** Se agregaron las siguientes clases al diagrama:

| Clase | Razón (Lógica de Empresa Real) |
|-------|--------------------------------|
| Proveedor | Toda farmacia compra a proveedores, necesita registrar quién surte |
| Compra + DetalleCompra | Para RF-006 (Monitoreo de Costos) - sin compras no hay monitoreo |
| Categoria | Los productos se organizan por categorías (medicamentos, cosméticos, etc.) |
| Bitacora | Auditoría - toda empresa real necesita registro de acciones |
| Cliente.email | Para contacto y notificaciones |
| Cliente.puntosFidelidad | Programa de fidelización (común en farmacias) |
| Alerta.tipo | Diferentes tipos: caducidad, stock bajo, precio cambiado |
| Producto.estaActivo | Productos dados de baja siguen en historial |

**Resultado:** 12 clases totales, diagrama completo para empresa real.

---

## 📊 Estado Final del Diagrama (Actualizado)

### Clases: 12
1. Persona (abstracta) - base
2. Usuario - login y control
3. Cliente - registro de clientes
4. Proveedor - proveedores de medicamentos
5. Categoria - organización de productos
6. Producto - inventario
7. Compra - compras a proveedores
8. DetalleCompra - detalle de compras
9. Venta - ventas realizadas
10. DetalleVenta - detalle de ventas
11. Bitacora - auditoría
12. Alerta - notificaciones
13. Reporte - generación de reportes

### Relaciones:
- Herencia: 2 (Persona→Usuario, Persona→Cliente)
- Asociación: 8
- Composición: 2 (Venta→DetalleVenta, Compra→DetalleCompra)
- Agregación: 4 (Producto→Alerta, Reporte→Venta/Producto/Compra)

### Cobertura de Requisitos:
| RF | Estado |
|----|--------|
| RF-001 Inicio de Sesión | ✅ Cubierto por Usuario |
| RF-002 Autenticación | ✅ Cubierto por Usuario.verificarPermisos() |
| RF-003 Registrar Productos | ✅ Cubierto por Producto |
| RF-004 Registrar Ventas | ✅ Cubierto por Venta + DetalleVenta + Producto.reducirStock() |
| RF-005 Registrar Clientes | ✅ Cubierto por Cliente |
| RF-006 Monitoreo de Costos | ✅ AHORA cubierto (hay Compra) |
| RF-007 Alerta de Caducidad | ✅ Cubierto por Alerta + fechaVencimiento |
| RF-008 Generar Reportes | ✅ Cubierto por Reporte |

---

## 📝 Pendiente - Documento HTML

El documento HTML aún tiene las siguientes inconsistencias que deben corregirse:
1. CU-01 y CU-02 son redundantes
2. RF-004 dice "Vendedor, Cajero" pero CU-04 solo dice "Vendedor"
3. Descuento existe en Venta Y DetalleVenta (redundante)

**Estas correcciones se делают en el documento HTML, no en el diagrama.**
