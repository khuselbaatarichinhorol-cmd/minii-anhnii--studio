import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { CreatorProfile } from '../types';

interface ContactSectionProps {
  profile: CreatorProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const subject = encodeURIComponent(`Холбоо барих: ${name || 'Веб зочин'}`);
    const body = encodeURIComponent(
      `Нэр: ${name}\nИ-мэйл: ${senderEmail}\n\nЗурвас:\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                <span>Холбоос</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>И-мэйл харилцаа</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display mb-3">
                Холбоо барих
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Төслүүд, санал хүсэлт болон шинэ санаануудын талаар надтай чөлөөтэй холбогдож ярилцаарай.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-stone-500 font-medium">Албан ёсны и-мэйл хаяг</div>
                  <div className="text-sm font-semibold text-stone-900 truncate font-mono">
                    {profile.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Хууллаа!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>И-мэйл хуулах</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors shadow-2xs whitespace-nowrap"
                >
                  <span>Шууд бичих</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Note */}
            <div className="text-xs text-stone-500 space-y-1.5">
              <p>• «Малаа хашаандаа» тоглоомын санал хүсэлт илгээх боломжтой.</p>
              <p>• YouTube сувгийн бичлэгийн сэдэв санал болгож болно.</p>
            </div>
          </div>

          {/* Right Column: Contact form that prepares email */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMessage}
              className="p-7 sm:p-8 bg-stone-50/70 rounded-3xl border border-stone-200 space-y-5"
            >
              <h3 className="text-lg font-bold text-stone-900 font-display flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-600" />
                <span>Зурвас илгээх</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700">
                    Таны нэр
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Жишээ: Батбаяр"
                    className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-stone-700">
                    Таны и-мэйл хаяг
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="таны-хаяг@жишээ.com"
                    className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-700">
                  Зурвасын агуулга *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Санал хүсэлт, асуулт эсвэл хамтран ажиллах хүсэлтээ энд бичнэ үү..."
                  className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-y"
                />
              </div>

              {sentNotice && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Таны и-мэйл програмд зурвас нээгдлээ. Илгээх товчоо дарна уу!</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                <span>И-мэйлээр илгээх</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
