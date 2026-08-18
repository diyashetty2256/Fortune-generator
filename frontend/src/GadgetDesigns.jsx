import React from 'react';
import { motion } from 'framer-motion';

// ─── Shared Header Banner ────────────────────────────────────────────────────
const HeaderBanner = ({ quote, title = "AUTHORCRAFT" }) => (
  <div className="header-cream-banner">
    <div style={{
      position: 'absolute', top: '50%', left: '5%', right: '5%',
      height: '1px', backgroundColor: '#290527ff', opacity: 0.5, zIndex: 1
    }} />
    <div className="oval-badge" style={{ zIndex: 2 }}>
      <span className="oval-star-left">⭐</span>
      <p className="font-kalam" style={{ color: '#ffffff', fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '4px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
        {quote}
      </p>
      <h2 className="font-rounded" style={{ color: '#ffffff', fontSize: '1.35rem', letterSpacing: '0.12em', fontWeight: 800 }}>
        {title}
      </h2>
      <span className="oval-star-right">⭐</span>
    </div>
  </div>
);

// ─── Shared info row helper ───────────────────────────────────────────────────
const InfoRow = ({ label, value, labelColor = '#92400e', valueColor = '#1c1917', size = '1.05rem' }) => (
  <div style={{ marginBottom: '10px' }}>
    <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: labelColor, marginBottom: '2px' }}>
      {label}
    </div>
    <div style={{ fontSize: size, fontWeight: 700, color: valueColor }}>
      {value}
    </div>
  </div>
);

// ─── Shared light panel wrapper ───────────────────────────────────────────────
const DarkPanel = ({ children }) => (
  <div style={{
    backgroundColor: '#fdf6f0', width: '100%', borderRadius: '16px',
    padding: '5rem 2rem 3rem 2rem', display: 'flex', justifyContent: 'center',
    alignItems: 'center'
  }}>
    {children}
  </div>
);

const cardEntrance = {
  initial: { scale: 0.88, opacity: 0, y: 24 },
  animate: { scale: 1, opacity: 1, y: 0 },
  transition: { duration: 0.6, type: 'spring', bounce: 0.3 }
};

// ═══════════════════════════════════════════════════════════════════════════════
// 1. CLASSIC FLORAL INVITATION
// ═══════════════════════════════════════════════════════════════════════════════
export const EtchAJamDesign = ({ fortuneData }) => {
  const { date = '22 August 2026', time = '9:00 am – 12 pm', venue = 'NC 13' } = fortuneData || {};
  return (
    <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HeaderBanner quote="Somewhere between the pages, your fortune is waiting at…" />
      <DarkPanel>
        <motion.div {...cardEntrance} style={{
          width: '380px',
          background: 'linear-gradient(160deg, #fffbf5 0%, #fdf6ec 100%)',
          borderRadius: '16px',
          padding: '0',
          boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
          border: '1px solid #e8d5b7',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Top floral strip */}
          <div style={{ background: 'linear-gradient(90deg, #d97706, #f59e0b, #d97706)', height: '8px' }} />

          {/* Corner florals */}
          <div style={{ position: 'absolute', top: '14px', left: '14px', fontSize: '1.6rem', opacity: 0.35 }}>🌸</div>
          <div style={{ position: 'absolute', top: '14px', right: '14px', fontSize: '1.6rem', opacity: 0.35 }}>🌸</div>
          <div style={{ position: 'absolute', bottom: '14px', left: '14px', fontSize: '1.4rem', opacity: 0.3 }}>🌿</div>
          <div style={{ position: 'absolute', bottom: '14px', right: '14px', fontSize: '1.4rem', opacity: 0.3 }}>🌿</div>

          <div style={{ padding: '28px 36px 32px' }}>
            {/* Title */}
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#b45309', fontWeight: 600, marginBottom: '6px' }}>
                You are cordially invited to -
                AUTHORCRAFT GENERAL MEET
              </div>
              <div style={{ fontSize: '0.7rem', color: '#d97706', letterSpacing: '0.1em' }}>✦ ✦ ✦</div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid #e8d5b7', marginBottom: '20px' }} />

            <InfoRow label="Date" value={date} />
            <InfoRow label="Time" value={time} />
            <InfoRow label="Venue" value={venue} />

            <div style={{ borderTop: '1px solid #e8d5b7', marginTop: '20px', paddingTop: '14px', textAlign: 'center' }}>
              <span className="font-kalam" style={{ color: '#b45309', fontSize: '1rem', fontStyle: 'italic' }}>
                See you there!
              </span>
            </div>
          </div>

          {/* Bottom floral strip */}
          <div style={{ background: 'linear-gradient(90deg, #d97706, #f59e0b, #d97706)', height: '8px' }} />
        </motion.div>
      </DarkPanel>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2. MODERN MINIMAL CARD
// ═══════════════════════════════════════════════════════════════════════════════
export const TamagotchiDesign = ({ fortuneData }) => {
  const { date = '22 August 2026', time = '9:00 am – 12:00 pm', venue = 'NC 13' } = fortuneData || {};
  return (
    <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HeaderBanner quote="A character is waiting to meet you at…" />
      <DarkPanel>
        <motion.div {...cardEntrance} style={{
          width: '380px',
          background: '#ffffff',
          borderRadius: '4px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Bold left accent bar */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: 'linear-gradient(180deg, #0f172a 0%, #334155 100%)' }} />

          <div style={{ padding: '36px 36px 36px 48px' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#64748b', marginBottom: '8px' }}>
              Event Invitation
            </div>
            <div className="font-rounded" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: '24px' }}>
              AUTHORCRAFT
              ~ GENERAL MEET ~
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[['DATE', date], ['TIME', time], ['VENUE', venue]].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#94a3b8', fontWeight: 700, paddingTop: '4px', minWidth: '42px' }}>{label}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>{val}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ flex: 1, height: '2px', background: '#0f172a' }} />
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#64748b' }}>WE'LL SEE YOU THERE</span>
              <div style={{ flex: 1, height: '2px', background: '#0f172a' }} />
            </div>
          </div>
        </motion.div>
      </DarkPanel>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 3. ART DECO GOLD INVITATION
// ═══════════════════════════════════════════════════════════════════════════════
export const GameBoyDesign = ({ fortuneData }) => {
  const { date = '22 August 2026', time = '9:00 am – 12:00 pm', venue = 'NC 13' } = fortuneData || {};
  return (
    <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HeaderBanner quote="Your next great idea is waiting for you at…" />
      <DarkPanel>
        <motion.div {...cardEntrance} style={{
          width: '380px',
          background: 'linear-gradient(145deg, #1a1209 0%, #2d1f0a 100%)',
          borderRadius: '12px',
          padding: '4px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        }}>
          {/* Gold border frame */}
          <div style={{
            background: 'linear-gradient(145deg, #ca1111ff, #472107ff, #201905ff, #d97706)',
            borderRadius: '10px',
            padding: '3px',
          }}>
            <div style={{
              background: 'linear-gradient(145deg, #1a1209 0%, #271808 100%)',
              borderRadius: '8px',
              padding: '32px 34px',
              textAlign: 'center'
            }}>
              {/* Deco top ornament */}
              <div style={{ color: '#f59e0b', fontSize: '1rem', letterSpacing: '0.3em', marginBottom: '6px' }}>◆ ✦ ◆</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#fbbf24', marginBottom: '4px' }}>
                Authorcraft - Express Thyself
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#a16207', marginBottom: '18px' }}>
                Presents
              </div>

              <div className="font-rounded" style={{ fontSize: '2rem', fontWeight: 800, color: '#fef3c7', letterSpacing: '0.08em', textShadow: '0 0 20px rgba(245,158,11,0.4)', marginBottom: '18px' }}>
                GENERAL MEET
              </div>

              <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)', margin: '0 auto 20px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                {[['Date', date], ['Time', time], ['Venue', venue]].map(([label, val]) => (
                  <div key={label}>
                    <span style={{ fontSize: '0.65rem', color: '#a16207', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{label} — </span>
                    <span style={{ fontSize: '0.9rem', color: '#fef3c7', fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>

              <div style={{ color: '#f59e0b', fontSize: '1rem', letterSpacing: '0.3em' }}>◆ ✦ ◆</div>
            </div>
          </div>
        </motion.div>
      </DarkPanel>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 4. WATERCOLOUR WASH CARD
// ═══════════════════════════════════════════════════════════════════════════════
export const WalkmanDesign = ({ fortuneData }) => {
  const { date = '22 August 2026', time = '9:00 am – 12:00 pm', venue = 'NC 13' } = fortuneData || {};
  return (
    <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HeaderBanner quote="Stories worth telling are waiting for you at…" />
      <DarkPanel>
        <motion.div {...cardEntrance} style={{
          width: '380px',
          background: 'linear-gradient(135deg, #440d50ff 0%, #4b0404ff 50%, #07162bff 100%)',
          borderRadius: '20px',
          padding: '36px 36px 32px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          border: '1px solid rgba(219,112,147,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Watercolour blob accents */}
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,207,232,0.6) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-30px', left: '-20px', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,181,253,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '10px', fontSize: '1.3rem' }}>
              📖 
            </div>

            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#be185d', fontWeight: 600 }}>
                With warm invitation to our - GENERAL MEET
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.6)', borderRadius: '12px', padding: '20px', backdropFilter: 'blur(4px)', border: '1px solid rgba(219,112,147,0.15)' }}>
              <InfoRow label="Date" value={date} labelColor="#9d174d" valueColor="#1e1b4b" />
              <InfoRow label="Time" value={time} labelColor="#9d174d" valueColor="#1e1b4b" />
              <InfoRow label="Venue" value={venue} labelColor="#9d174d" valueColor="#1e1b4b" />
            </div>

            <div style={{ textAlign: 'center', marginTop: '18px' }}>
              <span className="font-kalam" style={{ color: '#be185d', fontSize: '1.15rem', fontStyle: 'italic' }}>
                — Authorcraft awaits you 
              </span>
            </div>
          </div>
        </motion.div>
      </DarkPanel>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 5. BOTANICAL / NATURE CARD
// ═══════════════════════════════════════════════════════════════════════════════
export const PolaroidDesign = ({ fortuneData }) => {
  const { date = '22 August 2026', time = '9:00 am – 12:00 pm', venue = 'NC 13' } = fortuneData || {};
  return (
    <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HeaderBanner quote="Picture yourself in a world of words at…" />
      <DarkPanel>
        <motion.div {...cardEntrance} style={{
          width: '380px',
          background: 'linear-gradient(160deg, #f0fdf4 0%, #dcfce7 60%, #f0fdf4 100%)',
          borderRadius: '16px',
          padding: '0',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          border: '1px solid #bbf7d0',
          overflow: 'hidden'
        }}>
          {/* Leaf header band */}
          <div style={{
            background: 'linear-gradient(90deg, #b37210ff 0%, #8d2910ff 50%, #166534 100%)',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '1.2rem' }}></span>
            <span className="font-rounded" style={{ color: '#ffffffff', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.2em' }}>AUTHORCRAFT</span>
            <span style={{ fontSize: '1.2rem' }}></span>
          </div>

          <div style={{ padding: '28px 34px 30px' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#121312ff', fontWeight: 600, marginBottom: '16px', textAlign: 'center' }}>
              Invites you to join us at -
              AUTHORCRAFT GENERAL MEET
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[['📅 Date', date], ['🕐 Time', time], ['📍 Venue', venue]].map(([label, val], i) => (
                <div key={label} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  padding: '10px 0',
                  borderBottom: i < 2 ? '1px dashed #bbf7d0' : 'none'
                }}>
                  <div style={{ fontSize: '0.7rem', color: '#166534', fontWeight: 700, minWidth: '62px', paddingTop: '2px' }}>{label}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#14532d' }}>{val}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: '#4ade80', letterSpacing: '0.15em' }}>✦ ✦ ✦ ✦ ✦</div>
              <span className="font-kalam" style={{ color: '#166534', fontSize: '1rem', fontStyle: 'italic' }}>
                Beyond the Pages 📖
              </span>
            </div>
          </div>
        </motion.div>
      </DarkPanel>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 6. ELEGANT SCRIPT / RIBBON CARD
// ═══════════════════════════════════════════════════════════════════════════════
export const TypewriterDesign = ({ fortuneData }) => {
  const { date = '22 August 2026', time = '9:00 am – 12:00 pm', venue = 'NC 13' } = fortuneData || {};
  return (
    <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HeaderBanner quote="A story worth remembering is about to begin at…" />
      <DarkPanel>
        <motion.div {...cardEntrance} style={{
          width: '380px',
          background: 'linear-gradient(160deg, #fffbf5 0%, #fef9f0 100%)',
          borderRadius: '12px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          border: '1px solid #e8d5b7',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Ribbon banner top */}
          <div style={{ position: 'relative', background: 'linear-gradient(90deg, #a70d0dff 0%, #470303ff 100%)', padding: '18px 28px', textAlign: 'center' }}>
            {/* Ribbon tail left */}
            <div style={{ position: 'absolute', left: 0, bottom: '-10px', width: 0, height: 0, borderLeft: '20px solid transparent', borderTop: '10px solid #0f0f0fff' }} />
            {/* Ribbon tail right */}
            <div style={{ position: 'absolute', right: 0, bottom: '-10px', width: 0, height: 0, borderRight: '20px solid transparent', borderTop: '10px solid #151516ff' }} />
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ede9fe', marginBottom: '4px' }}>
              A special time at
            </div>
            <div className="font-rounded" style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              AUTHORCRAFT GENERAL MEET
            </div>
          </div>

          <div style={{ padding: '30px 34px 28px' }}>
            <div className="font-kalam" style={{ textAlign: 'center', color: '#1f1e20ff', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px' }}>
              "You've been chosen…"
            </div>

            {/* Ticket-style perforated border box */}
            <div style={{
              border: '2px dashed #c4b5fd',
              borderRadius: '10px',
              padding: '18px 20px',
              background: 'rgba(237,233,254,0.3)'
            }}>
              <InfoRow label="Date" value={date} labelColor="#6d28d9" valueColor="#2e1065" />
              <InfoRow label="Time" value={time} labelColor="#6d28d9" valueColor="#2e1065" />
              <InfoRow label="Venue" value={venue} labelColor="#6d28d9" valueColor="#2e1065" />
            </div>

            <div style={{ textAlign: 'center', marginTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <div style={{ flex: 1, height: '1px', background: '#c4b5fd' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#141314ff' }}>SEE YOU THERE</span>
              <div style={{ flex: 1, height: '1px', background: '#c4b5fd' }} />
            </div>
          </div>
        </motion.div>
      </DarkPanel>
    </div>
  );
};
