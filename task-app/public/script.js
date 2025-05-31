loadTasks();

function loadTasks() {
    axios.get('/tasks').then(res => {
        let tasks = res.data;
        renderTable(tasks);
    })
}

function renderTable(tasks) {
    const tbody = document.querySelector('#taskTable tbody');
    tbody.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        
        const priorityClass = `priority-${task.priority.toLowerCase()}`;
        const statusClass = `status-${task.status.toLowerCase().replace(' ', '')}`;
        
        row.innerHTML = `
            <td>${task.name}</td>
            <td title="${task.description}">${task.description}</td>
            <td><span class="${priorityClass}">${task.priority}</span></td>
            <td><span class="status-badge ${statusClass}">${task.status}</span></td>
            <td>${task.dueDate}</td>
            <td>
                <button class="btn edit-btn" onclick="editTask('${task.id}')">Edit</button>
                <button class="btn delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

let editingIndex = -1;

function openModal() {
    document.getElementById('taskModal').style.display = 'block';
    document.getElementById('modalTitle').textContent = 'Add New Task';
    document.getElementById('taskForm').reset();
    editingIndex = -1;
}

function closeModal() {
    document.getElementById('taskModal').style.display = 'none';
}

function editTask(id) {
  axios.get(`/tasks/${id}`).then(res => {
    const editTask = res.data;
    alert(editTask.name);
  });       
}

function deleteTask(id) {
    axios.delete('/tasks/' + id).then(res => {
        console.log('Task deleted:', res.data);
        loadTasks();
    }).catch(err => {
        console.log('Error deleting task:', err);
    });
}

          // Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('taskModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Handle form submission
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const newTask = {
        name: formData.get('taskName'),
        description: formData.get('taskDescription'),
        priority: formData.get('taskPriority'),
        status: formData.get('taskStatus'),
        dueDate: formData.get('taskDueDate')
    };

    axios.post('/tasks', newTask).then(res => {
        console.log('Task saved:', res.data);
    }).catch(err => {
        console.error('Error saving task:', err);
    })

    // if (editingIndex >= 0) {
    //     tasks[editingIndex] = newTask;
    // } else {
    //     tasks.push(newTask);
    // }

    loadTasks();
    closeModal();
});

function showToast(message, duration = 3000) {
  const toast = document.getElementById('toastMessage');
  toast.textContent = message;
  toast.style.display = 'block';

  setTimeout(() => {
      toast.style.display = 'none';
  }, duration);
}