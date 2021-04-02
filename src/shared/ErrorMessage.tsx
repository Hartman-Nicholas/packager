import { ErrorInfo } from "./ErrorInfo";

export const ErrorMessage: React.FC<{ status: number }> = ({ status }) => {
  const RenderError: any = ErrorInfo.filter(
    (value) => value.status === status
  ).map((value) => {
    return (
      <div key={value.status}>
        <h1> {value.status}</h1>
        <h2> {value.description}</h2>
      </div>
    );
  });

  return RenderError;
};
