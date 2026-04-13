# Registro de Cambios - Farmacia Santa Cruz

Fecha: 21 de Marzo 2026
Hora: 9:13 PM (Hora local de El Salvador)

---

## Inicio de Actualizacion

### Objetivo:
Actualizar el HTML con el nuevo enfoque de farmacia local. El sistema debe enfocarse en inventario, no en clientes.

### Cambios a realizar:
1. Eliminar requisito de registrar clientes (no tiene sentido en una farmacia local)
2. Simplificar el sistema a 7 requisitos funcionales
3. Simplificar el diagrama de clases a 10 clases
4. Actualizar todos los casos de uso
5. Actualizar el orden logico

### Problemas encontrados durante la planificacion:
1. El equipo original habia planteado registrar clientes, pero no tiene sentido en una farmacia de barrio
2. El sistema era demasiado complejo para el alcance del proyecto
3. Habia clases innecesarias como Persona, Bitacora, Cliente

### Decisiones tomadas:
1. Eliminar clase Cliente - no es necesaria
2. Eliminar clase Persona - no es necesaria (Usuario no hereda de nadie)
3. Eliminar clase Bitacora - no es necesaria para el MVP
4. Eliminar RF-005 (Registrar Clientes) - no tiene sentido
5. Simplificar a 7 requisitos funcionales
6. Simplificar a 7 casos de uso
7. Simplificar a 10 clases en el diagrama

---

## Actualizacion en Progreso

### Paso 1: Actualizar PLAN_COMPLETO.md
Hora: 8:54 PM
Accion: Reescribir el plan completo con el nuevo enfoque
Cambios:
- Eliminado enfoque de clientes
- Agregado enfoque de inventario local
- Simplificado a 7 requisitos
- Simplificado a 7 casos de uso
- Simplificado a 10 clases

### Paso 2: Actualizar diagrama de clases
Hora: 8:57 PM
Accion: Reescribir el diagrama de clases
Cambios:
- Eliminada clase Persona
- Eliminada clase Cliente
- Eliminada clase Bitacora
- Agregada clase Proveedor
- Agregada clase Compra
- Agregada clase DetalleCompra
- Agregada clase Categoria
- Relaciones actualizadas

### Paso 3: Actualizar HTML
Hora: 8:59 PM
Accion: Reescribir el HTML completo
Cambios:
- Eliminado caso de uso de registrar clientes
- Actualizada tabla de requisitos funcionales
- Actualizado orden logico
- Actualizados todos los casos de uso
- Actualizado resumen de correspondencia
- Actualizado JavaScript para generar diagramas

### Paso 4: Mejorar diagrama principal de casos de uso
Hora: 9:10 PM
Accion: Reorganizar casos de uso en flujo logico
Cambios:
- Reorganizados los 7 casos de uso en flujo logico de arriba hacia abajo
- CU-01: Inicio de Sesion (1ro - acceso al sistema)
- CU-02: Registrar Productos (2do - crear inventario)
- CU-03: Registrar Compras (3ro - reabastecer)
- CU-04: Registrar Ventas (4to - vender productos)
- CU-05: Monitoreo de Costos (5to - analizar costos)
- CU-06: Alerta de Caducidad (6to - controlar calidad)
- CU-07: Generar Reportes (7mo - analizar datos)
- Cada ovalo tiene su posicion respectiva segun el orden logico

---

## Cambios Realizados

### Cambios en requisitos:
- RF-001: Inicio de Sesion (sin cambios)
- RF-002: Registrar Productos (sin cambios)
- RF-003: Registrar Compras (NUEVO - necesario para RF-005)
- RF-004: Registrar Ventas (sin cambios)
- RF-005: Monitoreo de Costos (sin cambios)
- RF-006: Alerta de Caducidad (sin cambios)
- RF-007: Generar Reportes (sin cambios)
- Eliminado: RF-005 Registrar Clientes (no tiene sentido)

### Cambios en casos de uso:
- CU-01: Inicio de Sesion (sin cambios)
- CU-02: Registrar Productos (sin cambios)
- CU-03: Registrar Compras (NUEVO)
- CU-04: Registrar Ventas (sin cambios)
- CU-05: Monitoreo de Costos (sin cambios)
- CU-06: Alerta de Caducidad (sin cambios)
- CU-07: Generar Reportes (sin cambios)
- Eliminado: CU-05 Registrar Clientes (no tiene sentido)

### Cambios en diagrama de clases:
- Eliminada clase Persona
- Eliminada clase Cliente
- Eliminada clase Bitacora
- Agregada clase Proveedor
- Agregada clase Compra
- Agregada clase DetalleCompra
- Agregada clase Categoria
- Relaciones actualizadas

### Cambios en el HTML:
- Actualizada portada
- Actualizada problematica
- Actualizada solucion propuesta
- Actualizada tabla de requisitos funcionales
- Actualizado orden logico
- Actualizado diagrama principal de casos de uso
- Actualizados todos los casos de uso
- Actualizado resumen de correspondencia
- Actualizado JavaScript para generar diagramas

---

## Resumen de Cambios

### Archivos modificados:
1. inventario_farmacia.html - Reescrito con el nuevo enfoque
2. diagrama_clases.puml - Reescrito con 10 clases
3. PLAN_COMPLETO.md - Reescrito con el nuevo enfoque

### Cambios realizados:
- Eliminado requisito de registrar clientes
- Simplificado a 7 requisitos funcionales
- Simplificado a 7 casos de uso
- Simplificado a 10 clases en el diagrama
- Actualizado HTML completo
- Actualizado diagrama de clases
- Actualizado plan completo
- Mejorado diagrama principal de casos de uso con flujo logico

### Problemas encontrados y resueltos:
1. El equipo original habia planteado registrar clientes - Eliminado
2. El sistema era demasiado complejo - Simplificado
3. Habia clases innecesarias - Eliminadas
4. Diagrama principal no seguia flujo logico - Reorganizado

### Pendientes:
1. Verificar que el HTML se visualice correctamente
2. Generar imagen del diagrama de clases
3. Verificar consistencia entre todos los documentos

---

## Proximos Pasos

1. Verificar que el HTML se visualice correctamente
2. Generar imagen del diagrama de clases
3. Verificar consistencia entre todos los documentos

---

## Continuacion de Actualizacion

### Paso 5: Expandir diagramas de casos de uso detallados
Hora: 9:42 PM (21 de Marzo 2026)
Accion: Agregar sub-casos de uso a cada caso de uso
Razon: El usuario indico que los diagramas de casos de uso detallados deben tener mas informacion y sub-casos de uso, no solo un ovalo

Cambios realizados:
- CU-01: Inicio de Sesion
  - Agregados sub-casos de uso: Validar credenciales, Verificar rol, Asignar permisos
  - Expandido diagrama de secuencia de 4 a 10 pasos detallados
  - Ahora incluye: ingresar credenciales, consultar BD, validar, verificar rol, asignar permisos, permitir acceso

- CU-02: Registrar Productos
  - Agregados sub-casos de uso: Validar datos del producto, Verificar duplicados, Guardar en base de datos
  - Expandido diagrama de secuencia de 6 a 14 pasos detallados
  - Ahora incluye: ingresar nombre, precio costo, precio venta, stock, laboratorio, fecha vencimiento, categoria, validar, verificar duplicados, guardar, confirmar

- CU-03: Registrar Compras
  - Agregados sub-casos de uso: Seleccionar proveedor, Seleccionar productos, Calcular totales, Actualizar stock
  - Expandido diagrama de secuencia de 10 a 19 pasos detallados
  - Ahora incluye: seleccionar proveedor, consultar proveedor, seleccionar producto, consultar producto, ingresar cantidad, ingresar precio, calcular subtotal, confirmar, guardar, actualizar stock, confirmar

- CU-04: Registrar Ventas
  - Agregados sub-casos de uso: Buscar productos, Verificar stock, Calcular total, Generar factura
  - Expandido diagrama de secuencia de 10 a 18 pasos detallados
  - Ahora incluye: buscar producto, consultar producto, ingresar cantidad, verificar stock, calcular subtotal, confirmar, guardar, descontar stock, generar factura, mostrar factura

- CU-05: Monitoreo de Costos
  - Agregados sub-casos de uso: Consultar historial, Detectar cambios, Sugerir ajuste
  - Expandido diagrama de secuencia de 7 a 12 pasos detallados
  - Ahora incluye: seleccionar producto, consultar historial, mostrar historial, analizar cambios, detectar cambios, sugerir ajuste, confirmar, actualizar precio, confirmar

- CU-06: Alerta de Caducidad
  - Agregados sub-casos de uso: Verificar fechas, Identificar productos, Generar alertas
  - Expandido diagrama de secuencia de 3 a 9 pasos detallados
  - Ahora incluye: ejecutar verificacion, consultar productos, verificar fechas, identificar productos proximos a vencer, generar alertas, notificar administrador, revisar alertas, mostrar alertas

- CU-07: Generar Reportes
  - Agregados sub-casos de uso: Seleccionar tipo, Consultar datos, Generar reporte, Exportar
  - Expandido diagrama de secuencia de 5 a 10 pasos detallados
  - Ahora incluye: seleccionar tipo, consultar datos, generar reporte, mostrar vista previa, confirmar exportacion, exportar, mostrar confirmacion

Nota: Los diagramas de casos de uso ahora muestran sub-casos de uso con relaciones <<include>> y los diagramas de secuencia tienen pasos mas detallados que reflejan el flujo real del sistema

---

### Paso 6: Documentar cambios en registro
Hora: 9:44 PM (21 de Marzo 2026)
Accion: Agregar documentacion del Paso 5 al registro de cambios
Cambios:
- Agregada seccion "Continuacion de Actualizacion"
- Documentado Paso 5 con todos los cambios realizados
- Detallados los sub-casos de uso agregados a cada caso de uso
- Detallados los pasos expandidos en los diagramas de secuencia
- Mantenida la continuidad del registro sin modificar contenido previo

---

## Continuacion de Actualizacion - Creación de HTML del DER

### Paso 12: Crear archivo HTML del DER
Hora: 9:00 PM (23 de Marzo 2026)
Accion: Crear archivo DER_FARMACIA.html con todo el contenido del DER en formato HTML profesional
Razon: El usuario solicitó que todo el contenido de DER_FARMACIA.md se convierta a HTML

Cambios realizados:
- Creado archivo DER_FARMACIA.html con:
  - Portada profesional con datos del proyecto
  - Escenario de la situación problemática
  - 9 entidades con justificación
  - Tablas de atributos para cada entidad (mínimo 4 por entidad)
  - Diagrama SVG interactivo del DER completo
  - Tabla de relaciones y cardinalidades
  - Resumen de entidades con cantidades estimadas
  - Notas importantes
  - Diagrama ER simplificado
  - Pie de página con fecha y datos del proyecto
  - Botón para guardar como PDF

Características del HTML:
- Estilo CSS profesional (mismo formato que inventario_farmacia.html)
- Diagramas SVG interactivos generados con JavaScript
- Tablas bien formateadas
- Diseño responsivo
- Opción para imprimir/guardar como PDF

---

## Continuacion de Actualizacion - Creación de DER

### Paso 11: Crear Diagrama Entidad-Relación (DER)
Hora: 8:55 PM (23 de Marzo 2026)
Accion: Crear documento DER_FARMACIA.md con el diagrama entidad-relación completo
Razon: El docente solicita un DER basado en la situación problemática del proyecto

Cambios realizados:
- Creado archivo DER_FARMACIA.md con:
  - Escenario de la situación problemática
  - 9 entidades seleccionadas con justificación
  - Atributos de cada entidad (mínimo 4 por entidad) con clave primaria indicada
  - Diagrama de relaciones con cardinalidad
  - Relaciones y cardinalidades en tabla
  - Resumen de entidades con cantidades estimadas
  - Notas importantes sobre el diseño

Entidades identificadas:
1. Usuario - Personas que usan el sistema (administrador, vendedor)
2. Categoria - Clasificación de productos
3. Producto - Medicamentos y productos de uso personal
4. Proveedor - Empresas que suministran productos
5. Compra - Registro de compras a proveedores
6. DetalleCompra - Detalle de cada compra
7. Venta - Registro de ventas (sin datos del cliente)
8. DetalleVenta - Detalle de cada venta
9. Alerta - Notificaciones de productos próximos a vencer

Nota importante: NO hay entidad Cliente porque la farmacia NO registra clientes. Las ventas solo registran QUÉ se vende, NO A QUIÉN se vende.

---

## Continuacion de Actualizacion - Corrección de Diagramas de Secuencia

### Paso 10: Corregir diagramas de secuencia con lógica más adecuada
Hora: 5:43 AM (22 de Marzo 2026)
Accion: Reescribir los 7 diagramas de secuencia con flujo más lógico y consolidado
Razon: El usuario identificó problemas de lógica en los diagramas de secuencia:
- CU-01: Redundancia en consultas (se consultaba dos veces al usuario)
- CU-02: Demasiados pasos separados para ingresar datos
- CU-03: Flujo excesivamente largo con pasos innecesarios
- CU-04: Demasiados pasos que podían consolidarse
- CU-05 a CU-07: Algunos pasos tenían dirección incorrecta

Cambios realizados:

**CU-01: Inicio de Sesión**
- ANTES: 10 pasos con redundancia (consultar usuario dos veces)
- DESPUÉS: 4 pasos consolidados
- Flujo corregido: Ingresar credenciales → Validar y obtener rol → Usuario válido → Permitir acceso
- Lógica: El sistema valida credenciales Y obtiene rol/permisos en una sola consulta a BD

**CU-02: Registrar Productos**
- ANTES: 14 pasos separados (7 para ingresar datos + 7 para procesar)
- DESPUÉS: 6 pasos consolidados
- Flujo corregido: Ingresar todos los datos → Validar y verificar duplicados → Guardar → Confirmar
- Lógica: El usuario ingresa todos los datos en un formulario, el sistema valida todo junto

**CU-03: Registrar Compras**
- ANTES: 19 pasos excesivos con muchos ida-vuelta innecesarios
- DESPUÉS: 8 pasos consolidados
- Flujo corregido: Seleccionar proveedor/productos → Consultar BD → Mostrar datos → Ingresar cantidades/precios → Calcular y guardar → Confirmar
- Lógica: El sistema agrupa operaciones relacionadas (consultar proveedor y productos juntos)

**CU-04: Registrar Ventas**
- ANTES: 18 pasos con separación innecesaria
- DESPUÉS: 8 pasos consolidados
- Flujo corregido: Buscar productos/seleccionar cantidades → Verificar stock y calcular total → Confirmar → Guardar, descontar stock, generar factura → Mostrar factura
- Lógica: El sistema verifica stock Y calcula total en una operación, guarda venta Y descuenta stock Y genera factura juntos

**CU-05: Monitoreo de Costos**
- ANTES: 12 pasos con separación innecesaria
- DESPUÉS: 8 pasos consolidados
- Flujo corregido: Seleccionar producto → Consultar historial → Mostrar historial y sugerir ajuste → Confirmar → Actualizar precio → Confirmar
- Lógica: El sistema muestra historial Y sugiere ajuste en el mismo paso

**CU-06: Alerta de Caducidad**
- ANTES: 9 pasos con separación innecesaria
- DESPUÉS: 5 pasos consolidados
- Flujo corregido: Ejecutar verificación → Productos próximos a vencer → Notificar → Revisar alertas → Mostrar alertas
- Lógica: El sistema ejecuta verificación Y genera alertas en una operación

**CU-07: Generar Reportes**
- ANTES: 10 pasos con separación innecesaria
- DESPUÉS: 8 pasos consolidados
- Flujo corregido: Seleccionar tipo → Consultar datos y generar reporte → Mostrar vista previa → Confirmar → Exportar → Confirmar
- Lógica: El sistema consulta datos Y genera reporte en una operación

**Principios aplicados en la corrección:**
1. **Consolidación de operaciones**: Agrupar pasos que pueden hacerse juntos
2. **Eliminación de redundancia**: No consultar dos veces lo mismo
3. **Dirección correcta**: El sistema consulta a BD, no "pide" a BD
4. **Flujo lógico**: Primero ocurre lo que debe ocurrir primero
5. **Minimizar ida-vuelta**: Reduccir mensajes innecesarios entre usuario, sistema y BD

**Nota importante sobre arquitectura:**
- El sistema es LOCAL (no hay servidor web separado)
- La base de datos es SQLite LOCAL (no hay servidor de BD separado)
- Las validaciones se hacen en el sistema antes de guardar
- El "Sistema" en los diagramas representa la aplicación completa (interfaz + lógica + acceso a datos)

---

## Continuacion de Actualizacion - Expansión de Documentación

### Paso 7: Agregar secciones de documentación completa
Hora: 4:33 AM (22 de Marzo 2026)
Accion: Agregar secciones de información del proyecto, objetivos, alcance, glosario, tecnologías, diagrama de contexto y diagrama de paquetes
Razon: El usuario indico que la documentación era muy corta y necesitaba más información

Cambios realizados:
- Agregada sección "INFORMACIÓN DEL PROYECTO" con datos completos del proyecto
- Agregada sección "OBJETIVOS DEL PROYECTO" con objetivo general y 8 objetivos específicos
- Agregada sección "ALCANCE DEL SISTEMA" con alcance funcional y no funcional
- Agregada sección "GLOSARIO DE TÉRMINOS" con 12 términos definidos
- Agregada sección "TECNOLOGÍAS Y HERRAMIENTAS" con 6 tecnologías
- Agregada sección "DIAGRAMA DE CONTEXTO" con SVG interactivo
- Agregada sección "DIAGRAMA DE PAQUETES" con SVG interactivo
- Agregada sección "DIAGRAMA DE ACTIVIDADES" con SVG interactivo
- Agregada sección "DIAGRAMA DE ESTADOS" con SVG interactivo
- Agregada sección "REQUISITOS NO FUNCIONALES" con 11 requisitos
- Agregada sección "RESTRICCIONES DEL SISTEMA" con 8 restricciones
- Agregada sección "SUPOSICIONES Y DEPENDENCIAS" con 6 suposiciones y 6 dependencias

Nota: El glosario aclara que "Usuario" se refiere al administrador o vendedor que usa el sistema, NO al cliente que compra productos. "Cliente" es la persona que compra en la farmacia y NO se registra en el sistema.

---

### Paso 8: Expandir casos de uso detallados con relaciones extend/include
Hora: 4:38 AM (22 de Marzo 2026)
Accion: Agregar más sub-casos de uso y relaciones extend/include a los 7 casos de uso
Razon: El usuario indico que los diagramas de casos de uso detallados debían tener más información y relaciones extend/include

Cambios realizados:
- CU-01: Inicio de Sesión
  - Agregados sub-casos de uso: Registrar sesión, Cargar configuración
  - Agregados extend: Recuperar contraseña, Cambiar contraseña
  - Total: 5 includes + 2 extends

- CU-02: Registrar Productos
  - Agregados sub-casos de uso: Asignar categoría, Registrar laboratorio, Establecer precios
  - Agregados extend: Editar producto, Eliminar producto, Buscar producto
  - Total: 6 includes + 3 extends

- CU-03: Registrar Compras
  - Agregados sub-casos de uso: Registrar factura, Verificar precios
  - Agregados extend: Anular compra, Devolver productos, Consultar historial compras
  - Total: 6 includes + 3 extends

- CU-04: Registrar Ventas
  - Agregados sub-casos de uso: Aplicar descuento, Registrar pago
  - Agregados extend: Anular venta, Devolver productos, Consultar historial ventas
  - Total: 6 includes + 3 extends

- CU-05: Monitoreo de Costos
  - Agregados sub-casos de uso: Analizar tendencias, Generar alertas precios
  - Agregados extend: Actualizar precios masivamente, Exportar historial precios
  - Total: 5 includes + 2 extends

- CU-06: Alerta de Caducidad
  - Agregados sub-casos de uso: Notificar administrador, Programar verificación
  - Agregados extend: Marcar productos vencidos, Eliminar productos vencidos, Generar reporte vencimientos
  - Total: 5 includes + 3 extends

- CU-07: Generar Reportes
  - Agregados sub-casos de uso: Filtrar datos, Programar reportes
  - Agregados extend: Imprimir reporte, Enviar por email, Guardar plantilla
  - Total: 6 includes + 3 extends

Nota: Los diagramas de casos de uso ahora muestran relaciones <<include>> y <<extend>> entre el caso de uso principal y los sub-casos de uso.

---

### Paso 9: Agregar funciones JavaScript para nuevos diagramas
Hora: 4:51 AM (22 de Marzo 2026)
Accion: Agregar funciones drawContext(), drawPackages(), drawActivity() y drawState()
Razon: Los nuevos diagramas necesitaban funciones JavaScript para renderizarse

Cambios realizados:
- Agregada función drawContext() para diagrama de contexto
- Agregada función drawPackages() para diagrama de paquetes
- Agregada función drawActivity() para diagrama de actividades
- Agregada función drawState() para diagrama de estados
- Actualizada función window.onload para llamar a los nuevos diagramas

Nota: Los diagramas ahora se renderizan automáticamente al cargar la página HTML.

---