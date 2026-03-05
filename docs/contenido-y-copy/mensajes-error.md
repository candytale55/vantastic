# Generar los mensajes de error al usuario (formulario)

```md
Eres un **Senior Frontend Engineer** con enfoque en **UI/UX** y validación de formularios con **React Hook Form**.

Usando el formulario del snippet proporcionado como fuente de verdad, genera **validaciones y mensajes de error** para cada campo.

### Requisitos por campo

Para cada campo devuelve **tres configuraciones**: `mínimo`, `medio`, `dios`.

Cada configuración debe ser **solo** el objeto que se pasa como segundo argumento en `register`, por ejemplo:

* ✅ Correcto:
  `{ required: { value: true, message: "..." }, minLength: ... }`
* ❌ Incorrecto:
  `...register("campo", { ... })` (no lo incluyas)
  o JSX completo del input (no lo incluyas)

### Criterios de calidad (UI/UX)

* Mensajes en **español**, cortos, concretos, sin tono “culpabilizador”.
* Indica **qué falta** y **cómo arreglarlo** (cuando aplique).
* Evita mensajes genéricos tipo “Campo inválido” salvo que sea estrictamente necesario.

### Criterios técnicos

* Ajusta reglas según el **tipo**: `text/email/tel/date/select/radio/checkbox/textarea`.
* Incluye:

  * `required` donde sea necesario.
  * Reglas de formato (ej: email), longitud (ej: nombre), patrones (ej: teléfono) cuando tengan sentido.
  * Fechas: asegurar mínimos (`today`) y coherencia entre fechas con dependencias.
  * `select`: validar que no sea el placeholder.
  * `radio`: asegurar selección.
  * `checkbox` (extras): permitir 0 o más, pero añade reglas si consideras una mejora UX (solo en niveles superiores y explícalo en el mensaje).
  * `textarea`: opcional, pero con límites razonables (en niveles superiores).

### Salida

Devuelve una **tabla Markdown** con:
**Campo | Mínimo (config) | Medio (config) | Nivel Dios (config)**
```

(Cambié el formato)

¡Entendido! Aquí tienes las validaciones y mensajes de error organizados por campo, con cada configuración de nivel (Mínimo, Medio, Dios) dentro de su propia caja de código Markdown para mayor claridad:

**userName**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Necesitas ingresar un nombre."    
    },
    minLength: { 
        value: 2, 
        message: "El nombre debe tener al menos 2 caracteres."
    }
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Por favor, escribe tu nombre." 
    },
    minLength: { 
        value: 2, 
        message: "El nombre debe tener al menos 2 caracteres." 
    },
    maxLength: { 
        value: 50, 
        message: "El nombre no debe exceder los 50 caracteres." 
    },
    pattern: { 
        value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, 
        message: "El nombre solo puede contener letras y espacios." 
    }
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Ingresa tu nombre completo, por favor." 
    },
    minLength: { 
        value: 3, 
        message: "El nombre debe tener al menos 3 caracteres para ser válido." 
    },
    maxLength: { 
        value: 70, 
        message: "El nombre no puede exceder los 70 caracteres." 
    },
    pattern: { 
        value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, 
        message: "Solo se permiten letras y espacios en el nombre." 
    },
    validate: (value) => value.trim().split(' ').length > 1 || "Incluye tu apellido para un nombre completo." 
}
```

**userEmail**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Necesitas ingresar un email." 
    } 
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Por favor, escribe tu email." 
    },
    pattern: { 
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
        message: "El formato del email no es válido." 
    }
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Ingresa tu dirección de correo electrónico." 
    },
    pattern: { 
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        message: "Por favor, verifica el formato de tu email." 
    } 
}
```

**userPhone**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Necesitas ingresar un número de teléfono." 
    } 
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Por favor, escribe tu número de teléfono." 
    },
    pattern: { 
        value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 
        message: "El formato del teléfono no es válido (ej: +34 123 456 789)." 
    } 
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Ingresa un número de teléfono para contactarte." 
    },
    pattern: { 
        value: /^\+?\d{9,15}$/, 
        message: "El teléfono debe contener entre 9 y 15 dígitos y puede empezar con '+'." 
    } 
}
```

**pickupDate**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Selecciona una fecha de recogida." 
    } 
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Por favor, elige la fecha de recogida." 
    },
    min: { 
        value: new Date().toISOString().split('T')[0], 
        message: "La fecha de recogida no puede ser anterior a hoy." 
    } 
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Indica la fecha en que quieres recoger el vehículo." 
    },
    min: { 
        value: new Date().toISOString().split('T')[0], 
        message: "La fecha de recogida no puede ser en el pasado." 
    },
    validate: (value) => { 
        const today = new Date(); 
        today.setHours(0,0,0,0); 
        const selectedDate = new Date(value); 
        selectedDate.setHours(0,0,0,0); 
        return selectedDate >= today || "La fecha de recogida debe ser hoy o posterior."; 
    } 
}
```

**pickup-location**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Selecciona una ciudad de recogida." 
    } 
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Elige la ciudad donde recogerás el vehículo." 
    },
    validate: (value) => value !== "" || "Por favor, selecciona una ciudad válida." 
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Para continuar, selecciona la ciudad de recogida." 
    },
    validate: (value) => value !== "" || "Debes elegir una opción de la lista para la ciudad de recogida." 
}
```

**returnDate**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Selecciona una fecha de entrega." 
    } 
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Por favor, elige la fecha de entrega." 
    },
    min: { 
        value: new Date().toISOString().split('T')[0], 
        message: "La fecha de entrega no puede ser anterior a hoy." 
    },
    validate: (value, formValues) => { 
        if (!formValues.pickupDate) return true; // No validar si no hay fecha de recogida 
        const pickup = new Date(formValues.pickupDate); 
        const returnD = new Date(value); 
        pickup.setHours(0,0,0,0); 
        returnD.setHours(0,0,0,0); 
        return returnD >= pickup || "La fecha de entrega debe ser igual o posterior a la de recogida."; 
    } 
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Indica la fecha en que devolverás el vehículo." 
    },
    validate: (value, formValues) => { 
        if (!formValues.pickupDate) return "Primero selecciona la fecha de recogida."; 
        const pickup = new Date(formValues.pickupDate); 
        const returnD = new Date(value); 
        pickup.setHours(0,0,0,0); 
        returnD.setHours(0,0,0,0); 
        return returnD >= pickup || "La fecha de entrega no puede ser anterior a la de recogida."; 
    } 
}
```

**return-location**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Selecciona una ciudad de entrega." 
    } 
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Elige la ciudad donde entregarás el vehículo." 
    },
    validate: (value) => value !== "" || "Por favor, selecciona una ciudad válida." 
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Para finalizar, selecciona la ciudad de entrega." 
    },
    validate: (value, formValues) => value !== "" || "Debes elegir una opción de la lista para la ciudad de entrega." 
}
```

**racks**

**Mínimo (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Selecciona una opción de portaequipaje." 
    } 
}
```

**Medio (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Por favor, elige un tipo de portaequipaje." 
    } 
}
```

**Nivel Dios (config)**
```javascript
{ 
    required: { 
        value: true, 
        message: "Es necesario que selecciones una opción de portaequipaje." 
    } 
}
```

**extras**

**Mínimo (config)**
```javascript
{}
```

**Medio (config)**
```javascript
{}
```

**Nivel Dios (config)**
```javascript
{ 
    validate: (value) => (value && value.length >= 0) || "Selecciona al menos una opción o déjalo vacío.", 
    minLength: { 
        value: 0, 
        message: "Puedes elegir 0 o más accesorios adicionales." 
    } 
}
```

**userComments**

**Mínimo (config)**
```javascript
{}
```

**Medio (config)**
```javascript
{ 
    maxLength: { 
        value: 200, 
        message: "Los comentarios no deben exceder los 200 caracteres." 
    } 
}
```

**Nivel Dios (config)**
```javascript
{ 
    maxLength: { 
        value: 500, 
        message: "El comentario es demasiado largo, máximo 500 caracteres." 
    } 
}
```