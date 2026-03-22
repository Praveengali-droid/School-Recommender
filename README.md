# Bangalore School Ranker

Interactive tool helping parents compare 62+ schools across Bangalore corridors using weighted scoring that adapts to YOUR priorities.

## Files

```
├── index.html          # Main comparison tool
├── methodology.html    # How we research (builds trust)
├── data.js            # School database (62 schools, 2 corridors)
├── enrichment.js      # Multi-source verification overlay
└── README.md          # This file
```

## Deploy to Vercel (step by step)

### Step 1: Create a GitHub account (if you don't have one)
1. Go to https://github.com
2. Click "Sign Up" and create an account
3. Verify your email

### Step 2: Create a new repository
1. Click the **+** icon in the top right → "New repository"
2. Repository name: `school-ranker` (or whatever you prefer)
3. Set it to **Public** (free hosting) or **Private** (your choice)
4. Do NOT check "Add a README file" (we already have one)
5. Click **Create repository**

### Step 3: Upload files
1. On the repository page, click **"uploading an existing file"** link
2. Drag and drop ALL 5 files: `index.html`, `methodology.html`, `data.js`, `enrichment.js`, `README.md`
3. In the "Commit changes" box at the bottom, type: "Initial deploy with enriched school data"
4. Click **"Commit changes"**

### Step 4: Connect to Vercel
1. Go to https://vercel.com
2. Click **"Sign Up"** → choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Add New..."** → **"Project"**
5. Find your `school-ranker` repository and click **"Import"**
6. Settings page will appear:
   - Framework Preset: **Other** (it will auto-detect plain HTML)
   - Root Directory: leave as `.` (root)
   - Build Command: leave empty
   - Output Directory: leave as `.` (root)
7. Click **"Deploy"**
8. Wait 30 seconds — your site is live!

### Step 5: Custom domain (optional)
1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Type your domain name and click **Add**
3. Vercel will show DNS records to add
4. Go to your domain provider (GoDaddy, Namecheap, etc.) and add the DNS records
5. Wait 5-30 minutes for DNS to propagate
6. Your site is now live on your domain!

## How to update school data later

1. Go to your GitHub repository
2. Click on `data.js` (or `enrichment.js`)
3. Click the **pencil icon** (edit)
4. Make your changes
5. Click **"Commit changes"**
6. Vercel will automatically redeploy in ~30 seconds

## Adding a new school

Open `data.js` in GitHub, copy any existing school object, change the values. The minimum required fields are shown in the file comments at the top.

## Adding enrichment for a new school

Open `enrichment.js` in GitHub, add a new entry inside the ENRICHMENT object following the existing pattern.

---

Built by parents, for parents. March 2026.
