# 🌐 Estructura de la Web — Arquitectura de Contenido y Conversión
### Vantastic! · Valencia, desde 1989 · Documento de planificación v2

---

## Principios de diseño de la estructura

Antes de entrar sección por sección, tres decisiones estratégicas que condicionan toda la arquitectura:

**Una web de seducción, no de catálogo.** El usuario no llega sabiendo que quiere una furgoneta vintage. Llega con un deseo vago de libertad, aventura o escapar de su rutina. La web debe transformar ese deseo difuso en una reserva concreta.

**El orden de las páginas es el orden de la confianza.** Primero emoción, luego información, luego conversión. Quien llega frío necesita sentir antes de decidir.

**Tres usuarios, una sola voz.** Andrés, Claire & Thomas y James tienen comportamientos digitales distintos, pero responden a la misma emoción central. La estructura debe servir a los tres sin fragmentarse.

---

## Nota sobre nomenclatura de furgonetas

A lo largo de este documento se hace referencia al sistema de nombres de las furgonetas. **Los nombres definitivos están por decidir.** Lo que sí está definido es:

- Cada furgoneta tendrá un nombre propio con carácter — no un nombre de persona, no un diminutivo
- El sistema de nomenclatura tendrá coherencia interna (un universo semántico común para toda la flota)
- Los nombres funcionarán en español, inglés y francés sin necesitar traducción
- La dirección explorada apunta a referencias geográficas, naturales o culturales de escala europea — coherente con el ADN viajero de los fundadores

Lo que sí está definido es **cómo se cuenta la historia de cada furgoneta** — ver Sección 2.2.

---

# PÁGINA PRINCIPAL — Homepage

## Sección 1.1 — Hero (primer scroll)

**Objetivo:** Crear impacto emocional inmediato y confirmar al usuario que está en el lugar correcto. Tiene menos de 4 segundos.

**Mensaje principal:**
> *Treinta y cinco años llevando gente a ningún sitio en concreto.*

Subheadline: *Furgonetas Volkswagen vintage restauradas. Recógela aquí. Devuélvela donde quieras.*

**Contenido:**
- Vídeo corto en loop (sin sonido): furgoneta aparcada al amanecer frente al mar, puerta trasera abierta, nadie dentro. El usuario se proyecta.
- Headline + subheadline + un solo CTA: *Encuentra tu furgoneta*
- Sin menú sobrecargado. Sin banners de oferta. Sin ruido.

---

## Sección 1.2 — La propuesta en tres ideas

**Objetivo:** Para quien no ha leído nada todavía, dar contexto en segundos. Para quien ya tiene interés, confirmar que esto es diferente.

**Mensaje principal:** *No somos una empresa de alquiler de coches con estética retro. Somos una familia que lleva décadas en carretera.*

**Contenido:**
- Tres afirmaciones cortas y concretas que diferencian la marca:
  - **Furgonetas restauradas a mano** — cada una revisada íntegramente en nuestro taller en Valencia
  - **Recoge en una ciudad, devuelve en otra** — sin itinerario obligatorio, sin vuelta forzada
  - **Desde 1989** — dos generaciones de familia, cientos de viajeros, una sola forma de entender la carretera
- Sin párrafos largos. Solo afirmaciones que diferencian.

---

## Sección 1.3 — Preview de flota por tipo

**Objetivo:** Activar el deseo y orientar al usuario hacia el tipo de furgoneta que encaja con su forma de viajar, antes de que llegue a la página de flota completa.

**Mensaje principal:** *No todas las furgonetas son iguales. Tampoco todos los viajes.*

**Contenido:**

Tres tarjetas visuales, una por tipo. Cada tarjeta presenta el tipo como una forma de viajar, no como una categoría técnica. Se muestra una furgoneta representativa de cada tipo como ejemplo visual.

**Tarjeta Esencial:**
- Imagen de una furgoneta del tipo, en entorno natural, limpia y directa
- Nombre del tipo: **Esencial**
- Línea descriptiva: *Para los que prefieren llegar ligeros. Lo necesario está, lo superfluo se queda en casa.*
- CTA: *Ver furgonetas Esencial*

**Tarjeta Viajera:**
- Imagen de una furgoneta del tipo, con toldo desplegado o en ruta
- Nombre del tipo: **Viajera**
- Línea descriptiva: *Preparada para viajes largos y rutas mixtas. La que lleva parejas al Algarve y solitarios hasta el Pirineo.*
- CTA: *Ver furgonetas Viajera*

**Tarjeta Singular:**
- Imagen de la furgoneta más fotogénica del tipo, con detalle del interior
- Nombre del tipo: **Singular**
- Línea descriptiva: *No son las más caras. Son las más especiales. Pocas unidades, restauración excepcional.*
- CTA: *Ver furgonetas Singular*

**CTA general al final de la sección:** *Ver toda la flota*

**Nota de implementación:** La furgoneta representativa de cada tipo se selecciona marcando una unidad como `featured: true` en los datos. En `Home.jsx`, se toma la primera van con `featured: true` de cada tipo para renderizar las tres tarjetas.

---

## Sección 1.4 — ¿Para quién es esto?

**Objetivo:** Abordar la pregunta implícita de los tres perfiles ("¿es esto para mí?") y convertirla en identificación. No nombrar los buyer personas — hablar directamente de formas de viajar.

**Mensaje principal:** *Hay personas que necesitan llegar. Y hay personas que necesitan viajar. Esta web es para las segundas.*

**Contenido:**
- Tres bloques visuales, uno por perfil de viajero:
  - *Para los que viajan solos y necesitan desconectar de verdad*
  - *Para las parejas que quieren un viaje que recordar juntos*
  - *Para quienes vienen de lejos buscando Europa desde dentro*
- Cada bloque con imagen y 2–3 líneas de copy evocador
- Sin listas de características. Sin bullet points.

---

## Sección 1.5 — Prueba social

**Objetivo:** Generar confianza mediante voces reales. Que el usuario sienta que otras personas como él ya lo han hecho.

**Mensaje principal:** *Esto no lo decimos nosotros.*

**Contenido:**
- 2–3 testimonios largos y reales (no frases de 10 palabras), con nombre, foto y ruta que hicieron
- Una imagen de la sección social que invite a descubrirla
- CTA: *Ver historias de viaje*

---

## Sección 1.6 — Newsletter

**Objetivo:** Capturar al usuario que todavía no está listo para reservar pero tiene interés. Es el lead más valioso a largo plazo.

**Mensaje principal:** *Rutas, historias de carretera y cosas que vale la pena saber antes de salir. Una vez al mes. Sin ruido.*

**Contenido:**
- Nombre de la newsletter: ***Kilómetro Cero***
- Campo de email + CTA: *Apúntame*
- Una línea de expectativa concreta: *"Próximo número: las carreteras secundarias más bonitas de la Península que no salen en ninguna guía."*

---

## Sección 1.7 — Cierre / Gancho a Sobre nosotros

**Objetivo:** Humanizar la marca antes de que el usuario se vaya.

**Mensaje principal:** *Crecimos en una furgoneta. Abrimos esto para que tú puedas sentir lo mismo.*

**Contenido:**
- Foto real de los fundadores o del taller
- 3–4 líneas de historia genuina, sin retórica corporativa
- CTA: *Nuestra historia*

---

# PÁGINA DE FLOTA — Las Furgonetas

## Sección 2.1 — Introducción y filtros

**Objetivo:** Preparar emocionalmente al usuario antes de mostrarle los vehículos. Evitar que entre en modo "comparar precios". Ofrecer filtros útiles sin abrumar.

**Mensaje principal:** *No elegirás una furgoneta. Elegirás con cuál de ellas quieres perderte.*

**Contenido:**
- Headline + 2 líneas de copy que establecen el tono
- Sistema de filtros:
  - **Por tipo** (Esencial / Viajera / Singular) — filtro principal, siempre visible
  - **Por fechas y ciudad de recogida** — funcional, secundario visualmente
  - **Favoritos** — para usuarios que ya han explorado y guardado
  - **Reset** — siempre disponible, sin fricción

**Nota sobre los tipos como filtro:**
Los tres tipos no son niveles de precio ni de equipamiento en sentido técnico — son formas de viajar. La descripción de cada tipo en el filtro debe ser brevísima pero evocadora, no una lista de características. Ejemplo: al pasar el cursor sobre *Viajera*, una línea: *"Para viajes largos y rutas exigentes."*

---

## Sección 2.2 — Ficha de cada furgoneta

**Objetivo:** Enamorar al usuario de una furgoneta concreta y llevarle a reservar.

**Mensaje principal:** Diferente para cada furgoneta. Concreto, artesanal, con criterio.

### Sistema de presentación de cada furgoneta

Cada furgoneta tiene una ficha con estructura fija pero voz propia. La historia se cuenta en tercera persona, con tono de taller experto — como presenta una tienda especializada un instrumento vintage: con datos reales, con respeto por el objeto, sin artificios.

**Estructura de la ficha:**

**Nombre + modelo + año** — en grande, como titular
> Ejemplo: *[Nombre por definir] · VW T2 · 1973*

**Tipo** — badge visual discreto
> Esencial / Viajera / Singular

**Historia en 3–4 líneas** — el bloque más importante de la ficha. Sigue siempre este orden:
1. **Procedencia** — de dónde viene la furgoneta, si tiene historia documentada
2. **Restauración** — qué se ha hecho en el taller, qué materiales, qué decisiones
3. **Carácter** — qué la hace diferente al resto, sin exagerar ni inventar

Ejemplo aplicado a una furgoneta tipo Singular:
> *Carrocería original de 1973, llegada desde el norte de Europa con estructura intacta. Motor reconstruido íntegramente en nuestro taller en Valencia. Interior restaurado con madera de roble y lona natural. Una de las piezas más completas de la flota.*

Ejemplo aplicado a una furgoneta tipo Esencial:
> *Restauración completa de mecánica y carrocería. Sin artificios. Construida para quien quiere la carretera sin distracciones.*

Ejemplo aplicado a una furgoneta tipo Viajera:
> *Restauración completa con interior diseñado para viajes largos: cama doble fija, cocina integrada, almacenamiento pensado para dos personas y muchos días.*

**Lo que nunca aparece en una ficha:**
- Defectos, manías o imperfecciones del vehículo
- Lenguaje en primera persona de la furgoneta
- Adjetivos vacíos: "increíble", "única", "espectacular"
- Promesas que no se puedan verificar

**Galería fotográfica:**
- Exterior (varios ángulos)
- Interior (cama, cocina, espacio de vida)
- Detalles de la restauración (salpicadero, materiales, acabados)
- Al menos una foto en contexto de viaje real

**Equipamiento** — explicado con criterio, no como lista técnica:
> En lugar de: *"Nevera 12V, hornillo 2 fuegos, depósito agua 20L"*
> Escribir: *"Cocina integrada con hornillo de gas y nevera eléctrica. Todo lo que necesitas para comer bien en cualquier sitio."*

**Datos prácticos:**
- Plazas
- Tipo de cama y medidas
- Ciudades de recogida y devolución disponibles
- Precio por día (con desglose honesto, sin letra pequeña sorpresa)

**CTAs:**
- Principal: *Reservar esta furgoneta*
- Secundario: *¿Tienes dudas? Escríbenos*

---

## Sección 2.3 — ¿Cómo funciona?

**Objetivo:** Eliminar la fricción de usuarios que quieren reservar pero tienen miedo de no entender el proceso.

**Mensaje principal:** *Es más sencillo de lo que parece. Y si no, estamos aquí.*

**Contenido:**
- 4 pasos visuales y concretos:
  1. *Elige tu furgoneta*
  2. *Reserva online*
  3. *Recógela con un café y un mapa*
  4. *Devuélvela cuando acabes — donde quieras*
- Sin letra pequeña. Con lenguaje de persona, no de contrato.
- Enlace a página de preguntas frecuentes

---

# PÁGINA SOBRE NOSOTROS — Nuestra Historia

## Sección 3.1 — El origen

**Objetivo:** Construir confianza profunda mediante autenticidad. Esta página es la que convierte al usuario indeciso. Es especialmente crítica para James (viajero internacional), que investiga a fondo antes de reservar.

**Mensaje principal:** *No abrimos esto para hacer negocio. Lo abrimos porque no sabíamos vivir de otra manera.*

**Contenido:**
- Historia de los fundadores narrada de forma cercana y concreta: la infancia viajando por Europa, los años en carretera, la decisión de establecerse en Valencia sin renunciar al espíritu nómada, la apertura en 1989
- Detalles geográficos reales: las rutas europeas de su infancia, los países que cruzaron, la Valencia que encontraron
- Fotos históricas si existen: familia, furgonetas antiguas, el primer local
- Sin misión ni visión corporativa. Sin valores en lista.

---

## Sección 3.2 — El taller

**Objetivo:** Justificar el precio, generar confianza técnica y diferenciar de competidores que simplemente compran y pintan furgonetas.

**Mensaje principal:** *Cada furgoneta pasa por nuestras manos antes de pasar por las tuyas.*

**Contenido:**
- Proceso de restauración explicado con honestidad: qué se revisa, qué se repara, qué se mantiene original y por qué
- Fotos del taller, del equipo trabajando, de detalles de restauración
- Una cita directa del fundador sobre su filosofía de trabajo

---

## Sección 3.3 — El equipo

**Objetivo:** Poner caras reales detrás de la marca.

**Mensaje principal:** *Somos poca gente. Pero conocemos cada tornillo de cada furgoneta.*

**Contenido:**
- Fotos y mini-bios de los fundadores y equipo estable
- Tono informal y real. No perfiles de LinkedIn.

---

# PÁGINA SOCIAL — En Carretera

## Sección 4.1 — Introducción

**Objetivo:** Establecer que esto no es una galería de marketing, sino una comunidad real de viajeros.

**Mensaje principal:** *Aquí viven los viajes que nos habéis mandado. Cada foto es una carretera que alguien eligió recorrer despacio.*

**Contenido:**
- Headline + 2 líneas de invitación a participar
- CTA: *Comparte tu viaje*

---

## Sección 4.2 — Feed de fotografías

**Objetivo:** Inspirar a usuarios que no han reservado todavía. Generar deseo auténtico. Reforzar comunidad para quienes ya han viajado.

**Mensaje principal:** El contenido habla solo. El copy de la interfaz debe ser invisible.

**Contenido:**
- Grid visual de fotos enviadas por usuarios
- Cada foto: nombre del viajero, furgoneta usada (con su nombre definitivo), ruta
- Filtros opcionales: por tipo de furgoneta, por zona geográfica, por época del año
- Al hacer clic en una foto: historia breve — *"Laura y Marcos. [Nombre de furgoneta]. Costa Brava a Doñana. 14 días. Septiembre."*
- CTA contextual: *¿Quieres hacer esta ruta? Mira si [nombre de furgoneta] está disponible*

---

## Sección 4.3 — Cómo participar

**Objetivo:** Activar al usuario que ya ha viajado para que contribuya.

**Mensaje principal:** *Tu viaje merece estar aquí.*

**Contenido:**
- Instrucciones simples para enviar fotos
- Hashtag de la comunidad para redes sociales
- Incentivo: las mejores fotos aparecen en la newsletter mensual

---

# PÁGINA DE RUTAS — Inspiración

## Sección 5.1 — Introducción

**Objetivo:** Capturar usuarios en fase de inspiración y acercarlos a la reserva mediante contenido de valor. Principal página de entrada SEO y de newsletter.

**Mensaje principal:** *No vendemos rutas. Compartimos las que a nosotros nos han funcionado.*

**Contenido:**
- Headline + contexto de autoría: estas rutas las han hecho clientes reales o las conoce el equipo de primera mano
- Filtros: duración, punto de partida, tipo de paisaje, país (España, Portugal, Francia, otros) — **el filtro geográfico debe contemplar Europa desde el inicio**, coherente con la visión de expansión de la marca

---

## Sección 5.2 — Fichas de ruta

**Objetivo:** Dar valor real y vincular cada ruta a una furgoneta y a una reserva.

**Mensaje principal:** Concreto y evocador para cada ruta. Con criterio propio, no con lenguaje de guía turística.

**Contenido por ficha:**
- Nombre de la ruta con personalidad: *"De Valencia al fin del mundo"*, *"La ruta que no sale en ninguna guía"*
- Duración, kilómetros aproximados, mejor época del año
- País o países que atraviesa
- Mapa visual con paradas marcadas
- Descripción narrativa — no una lista de lugares, sino una historia de lo que te encontrarás
- Paradas recomendadas con detalle real: dónde dormir en la furgoneta, dónde comer, qué no perderse
- Nivel de dificultad de conducción (importante para Claire & Thomas y para James)
- Tipo de furgoneta recomendada para esa ruta
- CTA: *Hacer esta ruta con [tipo de furgoneta recomendado]*

---

# PÁGINA DE PREGUNTAS FRECUENTES

**Objetivo general:** Eliminar todas las objeciones que frenan la reserva. Crítica para James (seguro internacional, atención en inglés) y para Claire & Thomas (asistencia en carretera, comodidad).

**Mensaje principal:** *Aquí están las preguntas que nos hacen siempre. Y las respuestas de verdad.*

**Bloques de preguntas:**

**Antes de reservar**
- ¿Necesito carnet especial para conducir una furgoneta?
- ¿Puedo recogerla en una ciudad y devolverla en otra?
- ¿Puedo llevar la furgoneta fuera de España?
- ¿Con cuánta antelación necesito reservar?
- ¿Qué pasa si quiero cancelar o cambiar fechas?

**El vehículo**
- ¿Están las furgonetas revisadas mecánicamente?
- ¿Qué pasa si se avería en carretera?
- ¿Qué incluye el equipamiento?
- ¿Cómo funciona la cama / la cocina / la electricidad?

**El viaje**
- ¿Dónde puedo aparcar y dormir legalmente?
- ¿Qué seguro está incluido?
- ¿Tienen atención en inglés y francés?

**Al devolver**
- ¿Cómo debo devolver la furgoneta?
- ¿Qué pasa si hay algún daño?

**Tono de las respuestas:** Directo y humano. Nunca lenguaje legal. Si hay condiciones necesarias, se explican con honestidad antes de que el usuario las encuentre por sorpresa.

---

# NEWSLETTER — Kilómetro Cero

**Objetivo:** Construir una audiencia en fase de inspiración que aún no está lista para reservar, y convertirla en clientes cuando llegue su momento. Fidelizar a quienes ya han viajado.

**Mensaje principal de suscripción:** *Una vez al mes. Rutas, historias de carretera y cosas que vale la pena saber antes de salir. Sin ruido.*

**Tipos de contenido:**

| Número | Tipo | Ejemplo |
|---|---|---|
| Ruta | Guía narrativa de una ruta concreta | *De San Sebastián a Lisboa por la costa: 12 días, cero autopistas* |
| Historia | Testimonio largo de un cliente real | *Cómo James llevó a sus hijos a recorrer Andalucía en una Combi del 71* |
| Cultura | Historia y filosofía vanlife europea | *Por qué el VW Combi se convirtió en el símbolo de una generación* |
| Consejo | Lo que Mikel y Lola saben y tú no | *Lo que hacemos antes de entregar cada furgoneta que nadie te cuenta* |
| Comunidad | Mejores fotos del mes | *Los viajes de octubre: 14 rutas, 6 países, una forma de viajar* |

---

# Arquitectura de rutas — React Router

Basado en la estructura actual del proyecto (`App.jsx`), la arquitectura de rutas definitiva:

```
/                          → Homepage
/vans                      → Página de flota completa (con filtros)
/vans/:id                  → Ficha individual de furgoneta
/about                     → Nuestra historia
/community                 → En Carretera (sección social)
/routes                    → Inspiración y rutas
/faq                       → Preguntas frecuentes
/newsletter                → Landing de suscripción a Kilómetro Cero
```

**Rutas pendientes de añadir a `App.jsx`:**
- `/community`
- `/routes`
- `/faq`
- `/newsletter`

---

# Mapa de conversión por perfil

| Perfil | Entrada | Recorrido probable | Punto de conversión |
|---|---|---|---|
| **Andrés** | Instagram → Homepage | Hero → Tipos de van → Ficha → Reserva | Directo, 1–2 visitas |
| **Claire & Thomas** | Google / blog → Homepage | Hero → ¿Para quién? → FAQ → Flota → Sobre nosotros → Reserva | 2–4 visitas, comparan |
| **James** | Google en inglés → Sobre nosotros | Historia → Flota → FAQ → Rutas → Reserva | 3–5 visitas, investiga |

---

# Resumen de páginas

| Página | Ruta | Función principal |
|---|---|---|
| Homepage | `/` | Seducción + orientación + captura de leads |
| Flota | `/vans` | Deseo + filtrado + conversión |
| Ficha de van | `/vans/:id` | Enamoramiento + reserva |
| Sobre nosotros | `/about` | Confianza + humanización |
| En Carretera | `/community` | Comunidad + prueba social + inspiración |
| Rutas | `/routes` | SEO + inspiración + puente a reserva |
| FAQ | `/faq` | Eliminación de objeciones |
| Newsletter | `/newsletter` | Captación de leads fríos + fidelización |