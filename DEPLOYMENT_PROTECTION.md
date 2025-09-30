# GitHub Branch Protection & Vercel Deployment Configuration

This document explains how to configure your repository to ensure Vercel deployments only happen when builds pass.

## 1. GitHub Branch Protection Rules

### Setting up Branch Protection for `main` branch:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Branches**
3. Click **Add rule** or edit existing rule for `main` branch
4. Configure the following settings:

#### Required Status Checks
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- Select the following status checks:
  - `build-and-test` (from our GitHub Actions workflow)

#### Additional Protection (Recommended)
- ✅ **Require a pull request before merging**
- ✅ **Require review from code owners** (if you have CODEOWNERS file)
- ✅ **Dismiss stale reviews when new commits are pushed**
- ✅ **Require review from requested reviewers**

#### Restrict Pushes
- ✅ **Restrict pushes that create files larger than 100 MB**

## 2. Vercel Configuration

### Method 1: Vercel Dashboard Configuration

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Git**
4. Under **Deployment Protection**, enable:
   - ✅ **Require GitHub status checks to pass before deployment**
   - Select the `build-and-test` status check

### Method 2: Using Vercel CLI (Alternative)

If you prefer using the CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Link your project
vercel link

# Configure deployment protection
vercel env add VERCEL_GITHUB_COMMIT_SHA
```

## 3. GitHub Actions Workflow

The workflow file `.github/workflows/build-and-test.yml` includes:

- **Type checking** with TypeScript
- **Linting** with ESLint
- **Build validation** with Next.js
- **Build artifact verification**
- **Artifact upload** for debugging

### Workflow Triggers:
- Push to `main` or `develop` branches
- Pull requests targeting `main` branch

## 4. Testing the Configuration

### Test the Setup:

1. **Create a test branch:**
   ```bash
   git checkout -b test/deployment-protection
   ```

2. **Make a small change:**
   ```bash
   echo "// Test comment" >> src/app/page.tsx
   git add .
   git commit -m "test: verify deployment protection"
   git push origin test/deployment-protection
   ```

3. **Create a Pull Request:**
   - Go to GitHub and create a PR from `test/deployment-protection` to `main`
   - Verify that the GitHub Actions workflow runs
   - Verify that Vercel deployment is blocked until the workflow passes

4. **Test with a failing build:**
   ```bash
   # Introduce a TypeScript error
   echo "const invalid: string = 123;" >> src/app/page.tsx
   git add .
   git commit -m "test: introduce build error"
   git push origin test/deployment-protection
   ```
   - Verify that the workflow fails
   - Verify that Vercel deployment is blocked

## 5. Environment Variables (if needed)

If your build requires environment variables, add them to:

1. **GitHub Actions:** Repository Settings → Secrets and Variables → Actions
2. **Vercel:** Project Settings → Environment Variables

## 6. Monitoring and Troubleshooting

### Check Deployment Status:
- GitHub Actions: Repository → Actions tab
- Vercel: Project dashboard → Deployments tab

### Common Issues:
1. **Status checks not appearing:** Ensure the workflow file is in `.github/workflows/`
2. **Vercel not respecting checks:** Verify the status check name matches exactly
3. **Build failures:** Check the Actions logs for specific error details

## 7. Additional Recommendations

### Pre-commit Hooks (Optional):
Install husky for local validation:
```bash
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npm run build:check"
```

### Code Quality Gates:
Consider adding:
- Unit tests (`npm run test`)
- E2E tests
- Security scanning
- Performance budgets

This configuration ensures that only code that passes all checks gets deployed to production, maintaining code quality and preventing broken deployments.
