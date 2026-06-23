import FieldError from '../../../components/FieldError'

function PersonalInfoStep({ errors, register }) {
  return (
    <div className="step-grid">
      <label className="field-group">
        <span>First Name</span>
        <input type="text" placeholder="Aarav" {...register('firstName')} />
        <FieldError message={errors.firstName?.message} />
      </label>

      <label className="field-group">
        <span>Last Name</span>
        <input type="text" placeholder="Sharma" {...register('lastName')} />
        <FieldError message={errors.lastName?.message} />
      </label>

      <label className="field-group full-row">
        <span>Date of Birth</span>
        <input type="date" {...register('dateOfBirth')} />
        <FieldError message={errors.dateOfBirth?.message} />
      </label>
    </div>
  )
}

export default PersonalInfoStep
