import React, { useState } from 'react';
import { Globe, Check, Link2, RotateCcw, X, Info } from 'lucide-react';

interface NetlifyDomainBannerProps {
  subdomain: string;
  onUpdateSubdomain: (newSubdomain: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const NetlifyDomainBanner: React.FC<NetlifyDomainBannerProps> = ({
  subdomain,
  onUpdateSubdomain,
  isOpen,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState(subdomain);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = inputValue.trim().replace(/^https?:\/\//, '').replace(/\.netlify\.app.*$/, '');
    onUpdateSubdomain(cleaned || '[НЕТЛИФАЙ]');
  };

  const handleReset = () => {
    setInputValue('glittery-kataifi-2e78a4');
    onUpdateSubdomain('glittery-kataifi-2e78a4');
  };

  const currentFullUrl = `https://${subdomain || '[НЕТЛИФАЙ]'}.netlify.app`;

  const copyUrl = () => {
    navigator.clipboard.writeText(currentFullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-stone-900 text-stone-100 border-b border-stone-800 px-4 py-3.5 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-stone-300">
          <Globe className="w-4 h-4 text-amber-400 shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-semibold text-white">Netlify домэйн тохиргоо:</span>
            <span className="text-stone-400 text-xs">
              Бүх бүтээлүүд болон таны зургийн холбоосод автоматаар шинэчлэгдэнэ.
            </span>
          </div>
        </div>

        <form onSubmit={handleSave} className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="flex items-center bg-stone-800 border border-stone-700 rounded-lg overflow-hidden text-xs">
            <span className="px-2.5 py-1.5 text-stone-400 bg-stone-800/80 border-r border-stone-700 select-none">
              https://
            </span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="дэд-нэр"
              className="px-2.5 py-1.5 bg-transparent text-white focus:outline-none w-32 sm:w-40 font-mono"
            />
            <span className="px-2.5 py-1.5 text-stone-400 bg-stone-800/80 border-l border-stone-700 select-none">
              .netlify.app
            </span>
          </div>

          <button
            type="submit"
            className="px-3 py-1.5 text-xs font-medium text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Хадгалах
          </button>

          <button
            type="button"
            onClick={copyUrl}
            title="Холбоос хуулах"
            className="p-1.5 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Link2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={handleReset}
            title="Анхны төлөвт шилжүүлэх ([НЕТЛИФАЙ])"
            className="p-1.5 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Хаах"
            className="p-1.5 text-stone-400 hover:text-white ml-auto md:ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
