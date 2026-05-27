export default function Footer() {
  return (
    <footer className="border-t border-border-col py-8" role="contentinfo">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-center text-sm text-muted font-mono">
          Built by{" "}
          <span className="text-primary font-medium">LeonScriptJS</span> |{" "}
          <span>{new Date().getFullYear()}</span> | Designed with intentional
          precision
        </p>
      </div>
    </footer>
  );
}
