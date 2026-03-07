import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

const jestProcess = spawn('node', ['--experimental-vm-modules', 'node_modules/jest/bin/jest.js', '--runInBand'], {
  cwd: process.cwd(),
  stdio: ['pipe', 'pipe', 'pipe']
});

let output = '';
jestProcess.stdout.on('data', (data) => {
  output += data.toString();
});
jestProcess.stderr.on('data', (data) => {
  output += data.toString();
});
jestProcess.on('close', (code) => {
  writeFileSync('test-result.txt', output + '\nExit code: ' + code);
});

