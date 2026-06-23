# Registration Wizard AI Prompt Log

## Assignment Summary

Build a multi-step React onboarding wizard with segmented form views, parent-level payload state, real-time validation, progress feedback, password visibility toggles, submit success UI, and enterprise form architecture using React Hook Form plus Zod.

## AI Debugging / Pair-Programming Sessions

### Session 1: Requirement Breakdown

Prompt:

```text
Explain the Registration Wizard sprint requirements and identify the React architecture needed for a multi-step form.
```

Outcome:

- Identified three form views: Personal Info, Account Details, and Review & Submit.
- Confirmed that form data must persist when navigating between steps.
- Confirmed that success UI and `console.log()` payload output are required after submission.

### Session 2: Enterprise Form Architecture

Prompt:

```text
How should I structure a React multi-step wizard using react-hook-form and zod without keeping everything inside App.jsx?
```

Outcome:

- Kept `App.jsx` small and delegated wizard behavior to `RegistrationWizard.jsx`.
- Created separate step components for each form view.
- Created a reusable `ProgressBar`, `FieldError`, and `PasswordField`.
- Moved validation rules into `schemas/registrationSchema.js`.

### Session 3: Validation and UX

Prompt:

```text
Help me implement real-time validation, disabled Next buttons, password show/hide toggles, and a review screen for the wizard.
```

Outcome:

- Configured React Hook Form with `mode: 'onChange'`.
- Added Zod validation for required fields, email `@`, password length, and confirm password matching.
- Computed current-step validity so Next is disabled until local fields are valid.
- Added review summary and success state after final submit.
