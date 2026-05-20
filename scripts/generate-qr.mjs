#!/usr/bin/env node
/**
 * QR Code Generator with UTM Parameters
 *
 * Usage:
 *   node scripts/generate-qr.mjs [options]
 *
 * Options:
 *   --url         Base URL (default: https://muztrix.com)
 *   --page        Page path (e.g. /virtual-human, /comic, /game)
 *   --source      utm_source (e.g. flyer, poster, namecard, event)
 *   --medium      utm_medium (e.g. qrcode, print, offline)
 *   --campaign    utm_campaign (e.g. 2026-expo, launch-day)
 *   --term        utm_term (optional)
 *   --content     utm_content (optional)
 *   --output      Output file path (default: ./qr-output.png)
 *   --size        QR image width in px (default: 512)
 *
 * Examples:
 *   node scripts/generate-qr.mjs --source expo --medium qrcode --campaign 2026-computex
 *   node scripts/generate-qr.mjs --page /virtual-human --source namecard --medium print --campaign sales-q3 --output ./qr-vh.png
 */

import QRCode from 'qrcode';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const args = process.argv.slice(2);

function getArg(name, fallback = '') {
  const idx = args.indexOf(`--${name}`);
  if (idx === -1 || idx + 1 >= args.length) return fallback;
  return args[idx + 1];
}

const baseUrl = getArg('url', 'https://muztrix.com');
const page = getArg('page', '');
const source = getArg('source', '');
const medium = getArg('medium', 'qrcode');
const campaign = getArg('campaign', '');
const term = getArg('term', '');
const content = getArg('content', '');
const output = getArg('output', './qr-output.png');
const size = parseInt(getArg('size', '512'), 10);

if (!source || !campaign) {
  console.error('❌ --source and --campaign are required.');
  console.error('   Example: node scripts/generate-qr.mjs --source expo --campaign 2026-computex');
  process.exit(1);
}

const url = new URL(page, baseUrl);
url.searchParams.set('utm_source', source);
url.searchParams.set('utm_medium', medium);
url.searchParams.set('utm_campaign', campaign);
if (term) url.searchParams.set('utm_term', term);
if (content) url.searchParams.set('utm_content', content);

const finalUrl = url.toString();

console.log('');
console.log('📎 Final URL:');
console.log(`   ${finalUrl}`);
console.log('');

try {
  const buffer = await QRCode.toBuffer(finalUrl, {
    width: size,
    margin: 2,
    color: {
      dark: '#0E0B08',
      light: '#FFFFFF',
    },
    errorCorrectionLevel: 'H',
  });

  const outputPath = resolve(output);
  writeFileSync(outputPath, buffer);

  console.log(`✅ QR Code saved to: ${outputPath}`);
  console.log(`   Size: ${size}x${size}px | Error correction: High`);
  console.log('');
} catch (err) {
  console.error('❌ Failed to generate QR code:', err.message);
  process.exit(1);
}
