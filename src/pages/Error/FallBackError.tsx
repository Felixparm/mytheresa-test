import ErrorPage from "./ErrorPage";

export function Fallback({ error }: { error: string }) {
  return (
    <ErrorPage errorStatus={error.toString()} />
  );
}