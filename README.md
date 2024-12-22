# To-do-list
# Todo List App

A simple, intuitive Todo List App built using React. The app allows users to add, delete, and reorder tasks, providing an easy way to manage daily activities.

## Features
- **Add Tasks**: Users can add new tasks to the list.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Reorder Tasks**: Move tasks up or down the list to prioritize effectively.
- **User-Friendly UI**: Minimalistic and responsive design.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a task in the input field and click **Add** to add it to the list.
3. Use the **Delete** button to remove tasks.
4. Use the **Up** and **Down** buttons to reorder tasks.

## Code Overview
### Component: `Todolist`
This component is responsible for rendering the entire Todo List application. Key functions include:
- `inputChange(e)`: Updates the task input field.
- `addTask()`: Adds a new task to the list if valid.
- `delTask(index)`: Deletes a task based on its index.
- `moveUp(index)`: Moves a task up in the list.
- `moveDown(index)`: Moves a task down in the list.

### Styling
The app is styled using CSS for a clean and modern look. Key elements include:
- Background color: Dark theme for better focus.
- Buttons: Intuitive hover effects for better UX.
- Task list: Clearly defined tasks with flex alignment.

## Screenshots
![image](https://github.com/user-attachments/assets/bef4bb8a-4f4d-44df-b3bc-3a389d318228)

*Adding a new task.*


## Future Enhancements
- Add due dates for tasks.
- Implement task categories.
- Add a search/filter feature.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

**Enjoy using the Todo List App and stay organized!**

