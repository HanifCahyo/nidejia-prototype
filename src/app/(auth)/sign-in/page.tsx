// src/app/(auth)/sign-in/page.tsx
import { Suspense } from "react";
import SignInContent from "./sign-in-content";

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="px-6 py-24 lg:px-28">Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
}
