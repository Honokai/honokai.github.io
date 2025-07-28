import "../../src/css/application-window.css";

export default function ApplicationWindow({
  children,
  applicationName,
}: {
  applicationName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="window">
      <div className="window-header">
        <span>{applicationName}</span>
        <div>
          <button>&times;</button>
        </div>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
}
