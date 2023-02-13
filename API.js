const express = require('express');
const app = express();

// Define una ruta para obtener todas las tareas
app.get('/tasks', (req, res) => {
    const tasks = [
        {
            id: 1,
            name: 'Tarea 1',
            description: 'Descripción de la tarea 1'
        },
        {
            id: 2,
            name: 'Tarea 2',
            description: 'Descripción de la tarea 2'
        },
        {
            id: 3,
            name: 'Tarea 3',
            description: 'Descripción de la tarea 3'
        }
    ];

    res.json(tasks);
});

// Define una ruta para obtener una tarea específica por ID
app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const tasks = [
        {
            id: 1,
            name: 'Tarea 1',
            description: 'Descripción de la tarea 1'
        },
        {
            id: 2,
            name: 'Tarea 2',
            description: 'Descripción de la tarea 2'
        },
        {
            id: 3,
            name: 'Tarea 3',
            description: 'Descripción de la tarea 3'
        }
    ];
    
    const task = tasks.find(task => task.id === parseInt(taskId));

    if (!task) {
        return res.status(404).send('La tarea con el ID especificado no se encontró');
    }

    res.json(task);
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});