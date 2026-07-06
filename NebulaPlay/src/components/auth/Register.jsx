import AuthLayout from "../components/auth/AuthLayout";
import AuthIllustration from "../components/auth/AuthIllustration";
import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join NebulaPlay and unlock instant access to AAA cloud gaming, cross-platform saves, achievements, and exclusive member benefits."
      illustration={<AuthIllustration />}
    >
      <RegisterForm />
    </AuthLayout>
  );
}