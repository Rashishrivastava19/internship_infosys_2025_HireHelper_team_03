import express from "express";
import Task from "../models/Task.js";  // (we’ll create Task model later)

const router = express.Router();

// 🟢 Create new task
router.post("/", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
});

// 🟢 Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

// 🟢 Export router
export default router;  // <-- ❗This line is VERY important

// Get single task details by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id); // Find task by ID

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task); // Send task details

  } catch (error) {
    res.status(500).json({ message: "Error fetching task details", error });
  }
});
// Delete a task by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
});

// Update a task by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, location } = req.body;

  try {
    // Find task and update it
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, location },
      { new: true } // return updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
});
