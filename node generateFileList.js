const fs = require('fs');
const path = require('path');

// // Define the path to the Songs directory
// const songsDir = path.join(__dirname, 'Songs');
// const outputFile = path.join(__dirname, 'songsFolderList.json');
// let songFolderList;

// function songsList(songsDir){
//     fs.readdir(songsDir, (err, files) => {
//         if (err) {
//             return console.error('Unable to scan directory:', err);
//         }
//         // Filter out only .mp3 files
    
//         const songList = files.filter(file => file.endsWith('.mp3'));
//         fs.writeFileSync(outputFile, JSON.stringify(songList, null, 2));
//         console.log('Song list generated:', songList);
//     });
//     return songsList;
// }

function songsFolderList(songsDir){
    fs.readdir(songsDir, (err, files) => {
        if (err) {
            return console.error('Unable to scan directory:', err);
        }
        // Filter out only .mp3 files
    
        const songList = files.filter(file => file.endsWith(''))
        fs.writeFileSync(outputFile, JSON.stringify(songList, null, 2));
        console.log('Song Folder list generated:', songList);
    });
    return songsFolderList;
}
// console.log(songFolderList);

// Define the path to the Songs directory
const songsDir = path.join(__dirname, 'Songs');
const outputFile = path.join(__dirname, 'songsFolderList.json');
const outputFile2= path.join(__dirname, 'mp3jpegList.json');

// Function to recursively list all MP3 files in a directory and its subdirectories
function getMP3Files(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
            getMP3Files(filePath, fileList);
        } else if (file.endsWith('')) {
            fileList.push(filePath);
        }
    });
    
    return fileList;
}

// Get all MP3 files starting from the songsDir
const mp3Files = getMP3Files(songsDir);
const mp3FilesRelativePaths = []
// Write the list to the output file
fs.writeFileSync(outputFile, JSON.stringify(mp3Files, null, 2));
songsFolderList(songsDir)
console.log('MP3 file list generated:', mp3Files);
 mp3Files.forEach(e =>{
    let e1 = e.split("\\")
     mp3FilesRelativePaths.push(`${e1[e1.length-2]}/${e1[e1.length-1]}`)
})
// "".split("")
console.log(mp3FilesRelativePaths)
fs.writeFileSync(outputFile2, JSON.stringify(mp3FilesRelativePaths, null, 2));
