import React from "react";
import useClipboard from "../customHook/useClipboard";

export default function ClipBoard() {
  const { copyToClipboard, copied } = useClipboard();

  return (
    <div>
      <h2>Clipboard Example</h2>
      <p>
        Click to copy: <strong>Mustafa is learning React 🚀</strong>
      </p>
      <button onClick={() => copyToClipboard("Mustafa is learning React 🚀")}>
        Copy Text
      </button>
      {copied && <p style={{ color: "green" }}>Copied to clipboard!</p>}
    </div>
  );
}
