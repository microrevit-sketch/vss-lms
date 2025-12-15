# 🚀 VirtualSTEM LMS - Getting Started Checklist

## Phase 1: Setup (30 minutes)

### ✅ Step 1: Install Prerequisites (10 min)
- [ ] Install Node.js from https://nodejs.org (choose LTS version)
- [ ] Install Git from https://git-scm.com
- [ ] Install VS Code from https://code.visualstudio.com (recommended)
- [ ] Verify installations:
  ```bash
  node --version  # Should show v16 or higher
  npm --version   # Should show 8 or higher
  git --version   # Should show git version
  ```

### ✅ Step 2: Get the Project Running (5 min)
- [ ] Open Terminal/Command Prompt
- [ ] Navigate to the project folder:
  ```bash
  cd virtualstem-lms
  ```
- [ ] Install dependencies:
  ```bash
  npm install
  ```
  (This might take 2-3 minutes)
- [ ] Start the development server:
  ```bash
  npm start
  ```
- [ ] Browser should open automatically at `http://localhost:3000`
- [ ] If not, manually open browser and go to `http://localhost:3000`

### ✅ Step 3: Test the Application (5 min)
- [ ] See the landing page with VirtualSTEM logo
- [ ] Click "Get Started" or navigate to `/login`
- [ ] Login with student credentials:
  - Email: `student@demo.com`
  - Password: `password`
- [ ] Check that you see the dashboard with:
  - Welcome message
  - Weekly activity stats
  - Power metrics (Resilience, Comeback Power, etc.)
  - Upcoming items
- [ ] Click "Start Practicing" → See practice topics
- [ ] Click on "Algebra Basics" → See practice sets
- [ ] Start a practice set → Answer a question
- [ ] Verify feedback appears (green for correct, red for wrong)
- [ ] Logout and test teacher login:
  - Email: `teacher@demo.com`
  - Password: `password`

### ✅ Step 4: Set Up Version Control (10 min)
- [ ] Create GitHub account if you don't have one: https://github.com
- [ ] Create new repository on GitHub:
  - Name: `virtualstem-lms`
  - Keep it private (recommended for now)
  - Don't initialize with README
- [ ] In your terminal, inside the project folder:
  ```bash
  git init
  git add .
  git commit -m "feat: initial VirtualSTEM LMS setup"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/virtualstem-lms.git
  git push -u origin main
  ```
- [ ] Refresh GitHub page → See your code uploaded!

---

## Phase 2: Claude Integration (20 minutes)

### Option A: Claude Code CLI (Terminal-based)

#### ✅ Step 5A: Install Claude Code (5 min)
- [ ] Get Anthropic API key:
  - Go to https://console.anthropic.com
  - Create account or login
  - Navigate to "API Keys"
  - Click "Create Key"
  - Copy the key (starts with `sk-ant-...`)
  - **IMPORTANT**: Save this key securely! You won't see it again.

- [ ] Install Claude Code:
  ```bash
  npm install -g @anthropic-ai/claude-code
  ```
  OR if you have Python:
  ```bash
  pip install claude-code
  ```

#### ✅ Step 6A: Authenticate Claude Code (2 min)
- [ ] Run authentication:
  ```bash
  claude-code auth
  ```
- [ ] Paste your API key when prompted
- [ ] You should see: "Authentication successful!"

#### ✅ Step 7A: Test Claude Code (3 min)
- [ ] Navigate to your project:
  ```bash
  cd virtualstem-lms
  ```
- [ ] Start Claude Code:
  ```bash
  claude-code
  ```
- [ ] Try a simple command:
  ```
  > "Explain the structure of the AuthContext.js file"
  ```
- [ ] Claude should respond with explanation!
- [ ] Try creating something:
  ```
  > "Create a simple Footer component that shows copyright information"
  ```
- [ ] Claude will create the file!

### Option B: VS Code Continue Extension (Visual)

#### ✅ Step 5B: Install Continue Extension (3 min)
- [ ] Open VS Code
- [ ] Click Extensions icon (or `Cmd/Ctrl + Shift + X`)
- [ ] Search for "Continue"
- [ ] Click Install on "Continue - Code Automation"
- [ ] Wait for installation to complete

#### ✅ Step 6B: Configure Continue (2 min)
- [ ] Click the Continue icon in sidebar (looks like ⚡)
- [ ] Click "Add API Key"
- [ ] Select "Anthropic"
- [ ] Paste your Anthropic API key
- [ ] Click "Save"

#### ✅ Step 7B: Test Continue (3 min)
- [ ] Open any file (try `src/App.js`)
- [ ] Press `Cmd/Ctrl + L`
- [ ] Type: "Explain this file to me"
- [ ] Claude should respond in the chat!
- [ ] Try: "Add comments to this code"
- [ ] Claude will suggest improvements inline!

---

## Phase 3: First Development Task (30 minutes)

### ✅ Step 8: Create Your First Feature with Claude

**Goal**: Add a "Contests" page that lists upcoming contests

#### Using Claude Code:
```bash
# In Claude Code terminal:
> "Create a Contests page component at src/pages/student/Contests.js that:
1. Shows a list of upcoming contests
2. Each contest card shows: name, date, time, and type (PMC/RMC/VSS)
3. Has a filter for contest type
4. Uses the same kid-friendly styling as other pages
5. Includes dummy data for now"
```

#### Using Continue Extension:
- [ ] Press `Cmd/Ctrl + L`
- [ ] Paste the same request above
- [ ] Claude will generate the code
- [ ] Copy and paste into a new file

#### ✅ Step 9: Add Route for New Page (5 min)
- [ ] Open `src/App.js`
- [ ] Ask Claude (in CLI or Continue):
  ```
  "Add a route for /student/contests that loads the Contests component"
  ```
- [ ] Claude will show you where to add the route
- [ ] Save the file

#### ✅ Step 10: Add Navigation Link (5 min)
- [ ] Open `src/components/shared/Navbar.js`
- [ ] Ask Claude:
  ```
  "Add a 'Contests' link to the navigation menu for students"
  ```
- [ ] Save the file

#### ✅ Step 11: Test Your Feature (5 min)
- [ ] Make sure dev server is running (`npm start`)
- [ ] Login as student
- [ ] Click "Contests" in navigation
- [ ] You should see your new page!
- [ ] Check that it looks good on mobile (resize browser)

#### ✅ Step 12: Commit Your Changes (5 min)
- [ ] In terminal:
  ```bash
  git status  # See what changed
  git add .   # Stage all changes
  git commit -m "feat: add contests page with filter"
  git push origin main
  ```
- [ ] Check GitHub → See your new commit!

---

## Phase 4: Deploy to Production (20 minutes)

### ✅ Step 13: Deploy to Vercel (FREE)

#### Create Vercel Account (3 min)
- [ ] Go to https://vercel.com
- [ ] Click "Sign Up"
- [ ] Choose "Continue with GitHub"
- [ ] Authorize Vercel

#### Deploy Your App (5 min)
- [ ] Click "Add New Project"
- [ ] Click "Import Git Repository"
- [ ] Find `virtualstem-lms` in the list
- [ ] Click "Import"
- [ ] Vercel auto-detects React settings
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes for build

#### Test Your Live App (2 min)
- [ ] Click "Visit" button
- [ ] Your app is now live at `https://your-app.vercel.app`!
- [ ] Test login with demo credentials
- [ ] Everything should work exactly like localhost

#### Set Up Automatic Deployments (1 min)
- [ ] Already done! Every push to GitHub `main` branch automatically deploys
- [ ] Try it: Make a small change, commit, push → See it deploy!

---

## Phase 5: Next Features (Ongoing)

### Week 1: Contest Mode with Timer
- [ ] Ask Claude: "Create a contest mode with countdown timer"
- [ ] Add auto-submit when timer ends
- [ ] Add question navigation
- [ ] Test thoroughly

### Week 2: Leaderboards
- [ ] Ask Claude: "Create leaderboards with filters"
- [ ] Add RMC/PMC/VSS views
- [ ] Add city/school/national filters
- [ ] Add sample data

### Week 3: Teacher Dashboard
- [ ] Ask Claude: "Create teacher dashboard"
- [ ] Add class list
- [ ] Add student performance view
- [ ] Add quiz creation

### Week 4: Backend Setup
- [ ] Choose: Node.js + Express OR Django
- [ ] Ask Claude: "Set up backend API with authentication"
- [ ] Create database schema
- [ ] Connect frontend to backend

---

## 📝 Daily Development Workflow

### Every Day:
1. **Pull Latest Changes**
   ```bash
   git pull origin main
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Develop with Claude**
   - Use Claude Code or Continue
   - Build features incrementally
   - Test as you go

4. **Commit Often**
   ```bash
   git add .
   git commit -m "feat: description of what you did"
   ```

5. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request on GitHub**
   - Review your changes
   - Merge to main
   - Automatic deployment to Vercel!

---

## 🆘 Troubleshooting

### App Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Git Issues
```bash
# Check status
git status

# Discard local changes
git reset --hard

# Ask Claude: "I'm getting this git error: [paste error]"
```

### Claude Not Working
- [ ] Check API key is correct
- [ ] Check you have credits in Anthropic account
- [ ] Reinstall CLI or extension
- [ ] Ask in claude.ai chat window as fallback

---

## 🎯 Success Checklist

After completing this guide, you should have:
- [x] Working local development environment
- [x] App running at localhost:3000
- [x] GitHub repository set up
- [x] Claude integration working (CLI or Continue)
- [x] First feature created with Claude
- [x] Live production app on Vercel
- [x] Automatic deployments configured

---

## 📞 Need Help?

### Use Claude!
```bash
"I'm stuck at step X. Here's what happened: [describe issue]"
"How do I fix this error: [paste error]"
"What should I do next after [current step]?"
```

### Resources
- React: https://react.dev/learn
- Tailwind CSS: https://tailwindcss.com/docs
- Git: https://git-scm.com/doc
- GitHub: https://docs.github.com

---

## 🎉 You're All Set!

**Current Status**: You have a fully functional student portal!

**Next Mission**: Start building Phase 2 features with Claude's help!

**Remember**: 
- Commit often
- Test everything
- Ask Claude when stuck
- Have fun coding! 🚀

---

**Last Updated**: December 2024
**Version**: 1.0.0 (Phase 1 MVP Complete)
