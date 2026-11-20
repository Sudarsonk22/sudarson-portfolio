import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { EASE } from './fx';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!profile.formKey) {
      setStatus('error');
      setError('Contact form is not set up yet. Please email me directly.');
      return;
    }

    data.append('access_key', profile.formKey);
    data.append('subject', `New message from your portfolio — ${data.get('name')}`);
    data.append('from_name', 'Sudarson Portfolio');

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
        setError(json.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again.');
    }
  }

  const input =
    'w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-bone placeholder:text-smoke outline-none transition focus:border-crimson-2 focus:bg-black/60';

  return (
    <motion.div
      id="contact-form"
      className="relative mx-auto mt-14 w-full max-w-xl scroll-mt-24 text-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="glass rounded-2xl p-6 sm:p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Contact me</p>
        <h3 className="mt-2 font-display text-4xl leading-none tracking-wide text-bone">Send a message</h3>

        {status === 'sent' ? (
          <div className="mt-6">
            <p className="text-base text-bone">Thanks! Your message has been sent. I'll get back to you soon.</p>
            <button type="button" onClick={() => setStatus('idle')} className="mt-4 text-sm font-semibold text-crimson-2 hover:underline">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className={input} />
              <input name="email" type="email" required placeholder="Your email" className={input} />
            </div>
            <textarea name="message" required rows={5} placeholder="Your message" className={`${input} resize-none`} />

            {status === 'error' && <p className="text-sm text-crimson-2">{error}</p>}

            <button
              type="submit"
              disabled={status === 'sending'}
              data-cursor="play"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-crimson text-sm font-bold tracking-[0.12em] text-white shadow-[0_0_40px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2 disabled:opacity-60"
            >
              {status === 'sending' ? 'SENDING…' : '▶ SEND MESSAGE'}
            </button>
            <p className="text-center text-xs text-smoke">
              or email me at{' '}
              <a href={`mailto:${profile.email}`} className="text-mist hover:text-bone">
                {profile.email}
              </a>
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
}