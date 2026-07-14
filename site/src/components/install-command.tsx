"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

const command = "npx skills add DNM03/ui-forge";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyCommand() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
  }

  return (
    <div className="install-command" aria-label="Install UI Forge skill">
      <span className="install-command-prompt" aria-hidden="true">$</span>
      <code>{command}</code>
      <button type="button" onClick={copyCommand} aria-label="Copy install command">
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      </button>
    </div>
  );
}
