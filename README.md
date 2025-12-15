# VirtualSTEM LMS - Learning Management System

A comprehensive learning management system for Virtual STEM School (VSS), Pakistan Math Contest (PMC), and Regional Math Clubs (RMC).

## 🚀 Features Implemented (Phase 1 MVP)

### Student Portal
- ✅ Kid-friendly dashboard with welcome message and program tags
- ✅ Weekly activity summary with streak tracking
- ✅ Power metrics (Resilience, Comeback Power, Hard Question Power)
- ✅ Continue where you left off functionality
- ✅ Upcoming contests, quizzes, and assignments
- ✅ Practice mode with topic selection
- ✅ Question-by-question practice interface
- ✅ Multiple question types (MCQ, Numeric)
- ✅ Real-time feedback and explanations
- ✅ Progress tracking

### Authentication
- ✅ Role-based login (Student, Teacher, School)
- ✅ Protected routes
- ✅ Session management

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS (kid-friendly design)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Context API

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd virtualstem-lms
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

## 🔐 Demo Credentials

### Student Account
- Email: `student@demo.com`
- Password: `password`

### Teacher Account
- Email: `teacher@demo.com`
- Password: `password`

### School Account
- Email: `school@demo.com`
- Password: `password`

## 📁 Project Structure

```
virtualstem-lms/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── shared/
│   │   │   └── Navbar.js
│   │   ├── student/
│   │   └── auth/
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── auth/
│   │   │   └── Login.js
│   │   └── student/
│   │       ├── StudentDashboard.js
│   │       ├── Practice.js
│   │       └── PracticeSet.js
│   ├── services/
│   ├── utils/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔄 Git Workflow with Claude Integration

### 1. Initial Repository Setup

```bash
# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/yourusername/virtualstem-lms.git

# Create main branch
git branch -M main

# First commit
git add .
git commit -m "feat: initial project setup with student portal MVP"
git push -u origin main
```

### 2. Feature Branch Workflow

```bash
# Create a new feature branch
git checkout -b feature/quiz-interface

# Work on your feature with Claude
# (Claude helps you write code)

# Stage and commit changes
git add .
git commit -m "feat: add quiz interface with timer and navigation"

# Push to GitHub
git push origin feature/quiz-interface

# Create Pull Request on GitHub
```

### 3. Commit Message Convention

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```bash
git commit -m "feat: add leaderboard component"
git commit -m "fix: resolve authentication redirect issue"
git commit -m "docs: update README with API documentation"
```

## 🤖 Claude Integration Guide

### Option 1: Claude Code CLI (Recommended)

**Installation:**
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Navigate to project
cd virtualstem-lms

# Start Claude Code
claude-code
```

**Usage:**
```
# Example commands in Claude Code terminal:
> "Create a Leaderboard component for the student portal"
> "Add unit tests for the AuthContext"
> "Fix the routing issue in App.js"
> "Refactor the Practice component to use custom hooks"
```

### Option 2: VS Code Extensions

**Continue.dev Extension:**
1. Install "Continue" extension in VS Code
2. Configure with Anthropic API key
3. Use `Cmd/Ctrl + L` to chat with Claude
4. Select code and ask Claude to refactor/improve it

**Cline Extension (formerly Claude Dev):**
1. Install "Cline" from VS Code marketplace
2. Add Anthropic API key
3. Use sidebar to interact with Claude

### Option 3: Web-based Development

Use claude.ai directly:
1. Share code snippets or files
2. Ask for specific improvements
3. Copy generated code back to your project

## 🔧 Development Workflow with Claude

### Recommended Process:

1. **Plan Features**
```bash
# In Claude Code or Claude.ai
"I need to build a contest mode with timer. What's the best approach?"
```

2. **Generate Components**
```bash
"Create a ContestMode component that shows questions with a countdown timer"
```

3. **Debug Issues**
```bash
"I'm getting this error: [paste error]. How do I fix it?"
```

4. **Optimize Code**
```bash
"Refactor this component to improve performance and readability"
```

5. **Write Tests**
```bash
"Generate unit tests for the AuthContext using Jest"
```

## 🚀 Next Steps (Phase 2)

- [ ] Contest mode with timer
- [ ] Leaderboards (RMC, PMC, VSS)
- [ ] Quiz interface for Grades 6-7
- [ ] Teacher dashboard with class management
- [ ] Question bank management
- [ ] Results and analytics
- [ ] RMC invigilator portal
- [ ] VSS semester features

## 📝 API Integration (Coming Soon)

Currently using mock data. Will be replaced with:
- REST API backend (Node.js/Express or Django)
- PostgreSQL database
- JWT authentication
- Real-time updates with WebSockets

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build
npx serve -s build
```

## 📄 License

Private project for SundarSTEM / VirtualSTEM

## 👥 Contributors

- Development Team
- Designed for students in Grades 5-7

## 📞 Support

For issues or questions, please contact the development team.

---

Built with ❤️ for Pakistani students pursuing excellence in Math and Computer Science
