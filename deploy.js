const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m'
};

console.log(`${colors.blue}🚀 Starting deployment to GitHub Pages...${colors.reset}\n`);

try {
  // Step 1: Build the project
  console.log(`${colors.yellow}📦 Building project...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build complete${colors.reset}\n`);

  // Step 2: Navigate to dist folder
  process.chdir('dist');

  // Step 3: Initialize git if not already
  if (!fs.existsSync('.git')) {
    console.log(`${colors.yellow}🔧 Initializing git in dist folder...${colors.reset}`);
    execSync('git init', { stdio: 'inherit' });
    console.log(`${colors.green}✓ Git initialized${colors.reset}\n`);
  }

  // Step 4: Add all files
  console.log(`${colors.yellow}📝 Adding files to git...${colors.reset}`);
  execSync('git add .', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Files added${colors.reset}\n`);

  // Step 5: Commit changes
  console.log(`${colors.yellow}💾 Committing changes...${colors.reset}`);
  try {
    execSync('git commit -m "Deploy portfolio to GitHub Pages"', { stdio: 'inherit' });
    console.log(`${colors.green}✓ Changes committed${colors.reset}\n`);
  } catch (e) {
    console.log(`${colors.yellow}⚠ No changes to commit${colors.reset}\n`);
  }

  // Step 6: Rename branch to gh-pages
  console.log(`${colors.yellow}🔀 Switching to gh-pages branch...${colors.reset}`);
  try {
    execSync('git branch -M gh-pages', { stdio: 'inherit' });
    console.log(`${colors.green}✓ Branch renamed to gh-pages${colors.reset}\n`);
  } catch (e) {
    // Branch might already exist
  }

  // Step 7: Check if remote exists, if not add it
  console.log(`${colors.yellow}🔗 Setting up remote...${colors.reset}`);
  try {
    execSync('git remote add origin https://github.com/Gowri0504/MyPortfolio.git', { stdio: 'inherit' });
    console.log(`${colors.green}✓ Remote added${colors.reset}\n`);
  } catch (e) {
    console.log(`${colors.yellow}⚠ Remote already exists${colors.reset}\n`);
  }

  // Step 8: Push to gh-pages
  console.log(`${colors.yellow}🚀 Pushing to GitHub...${colors.reset}`);
  console.log(`${colors.blue}This will force push to gh-pages branch${colors.reset}\n`);

  try {
    execSync('git push -u origin gh-pages --force', { stdio: 'inherit' });
    console.log(`${colors.green}✓ Deployed to gh-pages branch!${colors.reset}\n`);
  } catch (e) {
    console.error(`${colors.red}✗ Push failed. Please check your GitHub credentials${colors.reset}`);
    console.log(`${colors.yellow}You may need to authenticate with GitHub${colors.reset}\n`);
    process.exit(1);
  }

  console.log(`${colors.green}✨ Deployment successful!${colors.reset}\n`);
  console.log(`${colors.blue}🌐 Your portfolio will be live at:${colors.reset}`);
  console.log(`${colors.green}https://gowri0504.github.io/MyPortfolio/${colors.reset}\n`);
  console.log(`${colors.yellow}⏳ It may take 1-2 minutes for changes to appear${colors.reset}`);
  console.log(`${colors.yellow}📱 Make sure GitHub Pages is enabled in repository settings:${colors.reset}`);
  console.log(`${colors.blue}https://github.com/Gowri0504/MyPortfolio/settings/pages${colors.reset}\n`);

} catch (error) {
  console.error(`${colors.red}✗ Deployment failed:${colors.reset}`, error.message);
  process.exit(1);
}
