# VirtualSTEM LMS - Quick Start Guide with Claude Integration

## 🎯 Getting Started in 5 Minutes

### Step 1: Clone and Setup (2 minutes)

```bash
# Clone the repository
git clone https://github.com/yourusername/virtualstem-lms.git
cd virtualstem-lms

# Install dependencies
npm install

# Start the app
npm start
```

Visit `http://localhost:3000` and login with:
- Email: `student@demo.com`
- Password: `password`

---

## 🤖 Setting Up Claude Integration

### Method 1: Claude Code CLI (Best for Terminal Users)

**Quick Setup:**
```bash
# Install globally
npm install -g @anthropic-ai/claude-code

# Or with pip
pip install claude-code

# Authenticate (you'll need your Anthropic API key)
claude-code auth

# Start in your project
cd virtualstem-lms
claude-code
```

**Example Usage:**
```bash
# In Claude Code terminal:
claude> "Add a leaderboard feature to the student dashboard"
claude> "Create unit tests for the Practice component"
claude> "Help me debug this routing issue"
```

### Method 2: VS Code Continue Extension (Best for Visual Users)

**Installation:**
1. Open VS Code
2. Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)
3. Search for "Continue"
4. Install the extension
5. Open Continue settings and add your Anthropic API key
6. Use `Cmd/Ctrl+L` to open Claude chat

**Usage:**
1. Select code you want to improve
2. Press `Cmd/Ctrl+L`
3. Ask: "Refactor this code" or "Add error handling"
4. Claude will suggest improvements directly in your editor

### Method 3: Cline Extension (Best for Agentic Coding)

**Installation:**
1. Search "Cline" in VS Code extensions
2. Install and configure with API key
3. Use the sidebar to interact

**What makes Cline special:**
- Can autonomously create and edit files
- Runs terminal commands
- Manages multi-file changes
- Great for complex features

---

## 💻 Recommended Development Workflow

### Daily Development with Claude:

**Morning: Plan Your Day**
```bash
# Ask Claude to help you plan
"I want to add a contest timer feature. What's the architecture?"
"Show me the best way to structure the Leaderboard component"
```

**During Development: Code Assistance**
```bash
# Generate components
"Create a Leaderboard component with filters for RMC, PMC, and VSS"

# Debug issues
"I'm getting this error: [paste error]. How do I fix it?"

# Optimize code
"This component is re-rendering too much. How can I optimize it?"
```

**Before Committing: Code Review**
```bash
"Review this code for bugs and improvements"
"Add proper error handling to this component"
"Write unit tests for this function"
```

---

## 🔄 Git Workflow Integration

### Standard Feature Development:

```bash
# 1. Create feature branch
git checkout -b feature/contest-timer

# 2. Ask Claude to help implement
# (Use Claude Code, Continue, or Cline)
"Create a contest timer component with countdown"

# 3. Test the feature
npm start

# 4. Commit with conventional commits
git add .
git commit -m "feat: add contest timer with countdown and auto-submit"

# 5. Push and create PR
git push origin feature/contest-timer
```

### Using Claude for Git Tasks:

```bash
# Generate meaningful commit messages
"What's a good commit message for these changes: [paste git diff]"

# Create PR descriptions
"Generate a PR description for this feature"

# Review changes before commit
"Review this diff and suggest improvements"
```

---

## 📚 Claude-Powered Development Examples

### Example 1: Adding a New Feature

**You:** "I need to add a leaderboard that shows top students for RMC, PMC, and VSS with filters"

**Claude generates:**
- Component structure
- API integration points
- Styling with Tailwind
- Route configuration
- State management

**You implement it, test, and commit!**

### Example 2: Debugging

**You:** "Getting error: Cannot read property 'map' of undefined in Practice.js line 45"

**Claude:**
- Identifies the issue
- Suggests adding null checks
- Provides the fixed code
- Explains why it happened

### Example 3: Refactoring

**You:** "This PracticeSet component is too large. Help me refactor it."

**Claude:**
- Breaks it into smaller components
- Suggests custom hooks
- Improves code organization
- Maintains functionality

---

## 🎨 Development Best Practices with Claude

### 1. Be Specific in Your Requests

❌ **Vague:** "Fix my code"
✅ **Specific:** "The timer in ContestMode.js doesn't reset. Help me debug it."

### 2. Provide Context

```bash
# Good request:
"I'm building a quiz interface for Grade 5-7 students. 
Create a component that shows one question at a time 
with kid-friendly styling using Tailwind CSS."
```

### 3. Iterate and Refine

```bash
"Create a student dashboard"
→ Review output →
"Add a streak counter and weekly stats"
→ Review output →
"Make it more colorful and kid-friendly"
```

### 4. Ask for Explanations

```bash
"Explain how this useEffect hook works"
"Why did you use useCallback here?"
"What's the difference between these two approaches?"
```

---

## 🚀 Next Features to Build with Claude

### Week 1: Contest Mode
```bash
"Create a contest mode with:
- Timer countdown
- Question navigation
- Auto-submit when time ends
- Results summary"
```

### Week 2: Leaderboards
```bash
"Build leaderboards showing:
- RMC, PMC, VSS rankings
- Filters by city, school, national
- Time period filters
- Student profiles"
```

### Week 3: Teacher Dashboard
```bash
"Create teacher dashboard with:
- Class list and student stats
- Quiz creation interface
- Performance reports
- Assignment grading"
```

---

## 📞 Getting Help

### When You're Stuck:

1. **Ask Claude First**
   - Paste your error message
   - Share the relevant code
   - Describe what you expected vs what happened

2. **Check Documentation**
   - React: https://react.dev
   - Tailwind: https://tailwindcss.com
   - React Router: https://reactrouter.com

3. **Search Issues**
   - Check GitHub issues
   - Stack Overflow
   - React community forums

---

## 🎯 Pro Tips

### Tip 1: Save Useful Prompts
Keep a note of prompts that work well:
```bash
# Great for consistent styling
"Create a button component that follows our kid-friendly design system"

# Great for debugging
"Debug this error: [error message]. Here's the code: [code]. Here's what I expected: [expectation]"
```

### Tip 2: Use Claude for Documentation
```bash
"Generate JSDoc comments for this component"
"Create API documentation for these endpoints"
"Write a README section explaining this feature"
```

### Tip 3: Rapid Prototyping
```bash
"Create a quick mockup of the leaderboard UI"
"Generate sample data for testing the dashboard"
"Build a minimal version of the quiz interface"
```

---

## 🎊 Success Metrics

Track your productivity improvements:
- ⏱️ Time saved on boilerplate code
- 🐛 Faster debugging with AI assistance
- 📚 Learning new patterns from Claude's suggestions
- 🚀 Shipping features faster

---

**Remember:** Claude is your pair programming partner! The more specific and clear you are, the better results you'll get. Happy coding! 🎉
