# 📝 Todo Manager / Task Tracker

**[中文版说明 / Chinese Version](./README_zh_cn.md)**

A lightweight web-based task manager built entirely in a single **HTML file** using **IndexedDB** for persistent storage.
It supports adding, editing, deleting, completing, filtering, and exporting tasks, with progress visualization and responsive design.

---

## 🚀 Features

* ✅ Add, edit, and delete tasks
* ⏱ Support for task deadlines with automatic remaining time calculation
* 🔔 Dynamic status display: Safe / Warning / Urgent / Expired
* 🎯 Search and filter tasks (All / Completed / Incomplete / Expired / No Deadline)
* 📊 Progress bar visualization of time remaining
* 📁 Import and export task data in JSON format
* 🎨 Responsive design for both desktop and mobile
* 📦 Single-file HTML app with IndexedDB persistence — no installation or server required

---

## 🌐 Live Demo

Try it now: [https://todo.muquew.com/](https://todo.muquew.com/)

---

## 📸 Screenshots

<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; align-items: flex-start;">
    <img src="./screenshots/task-list.png" alt="Task List" style="width: 45%; max-width: 300px; border-radius: 8px;"/>
    <img src="./screenshots/add-task.png" alt="Add Task Dialog" style="width: 45%; max-width: 300px; border-radius: 8px;"/>
</div>

---

## 💻 How to Use

1. Clone or download the repository:

```bash
git clone https://github.com/muquew/Todo-Manager.git
```

2. Open `index.html` in your browser:

```bash
open index.html
```

Or simply drag it into your browser window.

3. Main operations:

   * Click **“Add Task”** to create a new task
   * Edit tasks to modify name, description, and due date
   * Check **“No Deadline”** for open-ended tasks
   * Use the filter bar to quickly switch between task states
   * **Export** tasks for backup or **Import** JSON data to restore

---

## 📂 Project Structure

```
.
├── index.html  # Single file containing HTML, CSS, and JS
└── README.md   # Project description
```

---

## 🌟 Future Improvements

* 🔹 Local notifications for upcoming deadlines
* 🔹 Drag-and-drop task sorting
* 🔹 Dark mode / Custom themes
* 🔹 Multi-user sync via cloud storage

---

## ⚖️ License

### Personal Non-Commercial License

Copyright (c) 2025 muquew

Permission is hereby granted, free of charge, to any individual user obtaining a copy of this software and associated documentation files (the "Software"), to use the Software under the following conditions:

1. **Scope**

   * For **personal use only**, including learning, research, or personal task management.
   * **Commercial use is strictly prohibited**, including but not limited to selling, paid services, or business distribution.

2. **Rights**

   * You may download, use, and modify the Software for non-commercial purposes.
   * You may share the Software with other individual users.

3. **Restrictions**

   * You may **not** use the Software for any direct or indirect commercial activity.
   * You may **not** distribute or sell the Software or its modified versions for profit.

4. **Disclaimer**

   * The Software is provided “as is,” without any warranty of any kind.
   * The author assumes no responsibility for any damages arising from its use.

---

**Note:**
By downloading or using this software from this repository, you agree to comply with the above terms.
