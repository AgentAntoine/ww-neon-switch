<template>
  <div
    class="ww-neon-switch"
    :class="[sizeClass, { on: isOn, disabled: content.disabled }]"
    role="switch"
    :aria-checked="String(isOn)"
    :aria-disabled="String(content.disabled)"
    tabindex="0"
    @click="onToggle"
    @keydown.space.prevent="onToggle"
    @keydown.enter.prevent="onToggle"
    @focus="emitFocus"
    @blur="emitBlur"
  >
    <div class="track"></div>
    <div class="knob"></div>
    <div v-if="content.glow" class="halo" :style="{ opacity: content.glow ? content.glowIntensity : 0 }"></div>
    <span v-if="content.label" class="label">{{ localizedLabel }}</span>
  </div>
</template>

<script>
export default {
  name: 'WwNeonSwitch',
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: false },
    wwEditorState: { type: Object, required: false },
    wwFrontState: { type: Object, required: false },
    wwElementState: { type: Object, required: false }
  },
  data() {
    return {
      internalOn: this.content.checked ?? false
    };
  },
  computed: {
    isEditor() { return !!this.wwEditorState; },
    isOn: {
      get() { return this.isEditor ? !!this.content.checked : this.internalOn; },
      set(v) {
        if (this.isEditor) {
          this.$emit('update:content', { ...this.content, checked: !!v });
        } else {
          this.internalOn = !!v;
        }
      }
    },
    sizeClass() {
      const s = this.content.size || 'md';
      return `size-${s}`;
    },
    localizedLabel() {
      const l = this.content.label;
      if (!l) return '';
      if (typeof l === 'string') return l;
      const lang = this.wwFrontState?.lang || 'en';
      return l[lang] || l.en || Object.values(l)[0] || '';
    }
  },
  watch: {
    'content.checked'(val) {
      if (!this.isEditor) this.internalOn = !!val;
    }
  },
  methods: {
    onToggle() {
      if (this.content.disabled) return;
      this.isOn = !this.isOn;
      this.$emit('trigger-event', { name: 'change', payload: { checked: this.isOn } });
    },
    emitFocus() { this.$emit('trigger-event', { name: 'focus', payload: {} }); },
    emitBlur() { this.$emit('trigger-event', { name: 'blur', payload: {} }); }
  }
};
</script>

<style scoped>
.ww-neon-switch {
  --on: v-bind('content.onColor || "#34d399"');
  --off: v-bind('content.offColor || "rgba(255,255,255,.14)"');
  --knob: v-bind('content.knobColor || "#fff"');
  --glow: v-bind('content.glowIntensity ?? 0.35');
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  cursor: pointer;
  user-select: none;
}
.ww-neon-switch .track {
  position: relative;
  width: 64px; height: 36px;
  border-radius: 999px;
  background: var(--off);
  border: 1px solid rgba(255,255,255,.12);
  transition: background .25s ease, border-color .25s ease;
}
.ww-neon-switch .knob {
  position: absolute;
  left: 4px; top: 4px;
  width: 28px; height: 28px;
  border-radius: 999px;
  background: var(--knob);
  box-shadow: 0 1px 1px rgba(0,0,0,.4), 0 8px 24px rgba(0,0,0,.35);
  transition: transform .28s cubic-bezier(.22,.61,.36,1), box-shadow .28s ease;
}
.ww-neon-switch .halo {
  position: absolute;
  inset: -10%;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(12px);
  opacity: 0;
  background: radial-gradient(120% 120% at 30% 30%, color-mix(in srgb, var(--on) 55%, transparent), transparent 60%);
}
.ww-neon-switch.on .track { background: color-mix(in srgb, var(--on) 28%, transparent); border-color: color-mix(in srgb, var(--on) 50%, rgba(255,255,255,.16)); }
.ww-neon-switch.on .knob  { transform: translateX(28px); box-shadow: 0 1px 1px rgba(0,0,0,.4), 0 10px 32px color-mix(in srgb, var(--on) 40%, rgba(0,0,0,.4)); }
.ww-neon-switch.on .halo  { opacity: var(--glow); }
.ww-neon-switch.disabled { opacity: .6; pointer-events: none; }

.size-sm .track { width: 48px; height: 28px; }
.size-sm .knob  { width: 22px; height: 22px; left: 3px; top: 3px; }
.size-sm.on .knob { transform: translateX(20px); }

.size-lg .track { width: 84px; height: 46px; }
.size-lg .knob  { width: 36px; height: 36px; left: 5px; top: 5px; }
.size-lg.on .knob { transform: translateX(38px); }

.label { font-size: .875rem; opacity: .8; }
</style>
