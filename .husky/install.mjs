// .husky/install.mjs
if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
  process.exit(0);
}
import { install } from 'husky';
install();
