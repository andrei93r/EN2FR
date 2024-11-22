import fs from "fs"

function copyManifest() {
    const data = fs.readFileSync("./src/manifest.json");
    fs.writeFileSync("./dist/manifest.json", data);
}

function copyIcons() {
    fs.cpSync("./src/icons", "./dist/icons", { recursive: true });
}
copyManifest();
copyIcons();