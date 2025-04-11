const fs = require('fs');
const path = require('path');

// Path to files
const rootIndexPath = path.join(__dirname, 'index.html');
const publicIndexPath = path.join(__dirname, 'public', 'index.html');
const templatePath = path.join(__dirname, 'unified-index.html');

// Function to sync based on the template
function syncFromTemplate() {
  try {
    console.log('Reading template file...');
    
    // Check if template file exists
    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template file does not exist: ${templatePath}`);
    }
    
    // Read the template file
    const templateContent = fs.readFileSync(templatePath, {encoding: 'utf8'});
    console.log(`Template content length: ${templateContent.length} characters`);
    
    // Write to both target files
    fs.writeFileSync(rootIndexPath, templateContent, {encoding: 'utf8'});
    fs.writeFileSync(publicIndexPath, templateContent, {encoding: 'utf8'});
    
    console.log(`✅ Successfully synced both index.html files from the unified template`);
  } catch (error) {
    console.error(`❌ Error syncing files: ${error.message}`);
    process.exit(1);
  }
}

// Run the sync process
syncFromTemplate(); 