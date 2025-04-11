#!/bin/bash

# Copy content from index.html to public/index.html
echo "Syncing index.html to public/index.html..."
cat index.html > public/index.html

echo "✅ Sync completed successfully!" 