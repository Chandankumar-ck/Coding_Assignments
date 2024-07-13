const fs = require('fs');
const path = require('path');

// Fetch command line arguments
const operation = process.argv[2];
const file = process.argv[3];
const additionalArgs = process.argv.slice(4);

// Define the directory where the file operations will take place
const directory = './'; // Current directory

// Function to read contents of a file
const readFile = (fileName) => {
  const filePath = path.join(directory, fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${fileName}: ${err}`);
      return;
    }
    console.log(`Contents of ${fileName}:`);
    console.log(data);
  });
};

// Function to delete a file
const deleteFile = (fileName) => {
  const filePath = path.join(directory, fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file ${fileName}: ${err}`);
      return;
    }
    console.log(`File ${fileName} deleted successfully.`);
  });
};

// Function to create a new file
const createFile = (fileName) => {
  const filePath = path.join(directory, fileName);

  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
      return;
    }
    console.log(`File ${fileName} created successfully.`);
  });
};

// Function to append content to a file
const appendFile = (fileName, content) => {
  const filePath = path.join(directory, fileName);

  fs.appendFile(filePath, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending to file ${fileName}: ${err}`);
      return;
    }
    console.log(`Content appended to ${fileName} successfully.`);
  });
};

// Function to rename a file
const renameFile = (oldFileName, newFileName) => {
  const oldPath = path.join(directory, oldFileName);
  const newPath = path.join(directory, newFileName);

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file ${oldFileName}: ${err}`);
      return;
    }
    console.log(`File ${oldFileName} renamed to ${newFileName} successfully.`);
  });
};

// Function to list files in a directory
const listFiles = () => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Unable to read directory: ${err}`);
      return;
    }
    console.log(`Files in directory ${directory}:`);
    files.forEach(file => {
      console.log(file);
    });
  });
};

// Implementing the switch statement to select the operation
switch (operation) {
  case 'read':
    readFile(file);
    break;
  case 'delete':
    deleteFile(file);
    break;
  case 'create':
    createFile(file);
    break;
  case 'append':
    // Join additionalArgs into a single string
    const content = additionalArgs.join(' ');
    appendFile(file, content);
    break;
  case 'rename':
    // Expecting the new file name as the first additional argument
    const newFileName = additionalArgs[0];
    renameFile(file, newFileName);
    break;
  case 'list':
    listFiles();
    break;
  default:
    console.log(`Invalid operation '${operation}'. Use one of: read, delete, create, append, rename, list.`);
}

