import ErrorPage from "../ErrorPage";

export function Fallback({ error }: { error: string }) {
  console.log(error)
  return (
    <ErrorPage errorStatus={error.toString()} />
  );
}