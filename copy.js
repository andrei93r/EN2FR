import fs from 'fs';
import archiver from 'archiver';

/**
 * Zips the contents of a folder to a target zip file.
 * @param {string} sourceDir - The folder to zip.
 * @param {string} targetZip - The target zip file path.
 */
function zipFolder(sourceDir, targetZip) {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(targetZip);
        const archive = archiver('zip', {zlib: {level: 9}});

        output.on('close', () => {
            console.log(`Zip created: ${targetZip} (${archive.pointer()} bytes)`);
            resolve();
        });

        archive.on('error', err => reject(err));
        archive.pipe(output);

        archive.directory(sourceDir, false);
        archive.finalize();
    });
}


function copyManifest() {
    const data = fs.readFileSync("./src/manifest.json");
    fs.writeFileSync("./dist/manifest.json", data);
}

function copyIcons() {
    fs.cpSync("./src/icons", "./dist/icons", {recursive: true});
}

copyManifest();
copyIcons();
zipFolder("dist", "release/release.zip");