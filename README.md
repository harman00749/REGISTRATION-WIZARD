# Registration Wizard

Registration Wizard is a React + Vite onboarding form module. It demonstrates a segmented enterprise form flow with multi-step navigation, parent-level form state, real-time validation, schema validation, success handling, and polished user feedback.

## Tech Stack

- React
- Vite
- React Hook Form
- Zod
- @hookform/resolvers
- CSS

## Features

- Three-step registration wizard.
- Step 1: Personal Info with first name, last name, and date of birth.
- Step 2: Account Details with email, password, and confirm password.
- Step 3: Review & Submit summary screen.
- Back and Next navigation between steps.
- Form payload is preserved when moving forward and backward.
- Real-time validation using React Hook Form and Zod.
- Email validation checks for the `@` symbol.
- Password requires at least 8 characters.
- Confirm password must match password.
- Next button is disabled until the current step is valid.
- Show/Hide password toggle with eye icon.
- Dynamic progress indicator showing the current step.
- Submit action logs the finalized data object to the browser console.
- Success UI appears after submission.
- Clean file structure with pages, steps, components, and schema separated from `App.jsx`.
- `Prompts.md` documents AI planning and debugging sessions.

## Project Structure

```text
src/
  App.jsx
  main.jsx
  App.css
  index.css
  components/
    FieldError.jsx
    PasswordField.jsx
    ProgressBar.jsx
  features/
    registration/
      RegistrationWizard.jsx
      wizardSteps.js
      steps/
        PersonalInfoStep.jsx
        AccountDetailsStep.jsx
        ReviewSubmitStep.jsx
  schemas/
    registrationSchema.js
```

## How To Run

```bash
npm install
npm run dev
```

On Windows PowerShell:

```bash
npm.cmd install
npm.cmd run dev
```

Open the local Vite URL:

```text
http://localhost:5173/
```

## Build

```bash
npm run build
```

## Deployment

This project is ready for Vercel or Netlify.

Recommended Vercel settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Demo Checklist

- Type an invalid email and show the real-time error.
- Type a short password and show the password length error.
- Type mismatched confirm password and show the match error.
- Show the Next button disabled until local fields are valid.
- Fill Step 1, go to Step 2, click Back, and show Step 1 data is retained.
- Go to the review step and show the completed summary.
- Submit and show the success UI.
- Open the browser console and show the logged payload object.
