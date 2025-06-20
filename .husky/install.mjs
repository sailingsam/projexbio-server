// .husky/install.mjs
// Skip in production, CI, Docker, or if husky isn't present
if (
  process.env.NODE_ENV === 'production' ||
  process.env.CI === 'true' ||
  process.env.HUSKY_SKIP_INSTALL === '1'
) {
  process.exit(0);
}

try {
  const { default: husky } = await import('husky');
  await husky();
  console.log('✅ Husky installed');
} catch (err) {
  console.log('❗ Husky not found, skipping install');
  process.exit(0);
}
