import FieldError from '../../../components/FieldError'
import PasswordField from '../../../components/PasswordField'

function AccountDetailsStep({ errors, register }) {
  return (
    <div className="step-grid">
      <label className="field-group full-row">
        <span>Email</span>
        <input type="email" placeholder="you@example.com" {...register('email')} />
        <FieldError message={errors.email?.message} />
      </label>

      <PasswordField
        label="Password"
        name="password"
        register={register}
        error={errors.password}
      />

      <PasswordField
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
      />
    </div>
  )
}

export default AccountDetailsStep
