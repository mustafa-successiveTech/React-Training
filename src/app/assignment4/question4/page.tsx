import PasswordValidation from "@/app/components/passwordValidation";

export default function Question4() {
  return (
    <div className="parent">
      <h3>
        4. Build a registration form with two password fields. Implement
        controlled components for both password inputs. Add a validation rule to
        ensure that the two passwords match before allowing the form submission.
      </h3>
      <PasswordValidation />
    </div>
  );
}
