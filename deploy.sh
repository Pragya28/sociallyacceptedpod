# Install dependencies
pnpm install

# Build the SAPod Web
pnpm nx build sapod-web

# Copy files to public_html
cp -r dist/apps/sapod-web/* files/public_html