const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve static files like images if needed
app.use(express.static('public'));

// Endpoint to generate and download certificate
app.get('/download-certificate', (req, res) => {
    const { name } = req.query; // Get the name from query params

    if (!name) {
        return res.status(400).send('Name is required');
    }

    // Create a PDF document
    const doc = new PDFDocument({ size: 'A4', layout: 'landscape' });

    // Set the output path
    const outputPath = path.join(__dirname, 'certificate.pdf');
    const stream = fs.createWriteStream(outputPath);

    doc.pipe(stream);

    // Add certificate background
    const backgroundImagePath = path.join(__dirname, 'public', 'certificate.jpg');
    doc.image(backgroundImagePath, 0, 0, { width: 842, height: 595 });

    // Add dynamic name
    doc.fontSize(28)
        .fillColor('black')
        .text(name, 150, 250, { align: 'center', width: 540 }); // Adjust position accordingly

    doc.end();

    stream.on('finish', () => {
        res.download(outputPath, 'certificate.pdf', (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.status(500).send('Error downloading file');
            } else {
                console.log('Certificate generated successfully.');
                // Optionally, delete the generated file
                fs.unlinkSync(outputPath);
            }
        });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
