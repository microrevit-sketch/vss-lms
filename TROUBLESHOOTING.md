# VirtualSTEM LMS - Troubleshooting Guide

## 🔧 Common Issues and Solutions

---

## Installation Issues

### Issue: `npm install` fails

**Symptoms:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solutions:**

1. **Clear npm cache:**
```bash
npm cache clean --force
```

2. **Delete and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

3. **Use legacy peer deps:**
```bash
npm install --legacy-peer-deps
```

4. **Check Node version:**
```bash
node --version  # Should be v16 or higher
```
If too old, download latest from https://nodejs.org

---

### Issue: `npm start` doesn't work

**Symptoms:**
```
command not found: npm
```

**Solution:**
Node.js is not installed or not in PATH.
1. Download Node.js from https://nodejs.org
2. Install it
3. Restart your terminal
4. Try again

---

## Runtime Errors

### Issue: "Cannot find module 'react-router-dom'"

**Symptoms:**
App crashes on startup with module not found error.

**Solution:**
```bash
npm install react-router-dom
```

If that doesn't work:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: Blank white screen

**Symptoms:**
- App loads but shows nothing
- Console has errors

**Solutions:**

1. **Check console for errors:**
   - Open browser DevTools (F12)
   - Look at Console tab
   - Screenshot error and ask Claude

2. **Clear browser cache:**
   - Chrome: Ctrl+Shift+Delete
   - Select "Cached images and files"
   - Clear data

3. **Restart dev server:**
```bash
# Stop server (Ctrl+C)
npm start
```

---

### Issue: "Failed to compile"

**Symptoms:**
```
Failed to compile.
./src/App.js
Syntax error: Unexpected token
```

**Solution:**
There's a syntax error in your code.
1. Read the error message carefully
2. Go to the file mentioned (e.g., App.js)
3. Go to the line number mentioned
4. Check for missing brackets, semicolons, quotes
5. Ask Claude: "I'm getting this error: [paste error]"

---

## Styling Issues

### Issue: Tailwind classes not working

**Symptoms:**
- Components have no styling
- Everything looks plain

**Solutions:**

1. **Check tailwind.config.js exists:**
```bash
ls tailwind.config.js
```

2. **Check App.css has Tailwind imports:**
Should have at the top:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. **Restart dev server:**
```bash
# Stop (Ctrl+C)
npm start
```

4. **Reinstall Tailwind:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

---

### Issue: Page looks broken on mobile

**Symptoms:**
- Elements overflow
- Text too small
- Buttons hard to click

**Solutions:**

1. **Check viewport meta tag in public/index.html:**
Should have:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

2. **Test in Chrome DevTools:**
   - Press F12
   - Click device toolbar icon
   - Select different devices
   - See which breakpoint fails

3. **Ask Claude:**
```
"This component looks broken on mobile: [component name]
Can you make it responsive?"
```

---

## Authentication Issues

### Issue: Can't login with demo credentials

**Symptoms:**
- Enter email/password
- Click Login
- Nothing happens or error appears

**Solutions:**

1. **Check exact credentials:**
   - Email: `student@demo.com` (all lowercase)
   - Password: `password` (exactly as written)

2. **Check console for errors:**
   - F12 → Console tab
   - Look for red errors

3. **Check AuthContext is working:**
```bash
# Ask Claude:
"My login isn't working. Here's the error: [paste from console]"
```

---

### Issue: Logged in but redirected to login

**Symptoms:**
- Login succeeds
- Immediately redirected back to /login

**Solution:**
Check localStorage:
1. F12 → Application tab → Local Storage
2. Should see `user` and `token` entries
3. If missing, authentication isn't saving

Ask Claude:
```
"Authentication state isn't persisting. Help me debug AuthContext.js"
```

---

### Issue: Wrong role dashboard

**Symptoms:**
- Login as student
- End up on teacher dashboard

**Solution:**
Check role mapping in AuthContext.js and App.js
```bash
# Ask Claude:
"I'm being redirected to wrong dashboard. Check my routing logic."
```

---

## Navigation Issues

### Issue: Clicking links does nothing

**Symptoms:**
- Click navigation link
- Page doesn't change

**Solutions:**

1. **Check if using `<Link>` from react-router-dom:**
Should be:
```jsx
import { Link } from 'react-router-dom';
<Link to="/student/practice">Practice</Link>
```
NOT:
```jsx
<a href="/student/practice">Practice</a>
```

2. **Check routes are defined in App.js:**
```bash
# Ask Claude:
"My navigation to [page] isn't working. Check my routes."
```

---

### Issue: 404 page not found

**Symptoms:**
- Click link
- Get blank page or "Not found"

**Solution:**
Route not defined in App.js.
1. Open src/App.js
2. Check if route exists in `<Routes>` section
3. Add missing route:
```jsx
<Route path="/your/path" element={<YourComponent />} />
```

---

## State Management Issues

### Issue: Data not updating

**Symptoms:**
- Make changes
- Data doesn't reflect
- Page needs refresh

**Solution:**
State not being updated properly.

Ask Claude:
```
"My [component] state isn't updating when I [action].
Here's the component code: [paste code]"
```

---

### Issue: "Too many re-renders"

**Symptoms:**
```
Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
```

**Solution:**
You have an infinite loop, usually in useEffect.

Common causes:
```jsx
// BAD - infinite loop:
useEffect(() => {
  setState(newValue);
}); // Missing dependency array!

// GOOD:
useEffect(() => {
  setState(newValue);
}, []); // Empty array = run once
```

Ask Claude:
```
"I'm getting 'too many re-renders' error in [component].
Here's my useEffect code: [paste code]"
```

---

## Git Issues

### Issue: "fatal: not a git repository"

**Symptoms:**
```
fatal: not a git repository (or any of the parent directories): .git
```

**Solution:**
```bash
git init
```

---

### Issue: "Permission denied (publickey)"

**Symptoms:**
Can't push to GitHub.

**Solution:**
Set up SSH key:
1. https://docs.github.com/en/authentication/connecting-to-github-with-ssh
2. Generate SSH key
3. Add to GitHub
4. Try again

Or use HTTPS instead:
```bash
git remote set-url origin https://github.com/username/repo.git
```

---

### Issue: Merge conflicts

**Symptoms:**
```
CONFLICT (content): Merge conflict in src/App.js
```

**Solution:**

1. **Open the file mentioned:**
Look for:
```
<<<<<<< HEAD
Your changes
=======
Other changes
>>>>>>> branch-name
```

2. **Decide what to keep:**
   - Keep yours
   - Keep theirs
   - Keep both
   - Rewrite

3. **Remove conflict markers:**
Delete the `<<<<<<<`, `=======`, `>>>>>>>` lines

4. **Complete the merge:**
```bash
git add .
git commit -m "fix: resolve merge conflict"
```

Ask Claude:
```
"I have a merge conflict in [file]. Here's the conflict: [paste]
How should I resolve it?"
```

---

## Claude Integration Issues

### Issue: Claude Code not working

**Symptoms:**
```
command not found: claude-code
```

**Solution:**
```bash
# Reinstall:
npm install -g @anthropic-ai/claude-code

# Or with pip:
pip install claude-code

# Verify:
claude-code --version
```

---

### Issue: "Invalid API key"

**Symptoms:**
```
Error: Invalid API key
```

**Solutions:**

1. **Check API key format:**
Should start with `sk-ant-`

2. **Regenerate key:**
   - Go to https://console.anthropic.com
   - Navigate to API Keys
   - Delete old key
   - Create new key
   - Update in Claude Code: `claude-code auth`

3. **Check you have credits:**
   - Go to console.anthropic.com
   - Check Usage tab
   - Add credits if needed

---

### Issue: Continue extension not responding

**Solutions:**

1. **Reload VS Code:**
   - Cmd/Ctrl + Shift + P
   - Type "Reload Window"
   - Press Enter

2. **Check extension enabled:**
   - Extensions sidebar
   - Search "Continue"
   - Should show "Enabled"

3. **Update extension:**
   - Click extension
   - Check for updates
   - Update if available

4. **Reconfigure API key:**
   - Continue settings
   - Re-enter API key
   - Save

---

## Performance Issues

### Issue: App is slow

**Symptoms:**
- Pages take long to load
- Animations lag
- Typing has delay

**Solutions:**

1. **Check browser DevTools:**
   - F12 → Performance tab
   - Record while using app
   - Look for bottlenecks

2. **Close other apps:**
Free up RAM and CPU

3. **Use production build:**
```bash
npm run build
npx serve -s build
```
Production is much faster than development

4. **Check console for warnings:**
May reveal performance issues

Ask Claude:
```
"My app is slow. Here's what I see in Performance tab: [describe]
How can I optimize?"
```

---

### Issue: Hot reload not working

**Symptoms:**
- Make changes to code
- Page doesn't update
- Need to manually refresh

**Solutions:**

1. **Check file is saved:**
Ctrl+S / Cmd+S

2. **Restart dev server:**
```bash
# Stop (Ctrl+C)
npm start
```

3. **Check for syntax errors:**
Look at terminal output

4. **Clear browser cache:**
Ctrl+Shift+R (hard refresh)

---

## Deployment Issues

### Issue: Vercel build fails

**Symptoms:**
"Build failed" on Vercel dashboard

**Solutions:**

1. **Check build logs:**
Click on failed deployment → View logs

2. **Test build locally:**
```bash
npm run build
```
Fix any errors that appear

3. **Check environment variables:**
If using any, add them in Vercel settings

4. **Check Node version:**
Vercel settings → Node.js Version
Should match your local version

---

### Issue: Deployed app shows blank page

**Symptoms:**
Local works, but deployed site is blank

**Solutions:**

1. **Check browser console on deployed site:**
F12 → Console
Look for errors

2. **Check build output directory:**
Should be `build` for Create React App

3. **Check environment variables:**
May need to add in Vercel

4. **Clear Vercel cache:**
Deployment settings → Clear cache → Redeploy

---

## Browser Compatibility

### Issue: App doesn't work in Safari/Firefox/Edge

**Solutions:**

1. **Test in Chrome first:**
Chrome has best React DevTools

2. **Check console for errors:**
Each browser has different DevTools

3. **Update browser:**
Make sure you're on latest version

4. **Check for browser-specific CSS:**
Some Tailwind classes may behave differently

---

## General Debugging Tips

### 1. Check Console First
Always:
1. Press F12
2. Look at Console tab
3. Look for red errors
4. Screenshot errors

### 2. Use React DevTools
Install React DevTools browser extension:
- See component tree
- Check props
- Check state
- Track re-renders

### 3. Use console.log()
Add to your code:
```jsx
console.log('Current state:', state);
console.log('Props received:', props);
```

### 4. Ask Claude Effectively
Good question format:
```
Problem: [Brief description]
Expected: [What should happen]
Actual: [What actually happens]
Error: [Paste error message]
Code: [Relevant code snippet]
```

### 5. Isolate the Problem
- Comment out code until it works
- Then uncomment piece by piece
- Find exactly what causes the issue

### 6. Check Documentation
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- React Router: https://reactrouter.com

### 7. Search GitHub Issues
Someone probably had the same problem:
- https://github.com/facebook/react/issues
- Include error message in search

---

## 🆘 Still Stuck?

### Use Claude!
```bash
# In Claude Code or Continue:
"I'm stuck with this problem:
[Describe problem]

Here's the error:
[Paste error]

Here's my code:
[Paste relevant code]

What should I do?"
```

### Provide Context
The more info you give Claude, the better:
- What you're trying to do
- What you've tried
- Full error message
- Relevant code
- What you expected vs what happened

### Take a Break
Sometimes stepping away helps you see the solution!

---

## 📋 Pre-Debug Checklist

Before asking for help, check:
- [ ] Saved all files (Ctrl+S / Cmd+S)
- [ ] Restarted dev server
- [ ] Checked browser console
- [ ] Cleared browser cache
- [ ] Updated dependencies
- [ ] Checked spelling/typos
- [ ] Read error message carefully
- [ ] Googled the error
- [ ] Checked this troubleshooting guide

---

## 🎯 Quick Fixes

**90% of issues are solved by:**

1. **Restart the dev server**
```bash
# Ctrl+C to stop
npm start
```

2. **Clear cache and reinstall**
```bash
rm -rf node_modules package-lock.json
npm install
```

3. **Hard refresh browser**
```bash
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

4. **Check file paths are correct**
Especially import statements

5. **Ask Claude for help**
With detailed error information

---

**Remember**: Every developer encounters these issues. Debugging is a normal part of development. Stay calm, check systematically, and ask for help when needed! 🚀
