# Deployment Protection

Configure GitHub and Vercel to ensure deployments only happen when builds pass.

## GitHub Branch Protection

### Setup for `main` branch:

1. Go to **Settings** → **Branches**
2. Add/edit rule for `main` branch
3. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Require a pull request before merging
   - Select `build-and-test` status check

## Vercel Configuration

### Enable Deployment Protection:

1. Go to Vercel dashboard → **Settings** → **Git**
2. Under **Deployment Protection**:
   - ✅ Require GitHub status checks to pass before deployment
   - Select `build-and-test` status check

## GitHub Actions Workflow

The `.github/workflows/build-and-test.yml` includes:
- TypeScript type checking
- ESLint linting
- Next.js build validation
- Artifact verification

**Triggers**: Push to `main`/`develop` branches, PRs to `main`

## Testing Setup

1. **Create test branch:**
   ```bash
   git checkout -b test/deployment-protection
   ```

2. **Make change and push:**
   ```bash
   echo "// Test comment" >> src/app/page.tsx
   git add . && git commit -m "test: verify deployment protection"
   git push origin test/deployment-protection
   ```

3. **Create PR** and verify:
   - GitHub Actions workflow runs
   - Vercel deployment blocked until workflow passes

## Environment Variables

Add to both:
- **GitHub Actions**: Repository Settings → Secrets and Variables → Actions
- **Vercel**: Project Settings → Environment Variables

## Monitoring

- **GitHub Actions**: Repository → Actions tab
- **Vercel**: Project dashboard → Deployments tab

## Troubleshooting

- **Status checks not appearing**: Ensure workflow file is in `.github/workflows/`
- **Vercel not respecting checks**: Verify status check name matches exactly
- **Build failures**: Check Actions logs for specific errors

---

*This ensures only tested, working code reaches production.*