import { useState } from 'react';

export default function useClipboard(text) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);

    setCopied(success);
    setTimeout(() => setCopied(false), 2000);
    return success;
  };

  return { copied, copyToClipboard };
}
