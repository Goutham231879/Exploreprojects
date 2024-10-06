const fs = require('fs');
const yargs = require('yargs');

const filepath = './tasks.json';

// Function to load tasks from the file
const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filepath); 
        
        const dataJSON = dataBuffer.toString();
        
        
        const jp = JSON.parse(dataJSON);
       
        return jp;
        
    } catch (e) {
        return [];
    }
};

// Function to save tasks to the file
const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(filepath, dataJSON); // Corrected variable name
};

// Add Task Command
yargs.command({
    command: 'add',
    describe: 'Add a new task',
    builder: {
        title: {
            describe: 'Task title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const tasks = loadTasks();
        tasks.push({ title: argv.title, status: 'to do' });
        saveTasks(tasks);
        console.log('Task added:', argv.title);
    }
});

// List Tasks Command
yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler() {
        const tasks = loadTasks();
        console.log('Tasks:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.title} [${task.status}]`);
        });
    }
});

// Mark Task as Done Command
yargs.command({
    command: 'done',
    describe: 'Mark a task as done',
    builder: {
        index: {
            describe: 'Task index to mark as done',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        const tasks = loadTasks();
        if (tasks[argv.index - 1]) {
            tasks[argv.index - 1].status = 'done';
            saveTasks(tasks);
            console.log(`Task ${argv.index} marked as done.`);
        } else {
            console.log('Invalid task index.');
        }
    }
});

// Delete Task Command
yargs.command({
    command: 'delete',
    describe: 'Delete a task',
    builder: {
        index: {
            describe: 'Task index to delete',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        const tasks = loadTasks();
        if (tasks[argv.index - 1]) {
            tasks.splice(argv.index - 1, 1);
            saveTasks(tasks);
            console.log(`Task ${argv.index} deleted.`);
        } else {
            console.log('Invalid task index.');
        }
    }
});

// Parse the arguments to run the commands
yargs.parse();
