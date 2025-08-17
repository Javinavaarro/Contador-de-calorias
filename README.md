# 🥗 Contador de Calorías - Proyecto con React + Vite

Este proyecto forma parte de mi aprendizaje en **React**, profundizando en el uso de **`useReducer`**, la gestión de estado global y el trabajo con **`localStorage`** para la persistencia de datos.  
El objetivo fue construir una aplicación completa que permita llevar un control de calorías **consumidas** y **quemadas** mediante comidas y ejercicios.

---

## 🚀 Descripción

La aplicación funciona como un **contador de calorías**.  
El usuario puede introducir **actividades** (comidas o ejercicios) indicando su nombre y calorías correspondientes.  

A partir de ahí, la app permite:  
- **Guardar** comidas y ejercicios en una lista.  
- **Editar** actividades existentes.  
- **Eliminar** actividades seleccionadas.  
- **Visualizar**:
  - Calorías consumidas.  
  - Calorías quemadas.  
  - Balance neto entre ambas.  

Se trabajó especialmente con **`useReducer`** para organizar la lógica de acciones (`save-activity`, `set-activeId`, `remove-activity`).  
Además, los datos se almacenan en **localStorage**, garantizando que la información persista aunque se recargue la página.  

---

## 🌐 Proyecto desplegado

Puedes probar la aplicación directamente aquí:  
🔗 [**Ver en Netlify**](https://calorietracker164.netlify.app/)

---

## 🧩 Conceptos de React aplicados

- **`useReducer`** → Gestión de estado compleja con varias acciones.  
  - `state` contiene las **actividades** y el **id activo**.  
  - `dispatch` dispara las acciones desde los componentes.  
  - El reducer centraliza toda la lógica de edición, borrado y añadido.  

- **Persistencia con `localStorage`** → Los datos de las actividades se guardan en memoria local, evitando que se pierdan al refrescar la página.  

- **Cálculos optimizados con `useMemo`** → Para obtener las calorías **consumidas**, **quemadas** y el **balance neto** sin recalcular en cada render innecesario.  

- **Props y componentes reutilizables** → El estado fluye hacia distintos componentes que muestran resultados o listas de actividades.  

---

## 🧱 Componentes principales

1. **Formulario**  
   - Permite introducir una nueva actividad (comida o ejercicio).  
   - Recibe `dispatch` para añadir o editar en el `state`.  

2. **Listado de Actividades**  
   - Muestra todas las actividades guardadas.  
   - Cada actividad puede ser seleccionada para edición o borrada.  

3. **Resumen de Calorías**  
   - Muestra calorías consumidas, quemadas y balance total.  
   - Calculado mediante `useMemo`.  

4. **Actividad Individual**  
   - Representa cada elemento de la lista.  
   - Incluye botones de **editar** y **eliminar** que disparan acciones en el reducer.  

---

## 🧠 Evolución del proyecto

- Primera versión: formulario simple y listado de actividades.  
- Segunda versión: implementación de **`useReducer`** para centralizar la lógica.  
- Incorporación de **`localStorage`** para mantener los datos tras recargar.  
- Mejora de la UI mediante separación de componentes y cálculos optimizados con `useMemo`.  

---

## 🛠️ Tecnologías utilizadas

- **React** con **Vite**  
- **TypeScript**  
- **React Hooks** (`useReducer`, `useMemo`)  
- **Tailwind CSS**  
- **LocalStorage** (persistencia de datos)  
