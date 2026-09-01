// Web Audio API Sound Synthesizer for luxury camera shutter & chimes
class SoundEffects {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleSound(state?: boolean): boolean {
    if (typeof state === 'boolean') {
      this.enabled = state;
    } else {
      this.enabled = !this.enabled;
    }
    return this.enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  // Realistic Hasselblad / Leica camera shutter acoustic simulation
  public playShutterSound() {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // 1. First mechanical click
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(800, now);
      osc1.frequency.exponentialRampToValueAtTime(120, now + 0.04);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.045);

      // 2. Mechanical noise burst (mirror flip)
      const bufferSize = ctx.sampleRate * 0.05;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.2, now + 0.02);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now + 0.02);
      noise.stop(now + 0.07);

      // 3. Second shutter curtain close click
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(600, now + 0.07);
      osc2.frequency.exponentialRampToValueAtTime(80, now + 0.12);
      gain2.gain.setValueAtTime(0.25, now + 0.07);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.07);
      osc2.stop(now + 0.14);
    } catch {
      // Audio not supported or blocked
    }
  }

  // Soft luxury crystal chime for interactions and achievements
  public playChime(success = false) {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const freqs = success ? [523.25, 659.25, 783.99, 1046.5] : [587.33, 880];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.45);
      });
    } catch {
      // Audio not supported or blocked
    }
  }
}

export const soundManager = new SoundEffects();
