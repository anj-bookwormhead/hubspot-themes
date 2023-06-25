const globby = require('globby');
const { execSync } = require('child_process');

async function runTailwindCSS() {
  try {
    const cssFiles = await globby('tailwind/css/*.css');
    cssFiles.forEach((file) => {
      execSync(`npx tailwindcss -i ${file} -o _hb_officials/css/${file}`);
    });
  } catch (error) {
    console.error('Error running Tailwind CSS build:', error);
  }
}

runTailwindCSS();