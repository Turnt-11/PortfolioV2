import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import crypto from 'crypto';

// Generate a random nonce for each server start
const cspNonce = crypto.randomBytes(16).toString('base64');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'csp-nonce-plugin',
      transformIndexHtml(html) {
        // Add nonce to script tags
        return html.replace(
          /<script/g, 
          `<script nonce="${cspNonce}"`
        );
      },
    }
  ],
  
});
