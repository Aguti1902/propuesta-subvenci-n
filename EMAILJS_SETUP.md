# Configuración de EmailJS para el Formulario de Contacto

Para que el formulario de contacto funcione y te lleguen los emails a **info@nexgent.io**, necesitas configurar EmailJS.

## 📋 Pasos de configuración

### 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz click en **Sign Up** (es gratis para hasta 200 emails/mes)
3. Regístrate con tu email

### 2. Conectar tu cuenta de Gmail

1. En el dashboard de EmailJS, ve a **Email Services**
2. Click en **Add New Service**
3. Selecciona **Gmail**
4. Autoriza el acceso a tu cuenta **info@nexgent.io**
5. Copia el **Service ID** que te genera (algo como `service_xxxxxxx`)

### 3. Crear una plantilla de email

1. Ve a **Email Templates**
2. Click en **Create New Template**
3. Usa este contenido para la plantilla:

**Subject:**
```
Nueva solicitud de información - {{association_name}}
```

**Body (HTML):**
```html
<p><strong>Nueva solicitud de información desde la propuesta KTED 2025</strong></p>

<p><strong>Nombre de la asociación:</strong><br>
{{association_name}}</p>

<p><strong>Correo electrónico:</strong><br>
{{user_email}}</p>

<p><strong>Teléfono:</strong><br>
{{user_phone}}</p>

<hr>

<p><em>Este mensaje fue enviado desde el formulario de contacto de la presentación KTED 2025</em></p>
```

4. En **Settings**, asegúrate de que el email va a: `info@nexgent.io`
5. Guarda la plantilla y copia el **Template ID** (algo como `template_xxxxxxx`)

### 4. Obtener tu Public Key

1. Ve a **Account** → **General**
2. Copia tu **Public Key** (algo como `xxxxxxxxxxxx`)

### 5. Actualizar el código

Abre el archivo `src/components/ContactModal.tsx` y reemplaza estas líneas (líneas 22-24):

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Reemplazar con tu Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Reemplazar con tu Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Reemplazar con tu Public Key
```

Por tus credenciales reales:

```typescript
const serviceId = 'service_xxxxxxx'; // Tu Service ID de EmailJS
const templateId = 'template_xxxxxxx'; // Tu Template ID de EmailJS
const publicKey = 'xxxxxxxxxxxx'; // Tu Public Key de EmailJS
```

### 6. Guardar y probar

1. Guarda el archivo
2. El servidor de desarrollo se recargará automáticamente
3. Prueba el formulario haciendo click en "Quiero más información"
4. Revisa que el email llegue a **info@nexgent.io**

## ✅ ¡Listo!

Ahora cada vez que alguien envíe el formulario, recibirás un email con:
- Nombre de la asociación
- Email de contacto
- Número de teléfono

## 🔧 Solución de problemas

### "Error al enviar el formulario"
- Verifica que las credenciales sean correctas
- Asegúrate de que el servicio de Gmail esté autorizado
- Revisa que la plantilla use los parámetros correctos: `association_name`, `user_email`, `user_phone`, `to_email`

### No llegan los emails
- Revisa la carpeta de spam
- Verifica que en la plantilla de EmailJS el email de destino sea `info@nexgent.io`
- Comprueba en el dashboard de EmailJS si hay errores en el log

## 📊 Límites del plan gratuito

- **200 emails/mes** gratis
- Si necesitas más, puedes upgrader a un plan de pago

## 🔒 Seguridad

- Las credenciales se mantienen en el frontend, pero EmailJS las valida en su servidor
- No se pueden usar para spam porque están limitadas por dominio
- Puedes restringir el uso solo a tu dominio en la configuración de EmailJS

