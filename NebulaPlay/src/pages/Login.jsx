import AuthLayout from "../components/auth/AuthLayout";
import AuthIllustration from "../components/auth/AuthIllustration";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your cloud gaming journey with NebulaPlay. Access your library, cloud saves, achievements and premium gaming experience."
      illustration={<AuthIllustration />}
    >
      <LoginForm />
    </AuthLayout>
  );
}