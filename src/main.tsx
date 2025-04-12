import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";

// Configure AWS Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_k7jn7YIM1",
      userPoolClientId: "vui08qd6e5t6ej78qv5q017kh",
      identityPoolId: "us-east-2:90f58578-edff-43f1-8e93-75ec2a7521b2",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
  API: {
    REST: {
      userApi: {
        endpoint: 'https://bxs214os7e.execute-api.us-east-2.amazonaws.com/dev',
        region: 'us-east-2',
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
