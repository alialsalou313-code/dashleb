import { execFileSync } from 'node:child_process';
import process from 'node:process';
execFileSync('tar', ['-xzf', 'dashlb-vercel-source.tar.gz', '-C', process.cwd()], { stdio: 'inherit' });
execFileSync(process.execPath, ['scripts/build-site.mjs'], { stdio: 'inherit' });
