export const wizardSteps = [
  {
    id: 'personal',
    title: 'Personal Info',
    description: 'Tell us who you are before we create your profile.',
    fields: ['firstName', 'lastName', 'dateOfBirth'],
  },
  {
    id: 'account',
    title: 'Account Details',
    description: 'Secure your account with login credentials.',
    fields: ['email', 'password', 'confirmPassword'],
  },
  {
    id: 'review',
    title: 'Review & Submit',
    description: 'Confirm the captured payload before final submission.',
    fields: [],
  },
]
