import { ErrorInfo } from "../assests/info/ErrorInfo";
import { Link } from "react-router-dom";

export const ErrorMessage = ({ error, resetErrorBoundary }: any) => {
  const { status } = error.response;

  const RenderError: any = ErrorInfo.filter(
    (value) => value.status === status
  ).map((value) => {
    return (
      <div key={value.status}>
        <h1> {value.status}</h1>
        <h2> {value.description}</h2>
        <Link to="/" onClick={resetErrorBoundary}>
          Ok
        </Link>
      </div>
    );
  });

  return RenderError;
};
