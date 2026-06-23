import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import ProgressBar from '../../components/ProgressBar'
import {
  defaultRegistrationValues,
  registrationSchema,
} from '../../schemas/registrationSchema'
import AccountDetailsStep from './steps/AccountDetailsStep'
import PersonalInfoStep from './steps/PersonalInfoStep'
import ReviewSubmitStep from './steps/ReviewSubmitStep'
import { wizardSteps } from './wizardSteps'

function RegistrationWizard() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    trigger,
  } = useForm({
    defaultValues: defaultRegistrationValues,
    mode: 'onChange',
    resolver: zodResolver(registrationSchema),
  })

  const watchedValues = useWatch({ control })
  const activeStep = wizardSteps[activeStepIndex]
  const isFirstStep = activeStepIndex === 0
  const isLastStep = activeStepIndex === wizardSteps.length - 1

  const isCurrentStepValid = useMemo(() => {
    if (activeStep.fields.length === 0) {
      return true
    }

    return activeStep.fields.every((fieldName) => {
      const value = watchedValues[fieldName]
      return String(value ?? '').trim() !== '' && !errors[fieldName]
    })
  }, [activeStep.fields, errors, watchedValues])

  async function goNext() {
    const isValid = await trigger(activeStep.fields)
    if (!isValid) {
      return
    }

    setActiveStepIndex((currentIndex) =>
      Math.min(currentIndex + 1, wizardSteps.length - 1),
    )
  }

  function goBack() {
    setIsSubmitted(false)
    setActiveStepIndex((currentIndex) => Math.max(currentIndex - 1, 0))
  }

  function onSubmit(finalData) {
    console.log('Registration payload:', finalData)
    setIsSubmitted(true)
  }

  return (
    <main className="wizard-page">
      <section className="wizard-shell">
        <aside className="wizard-hero">
          <p className="eyebrow">Registration Wizard</p>
          <h1>Build your profile in three focused steps.</h1>
          <p>
            This onboarding flow keeps state in one parent form controller,
            validates in real time, and preserves values while users move back
            and forth.
          </p>
        </aside>

        <section className="wizard-card" aria-labelledby="wizard-title">
          <ProgressBar
            currentStep={activeStepIndex + 1}
            totalSteps={wizardSteps.length}
          />

          <div className="step-heading">
            <p className="eyebrow">{activeStep.id}</p>
            <h2 id="wizard-title">{activeStep.title}</h2>
            <p>{activeStep.description}</p>
          </div>

          {isSubmitted ? (
            <div className="success-panel" role="status">
              <strong>Registration submitted successfully.</strong>
              <span>Open the browser console to review the finalized payload.</span>
            </div>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep.id === 'personal' ? (
              <PersonalInfoStep errors={errors} register={register} />
            ) : null}

            {activeStep.id === 'account' ? (
              <AccountDetailsStep errors={errors} register={register} />
            ) : null}

            {activeStep.id === 'review' ? (
              <ReviewSubmitStep values={getValues()} />
            ) : null}

            <div className="wizard-actions">
              <button
                className="secondary-button"
                type="button"
                onClick={goBack}
                disabled={isFirstStep}
              >
                Back
              </button>

              {isLastStep ? (
                <button type="submit" disabled={isSubmitted}>
                  {isSubmitted ? 'Submitted' : 'Submit'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!isCurrentStepValid}
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </section>
      </section>
    </main>
  )
}

export default RegistrationWizard
