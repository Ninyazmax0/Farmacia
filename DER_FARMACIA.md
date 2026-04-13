# Diagrama Entidad-Relación (DER) - Farmacia Santa Cruz

## Escenario de la Situación Problemática

La Farmacia Santa Cruz es un establecimiento comercial local ubicado en el pasaje parroquial y avenida norte, San Martín Norte. La farmacia gestiona anualmente **$12,000 en medicamentos y productos de uso personal**. Sin embargo, su modelo de registro manual le ha causado distintos conflictos:

1. **Pérdida económica de $400** en los últimos 2 años debido a productos vencidos no detectados a tiempo
2. **Dificultad para conocer existencias reales** de medicamentos en inventario
3. **Problemas para detectar cambios de precios** en compras a proveedores
4. **Ineficiencia en la búsqueda de productos** para los empleados
5. **Falta de reportes** que permitan tomar decisiones basadas en datos

La farmacia cuenta con:
- **1 administrador** (dueña) que gestiona productos, compras, costos y reportes
- **2 vendedores** que atienden a los clientes en el mostrador
- **Múltiples proveedores** que suministran medicamentos
- **Cientos de productos** en inventario (medicamentos, productos de uso personal)

**Nota importante:** La farmacia NO registra clientes. Los clientes van, compran y se van. El sistema solo registra QUÉ se vende, NO A QUIÉN se vende.

---

## Entidades Seleccionadas con Justificación

### 1. Usuario
**Justificación:** Es necesario tener usuarios del sistema con diferentes roles (administrador y vendedor) para controlar el acceso y los permisos. Cada usuario tiene credenciales únicas para iniciar sesión.

### 2. Categoria
**Justificación:** Los productos se clasifican en categorías (Antibióticos, Analgésicos, Vitaminas, etc.) para facilitar la búsqueda y organización del inventario.

### 3. Producto
**Justificación:** Es la entidad principal del sistema. Representa cada medicamento o producto de uso personal que se vende en la farmacia. Contiene información de stock, precios y fechas de vencimiento.

### 4. Proveedor
**Justificación:** La farmacia compra productos a proveedores. Es necesario registrar quiénes son los proveedores para gestionar las compras y tener un historial de suministros.

### 5. Compra
**Justificación:** Representa cada orden de compra realizada a un proveedor. Permite llevar un historial de compras y detectar cambios de precios.

### 6. DetalleCompra
**Justificación:** Detalla qué productos y en qué cantidades se compraron en cada orden de compra. Es necesaria porque una compra puede incluir múltiples productos.

### 7. Venta
**Justificación:** Representa cada venta realizada a un cliente. Permite llevar un historial de ventas y generar reportes. NO incluye datos del cliente.

### 8. DetalleVenta
**Justificación:** Detalla qué productos y en qué cantidades se vendieron en cada venta. Es necesaria porque una venta puede incluir múltiples productos.

### 9. Alerta
**Justificación:** El sistema genera alertas automáticas cuando un producto está próximo a vencer (30 días). Permite al administrador tomar acción preventiva.

---

## Atributos de cada Entidad

### 1. Usuario
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_usuario | Identificador único del sistema. Solo para administradores, empleados y proveedores (no registra clientes). Se usa para saber quién realiza una Compra o Venta. |
| nombre | Nombre real de la persona. Útil para identificar físicamente en reportes al responsable de cada acción. |
| usuario | Nombre de acceso al sistema. Protege la información para que solo el personal autorizado ingrese. |
| contrasena | Clave secreta para que externos (como clientes) no puedan entrar ni alterar el inventario de la entidad Producto. |
| rol | Nivel de permiso (administrador, vendedor o proveedor) que define a qué opciones de Venta, Compra o Alertas tiene acceso. |
| activo | Indica si la persona aún trabaja o tiene acceso. Si se desactiva, su historial en Ventas y Compras se mantiene, pero ya no podrá entrar. |
| fecha_creacion | Registro temporal automático de la creación inicial de las credenciales del usuario, sirviendo de referencia administrativa. |

### 2. Categoria
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_categoria | Identificador único de la clasificación. Ayuda a agrupar los registros de la entidad Producto, como "Analgésicos". |
| nombre | El nombre de la categoría para encontrar los grupos de medicamentos más fácilmente en los catálogos de los empleados. |
| descripcion | Detalla qué tipo de productos entran aquí, sirviendo de guía general sobre dicho tipo de fármaco. |
| activo | Para saber si esta etiqueta se sigue usando al añadir o editar nuevos registros de Productos. |

### 3. Producto
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_producto | Identificador central del medicamento. Está ligado a su Categoría, a las Compras, a las Ventas y a las Alertas de fallas de inventario. |
| codigo_barras | Código para escanear y registrar rápido el medicamento en un DetalleCompra o en un DetalleVenta. |
| nombre | El nombre comercial del medicamento para buscarlo rápido frente al mostrador. |
| descripcion | Detalle descriptivo extra referente al uso o gramaje del fármaco para apoyar al empleado al buscarlo. |
| id_categoria | Enlaza el artículo al área específica guardada en la tabla Categoria. |
| laboratorio | La marca que lo fabrica. Es muy útil al hacerle pedidos nuevamente al Proveedor. |
| precio_costo | Lo invertido hacia el Proveedor; importante para cuadrar los registros de cada Compra. |
| precio_venta | El precio tarifario final al público, usado como costo al procesar una Venta. |
| stock_actual | La cantidad física en farmacia. Sube con cada DetalleCompra y baja en cada DetalleVenta. |
| stock_minimo | Límite permitido en inventario. Si la cantidad baja de este número, el sistema emitirá una Alerta. |
| fecha_vencimiento | Fecha caduca. Si le faltan 30 días, originará de inmediato una Alerta de vencimiento. |
| activo | Indica si aún se vende; si pasa a falso, dejará de salir en futuras interacciones a vendedores o administradores. |
| fecha_registro | Data de cuándo la entidad Producto fue alojada en el sistema, ayudando en búsquedas de novedades del administrador. |

### 4. Proveedor
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_proveedor | Identificador del distribuidor. Se vincula obligatoriamente a la entidad Compra para saber a quién se le pagó y de dónde llegaron los medicamentos. |
| nombre | Registro comercial de la empresa abastecedora, vital para levantar una orden nueva sin confusiones. |
| contacto | Nombre del representante laboral del proveedor en caso de reclamos en la mercadería o fallas dentro de una Compra. |
| telefono | Para llamar rápido y pedir las unidades faltantes a fin de evitar quedarse sin ellas en repisas. |
| email | Correo necesario para enviar recibos o notificaciones generadas en facturas de la Compra. |
| direccion | Ubicación física del distribuidor, útil para estimar tiempos de despacho hacia el almacén de Santa Cruz. |
| activo | Si el proveedor se inactiva, el administrador ya no podrá seleccionarlo para asignarle nuevas remesas u órdenes. |

### 5. Compra
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_compra | Identificador macro de todo lo surtido. Agrupa todas y cada una de las líneas menores registradas en DetalleCompra. |
| id_proveedor | Conecta de paso esta factura con el Proveedor que proporcionó las cajas a los empleados. |
| id_usuario | Registra cuál administrador firmó digitalmente esta operación de almacén. |
| numero_factura | Correlativo que viene impreso en el papel externo y es insertado aquí para el orden administrativo. |
| fecha_compra | Día y hora puntuales de la transacción para lograr revisiones fiables en una auditoria. |
| total | El pago global que se le hizo; se computa tras sumar el 'subtotal' de todos los fármacos listados en su respectivo DetalleCompra. |
| metodo_pago | Indica si se canceló en efectivo, cuenta bancaria o crédito. |

### 6. DetalleCompra
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_detalle_compra | Asigna su identificador a la entrada por goteo individual de la remesa. Reagrupa en partes la cuenta gigante y centralizada bajo la entidad Compra. |
| id_compra | Cierra hermético el pacto al obligar que una pastilla específica se una a su grupo matriz del pago del lote mayor (Compra). |
| id_producto | Avisa al inventario virtual en 'Producto' que han entrado piezas nuevas, reponiendo matemáticamente su balance global 'stock_actual'. |
| cantidad | Número de unidades en ingreso directo del camión o proveedor y avalado dentro del formulario por caja para sumarse a los andenes. |
| precio_costo | Congela y almacena la factura que impone el proveedor. Evita desfalcos posteriores si la etiqueta de precio del Producto general muta días o semanas después. |
| subtotal | Precio_costo multiplicado al factor directo 'cantidad'; pasará el relevo a conformar su importe superior al macro nivel de su entidad origen. |

### 7. Venta
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_venta | Se usa para acoplar bajo un mismo número todos los medicamentos despachados al mostrador para cobro final (no vincula usuarios externos/clientes). |
| id_usuario | Añade control indicando cuál vendedor hizo la ejecución o cobro en su turno. |
| fecha_venta | Indica el momento de la hora laboral en que un recibo fue procesado por caja al cliente. |
| total | Coste definitivo final; se calcula integrando automáticamente todo lo envasado en la sub-área de un DetalleVenta conjunto. |
| metodo_pago | Indica si el usuario cobró bajo modalidad directa de tarjeta o manejando dinero físico extra (efectivo). |

### 8. DetalleVenta
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_detalle_venta | Clave individual que aisla cada medicamento a ser pagado. Ideal para separar qué cosas distintas lleva el carro final de transacción del recibo de Venta mayor. |
| id_venta | Identifica o abraza el fármaco singular hacia su comprobante terminal de cara al público consumidor saliente (Venta). |
| id_producto | Rebaja contundentemente cada cajita del fármaco dentro de los saldos maestros en la entidad global de Producto restándolo de lo disponible ('stock_actual'). |
| cantidad | Soportes físicos empaquetados del medicamento en transacción hacia la ventanilla, clave para sustraerlos de los dominios físicos locales. |
| precio_venta | Captura final congelada por seguridad de auditorias a largo plazo, sobre el precio por unidad sin importar si por fuera la tabla madre aumenta el margen comercial. |
| subtotal | Solución aritmética interna por multiplicación (cantidad vendida x su costo unitario) resguardado hacia la suma conjunta a cobrar en la entidad global 'Venta'. |

### 9. Alerta
| Atributo | Descripción Detallada |
|----------|-----------------------|
| id_alerta | Número único de las notificaciones que nacen cuando algo crítico falla con inventarios. |
| id_producto | Avisa y liga automáticamente refiriendose al Producto del catálogo para indicar qué medicina es la del contratiempo. |
| tipo_alerta | Señala al empleado si el asunto es por límite mermado bajo o cercanía de caducidad. |
| mensaje | Pequeño relato informativo y general para actuar y reemplazar dicho fármaco averiado en el lote. |
| fecha_alerta | Señala el instante en el que surgió orgánicamente esta necesidad o fallo material. |
| leida | Marcador con interruptor a la acción humana para borrar la alerta una vez fue resuelta debidamente por la administración de turno. |

---

## Diagrama de Relaciones con Cardinalidad

```
┌─────────────┐         ┌─────────────┐
│   Usuario   │         │  Categoria  │
│─────────────│         │─────────────│
│ PK id_usuario│        │ PK id_categoria│
│    nombre    │        │    nombre    │
│    usuario   │        │  descripcion │
│  contrasena  │        │    activo    │
│     rol      │         └──────┬──────┘
│    activo    │                │
│fecha_creacion│                │ 1
└──────┬──────┘                │
       │                       │
       │ 1                     │
       │                       │
       │                 ┌─────┴──────┐
       │                 │  Producto  │
       │                 │────────────│
       │                 │PK id_producto│
       │                 │codigo_barras│
       │                 │   nombre   │
       │                 │  id_categoria│ FK
       │                 │ laboratorio│
       │                 │precio_costo│
       │                 │precio_venta│
       │                 │stock_actual│
       │                 │stock_minimo│
       │                 │fecha_vencimiento│
       │                 │   activo   │
       │                 └─────┬──────┘
       │                       │
       │ 1                     │ *
       │                       │
┌──────┴──────┐                │
│   Compra    │                │
│─────────────│                │
│PK id_compra │                │
│FK id_proveedor│              │
│FK id_usuario │               │
│numero_factura│               │
│ fecha_compra │               │
│    total     │               │
│ metodo_pago  │               │
└──────┬──────┘                │
       │                       │
       │ 1                     │ *
       │                       │
┌──────┴──────────┐            │
│ DetalleCompra   │            │
│─────────────────│            │
│PK id_detalle_compra│         │
│FK id_compra     │            │
│FK id_producto   │────────────┘
│   cantidad      │
│ precio_costo    │
│   subtotal      │
└─────────────────┘

┌─────────────┐
│  Proveedor  │
│─────────────│
│PK id_proveedor│
│    nombre    │
│   contacto   │
│   telefono   │
│    email     │
│   direccion  │
│    activo    │
└──────┬──────┘
       │
       │ 1
       │
       │ (ya mostrada arriba)
       │
       ▼
   ┌─────────┐
   │ Compra  │
   └─────────┘


┌──────┴──────┐                │
│   Venta     │                │
│─────────────│                │
│PK id_venta  │                │
│FK id_usuario│                │
│ fecha_venta │                │
│    total    │                │
│ metodo_pago │                │
└──────┬──────┘                │
       │                       │
       │ 1                     │ *
       │                       │
┌──────┴──────────┐            │
│  DetalleVenta   │            │
│─────────────────│            │
│PK id_detalle_venta│          │
│FK id_venta      │            │
│FK id_producto   │────────────┘
│   cantidad      │
│  precio_venta   │
│   subtotal      │
└─────────────────┘


┌─────────────┐
│   Alerta    │
│─────────────│
│PK id_alerta │
│FK id_producto│
│ tipo_alerta │
│   mensaje   │
│ fecha_alerta│
│    leida    │
└─────────────┘
```

---

## Relaciones y Cardinalidades

| Relación | Entidad 1 | Cardinalidad | Entidad 2 | Descripción |
|----------|-----------|--------------|-----------|-------------|
| R1 | Usuario | 1 ────── * | Compra | Un usuario puede registrar muchas compras, una compra la registra un usuario |
| R2 | Usuario | 1 ────── * | Venta | Un usuario puede registrar muchas ventas, una venta la registra un usuario |
| R3 | Proveedor | 1 ────── * | Compra | Un proveedor puede tener muchas compras, una compra es a un proveedor |
| R4 | Categoria | 1 ────── * | Producto | Una categoría puede tener muchos productos, un producto pertenece a una categoría |
| R5 | Compra | 1 ────── * | DetalleCompra | Una compra tiene muchos detalles, un detalle pertenece a una compra |
| R6 | Producto | 1 ────── * | DetalleCompra | Un producto puede estar en muchos detalles de compra, un detalle es de un producto |
| R7 | Venta | 1 ────── * | DetalleVenta | Una venta tiene muchos detalles, un detalle pertenece a una venta |
| R8 | Producto | 1 ────── * | DetalleVenta | Un producto puede estar en muchos detalles de venta, un detalle es de un producto |
| R9 | Producto | 1 ────── * | Alerta | Un producto puede generar muchas alertas, una alerta es de un producto |

---

## Resumen de Entidades

| Entidad | Cantidad Estimada | Descripción |
|---------|-------------------|-------------|
| Usuario | 3 | 1 administrador + 2 vendedores |
| Categoria | 10-20 | Antibióticos, Analgésicos, Vitaminas, etc. |
| Producto | 200-500 | Medicamentos y productos de uso personal |
| Proveedor | 5-10 | Laboratorios y distribuidores |
| Compra | 50-100/año | Órdenes de compra a proveedores |
| DetalleCompra | 200-500/año | Líneas de cada compra |
| Venta | 3000-5000/año | Ventas realizadas (sin datos de cliente) |
| DetalleVenta | 5000-10000/año | Líneas de cada venta |
| Alerta | 50-100/año | Alertas de vencimiento y stock bajo |

---

## Notas Importantes

1. **No hay entidad Cliente:** La farmacia NO registra clientes. Las ventas no tienen relación con clientes.

2. **Venta sin cliente:** La entidad Venta solo registra QUÉ se vendió, NO A QUIÉN se vendió.

3. **Historial de precios:** Las tablas DetalleCompra y DetalleVenta guardan el precio al momento de la transacción, permitiendo detectar cambios de precios.

4. **Alertas automáticas:** El sistema genera alertas cuando:
   - Un producto está próximo a vencer (30 días antes)
   - El stock actual es menor al stock mínimo

5. **Control de acceso:** Solo usuarios con rol 'administrador' pueden registrar compras, monitorear costos y generar reportes. Los vendedores solo pueden registrar ventas.

---

## Diagrama ER Simplificado (Texto)

```
[Usuario] 1──* [Compra] *──1 [Proveedor]
                  │
                  │ 1
                  │
                  ▼ *
           [DetalleCompra] *──1 [Producto] *──1 [Categoria]
                                     │
                                     │ 1
                                     │
                                     ▼ *
                                [Alerta]

[Usuario] 1──* [Venta]
                  │
                  │ 1
                  │
                  ▼ *
           [DetalleVenta] *──1 [Producto]
```

---

**Fecha:** 23 de Marzo 2026
**Proyecto:** Sistema de Inventario - Farmacia Santa Cruz
**Instituto:** Instituto Nacional de San Martín
