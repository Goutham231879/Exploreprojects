
# Task-Tracker

The Task Tracker CLI is a simple command-line tool to track tasks. The tasks will be stored in a JSON file, and users will be able to:

   * Add a new task.
   * List all tasks.
   * Mark a task as done.
   * Delete a task.
This guide assumes you're building the project using Node.js and the yargs package for handling command-line arguments.


## Step-by-Step Instructions

## Step 1: Set Up Your Project
1.Create a project directory:
```
mkdir task-tracker
cd task-tracker
```
2.Initialize a Node.js project: This will create a package.json file, which holds metadata about the project and its dependencies.
```
npm init -y
```
3.Install necessary packages:

```yargs```
: A library for parsing command-line arguments.

```fs```
 (File System): Built-in Node.js module for file operations.

 ```npm install yargs```

## Step 2: Create a File to Store Tasks
1.Manually create a file named ```tasks.json``` in the project folder to store the tasks.
               
   ```touch tasks.json```

## Step 3: Write the Main Script (CLI Logic)

1.Create a file named ```index.js```. This will be the main script for your project:

```touch index.js```

2.Open index.js and start writing the logic for handling tasks.

## Step 5: Add CLI Commands

We will use``` yargs``` to create the different commands ```(add, list, done, delete)``` that the user can execute from the command line.
## Step 6: Parse and Execute Commands

At the end of your script,``` add yargs.parse();``` to ensure that the CLI can correctly parse the command-line arguments and execute the corresponding command:
```yargs.parse();  // Parse the arguments and execute the commands```

## Step 7: Run and Test Your CLI


1. Add a Task:
```node index.js add --title="Finish project"```

2. List All Tasks:
```node index.js list```

3. Mark a Task as Done:
```node index.js done --index=1```

4. Delete a Task:
```node index.js delete --index=1```



