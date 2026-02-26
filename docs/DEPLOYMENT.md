# GitHub Pages Deployment Guide

## Overview

This portfolio website is configured for automatic deployment to GitHub Pages using GitHub Actions. The deployment process is triggered on every push to the `main` branch.

## Deployment Configuration

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` branch
- **Node Version**: 20
- **Build Target**: Production configuration
- **Output Directory**: `dist/portfolio-website`

### Custom Domain
- **Domain**: `www.libinn11.co.in`
- **CNAME File**: `public/CNAME`
- **HTTPS**: Automatically enabled by GitHub Pages

## Deployment Process

### Automatic Deployment
1. **Push to main branch** → Triggers GitHub Actions
2. **Build Process**:
   - Node.js 20 setup
   - Dependencies installation (`npm ci`)
   - Production build with base href configuration
   - Artifact upload to GitHub Pages
3. **Deployment** → Automatic deployment to GitHub Pages

### Manual Deployment
To deploy manually:
```bash
# Build locally
npm run build -- --configuration production --base-href=/portfolio-website/

# Deploy dist folder to GitHub Pages
```

## Configuration Details

### Angular Configuration
- **Base Href**: `/portfolio-website/` (for GitHub Pages)
- **Output Path**: `dist/portfolio-website`
- **Production Build**: Optimized and minified

### GitHub Pages Settings
- **Source**: Deploy from a branch
- **Branch**: `main`
- **Folder**: `/ (root)`
- **Custom Domain**: `www.libinn11.co.in`

## SEO and Metadata

### HTML Head Configuration
```html
<title>Libin C Jacob - Senior Software Developer</title>
<meta name="description" content="Senior Software Developer specializing in Angular, Node.js, and modern web technologies">
<meta property="og:title" content="Libin C Jacob - Senior Software Developer">
<meta property="og:description" content="Professional portfolio showcasing Angular development projects and technical skills">
<meta property="og:url" content="https://www.libinn11.co.in">
<link rel="canonical" href="https://www.libinn11.co.in">
```

### Sitemap
- **Frequency**: Weekly
- **Priority**: 0.8
- **URL**: `https://www.libinn11.co.in/sitemap.xml`

## Performance Optimization

### Build Optimizations
- **Tree Shaking**: Removes unused code
- **Minification**: Reduces file sizes
- **Output Hashing**: Cache busting
- **Lazy Loading**: On-demand component loading

### Bundle Analysis
```bash
# Analyze bundle sizes
npm run build -- --stats-json
npx webpack-bundle-analyzer dist/portfolio-website/stats.json
```

## Troubleshooting

### Common Issues

#### 404 Errors on GitHub Pages
- **Cause**: Incorrect base href configuration
- **Solution**: Ensure `baseHref` is set to `/portfolio-website/`

#### Asset Loading Issues
- **Cause**: Incorrect asset paths
- **Solution**: Use relative paths in `angular.json` assets configuration

#### Custom Domain Not Working
- **Cause**: DNS configuration issues
- **Solution**: 
  1. Verify CNAME record: `www.libinn11.co.in` → `libinn11.github.io`
  2. Check DNS propagation
  3. Enable HTTPS in GitHub Pages settings

### Debugging Steps

#### Check Build Output
```bash
# Local build test
npm run build -- --configuration production

# Verify base href
grep -r "baseHref" angular.json
```

#### Check GitHub Actions Logs
1. Go to repository Actions tab
2. Click on failed workflow run
3. Review build and deployment logs
4. Check for error messages

#### Verify Deployment
```bash
# Check deployed files
curl -I https://www.libinn11.co.in

# Check specific assets
curl -I https://www.libinn11.co.in/assets/images/profile.jpg
```

## Environment Variables

### GitHub Secrets
The workflow uses the following GitHub Actions permissions:
- `contents: read` - Repository access
- `pages: write` - GitHub Pages deployment
- `id-token: write` - OIDC authentication

### Local Development
```bash
# Development server
npm start

# Production build (local)
npm run build -- --configuration production

# Preview production build
npm run preview
```

## Security Considerations

### HTTPS Enforcement
- **Automatic**: GitHub Pages provides HTTPS
- **Custom Domain**: SSL certificate auto-renewed
- **Mixed Content**: All assets use HTTPS

### Content Security Policy
- **Default**: GitHub Pages provides basic CSP
- **Custom**: Can be extended in `index.html`

## Monitoring

### Deployment Status
- **GitHub Actions**: Automatic build/deployment logs
- **GitHub Pages**: Deployment status in repository settings
- **Uptime**: Monitor via external services

### Performance Monitoring
- **Google PageSpeed**: Regular performance audits
- **Lighthouse CI**: Automated performance testing
- **Analytics**: Google Analytics integration (optional)

## Rollback Procedure

### Quick Rollback
```bash
# Revert last commit
git revert HEAD

# Push to trigger redeploy
git push origin main
```

### Emergency Rollback
1. **Disable GitHub Pages** in repository settings
2. **Fix issues** in local environment
3. **Re-enable GitHub Pages**
4. **Push fixes** to trigger redeployment

## Maintenance

### Regular Tasks
- **Dependency Updates**: Keep Angular and npm packages current
- **Security Audits**: Run `npm audit` regularly
- **Performance Checks**: Monitor bundle sizes and load times
- **SEO Review**: Update metadata and content

### Update Procedures
```bash
# Update Angular CLI
ng update @angular/cli @angular/core

# Update dependencies
npm update

# Test and deploy
npm test
npm run build
git add .
git commit -m "Update dependencies"
git push origin main
```

---

*For development setup, see [Development Setup Guide](../wiki/Development-Setup.md)*
