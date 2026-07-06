import AuthLayout from "../components/auth/AuthLayout";
import AuthIllustration from "../components/auth/AuthIllustration";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Reset Your Password"
      subtitle="Forgot your password? No worries. Enter your email address and we'll send you a secure password reset link so you can get back to gaming."
      illustration={<AuthIllustration />}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}