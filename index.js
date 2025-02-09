/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import input from '@inquirer/input';
import qr from "qr-image";
import fs from "fs";


// ----Prompt input-----
const answer = await input({ message: 'Enter URL' });

// ----QR generator------
const qr_png = qr.image(answer, { type: 'png' });
qr_png.pipe(fs.createWriteStream('generated_qr.png'));

const filePath = "output.txt";

fs.writeFile(filePath, answer, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log(`Text successfully saved to ${filePath}`);
    }
});