function ProgressBar({ currentStep, totalSteps }) {
  const percent = (currentStep / totalSteps) * 100

  return (
    <div className="progress-panel" aria-label="Registration progress">
      <div className="progress-copy">
        <span>Step {currentStep} of {totalSteps}</span>
        <strong>{Math.round(percent)}% Complete</strong>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
