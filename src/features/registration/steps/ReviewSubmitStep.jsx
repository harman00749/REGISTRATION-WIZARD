function ReviewRow({ label, value }) {
  return (
    <div className="review-row">
      <span>{label}</span>
      <strong>{value || 'Not provided'}</strong>
    </div>
  )
}

function ReviewSubmitStep({ values }) {
  return (
    <div className="review-card">
      <ReviewRow label="First Name" value={values.firstName} />
      <ReviewRow label="Last Name" value={values.lastName} />
      <ReviewRow label="Date of Birth" value={values.dateOfBirth} />
      <ReviewRow label="Email" value={values.email} />
      <ReviewRow label="Password" value="********" />
    </div>
  )
}

export default ReviewSubmitStep
