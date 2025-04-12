import { LoginForm } from '@/components/login/login-form';

const LoginPage: React.FC = () => {

  return (
    <div className="container max-w-[2040px] flex justify-center items-center min-h-[100dvh] bg-sky-50 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px]">
      <LoginForm className="w-full max-w-[800px]"/>
    </div>
  );
};

export default LoginPage;
