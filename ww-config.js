export default {
  options: {
    sizable: true,
    autoByContent: false,
    hyperlink: false
  },
  editor: {
    label: { en: 'Neon Switch', fr: 'Interrupteur Néon' },
    bubble: true,
    infoTag: (content) => ({
      color: 'var(--ww-color-emerald-600)',
      backgroundColor: 'var(--ww-color-emerald-100)',
      text: content.checked ? 'ON' : 'OFF'
    })
  },
  triggerEvents: [
    { name: 'change', label: { en: 'On Change', fr: 'Au changement' } },
    { name: 'focus', label: { en: 'On Focus', fr: 'Au focus' } },
    { name: 'blur', label: { en: 'On Blur', fr: 'À la perte du focus' } }
  ],
  properties: {
    checked: {
      section: 'settings',
      label: { en: 'Checked', fr: 'Activé' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true
    },
    disabled: {
      section: 'settings',
      label: { en: 'Disabled', fr: 'Désactivé' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true
    },
    size: {
      section: 'settings',
      label: { en: 'Size', fr: 'Taille' },
      type: 'TextRadioGroup',
      options: {
        choices: [
          { value: 'sm', title: { en: 'Small', fr: 'Petite' } },
          { value: 'md', title: { en: 'Medium', fr: 'Moyenne' }, default: true },
          { value: 'lg', title: { en: 'Large', fr: 'Grande' } }
        ]
      },
      defaultValue: 'md'
    },
    onColor: {
      section: 'style',
      label: { en: 'On color', fr: 'Couleur ON' },
      type: 'Color',
      defaultValue: '#34d399',
      states: True,
      responsive: false
    },
    offColor: {
      section: 'style',
      label: { en: 'Off color', fr: 'Couleur OFF' },
      type: 'Color',
      defaultValue: 'rgba(255,255,255,.14)',
      states: True
    },
    knobColor: {
      section: 'style',
      label: { en: 'Knob color', fr: 'Couleur du bouton' },
      type: 'Color',
      defaultValue: '#ffffff',
      states: True
    },
    glow: {
      section: 'style',
      label: { en: 'Glow', fr: 'Halo' },
      type: 'OnOff',
      defaultValue: true,
      states: True
    },
    glowIntensity: {
      section: 'style',
      label: { en: 'Glow intensity', fr: 'Intensité du halo' },
      type: 'Number',
      options: { min: 0, max: 1, step: 0.05 },
      defaultValue: 0.35,
      states: True
    },
    label: {
      section: 'settings',
      label: { en: 'Label', fr: 'Label' },
      type: 'Text',
      multiLang: true,
      bindable: true,
      defaultValue: ''
    }
  }
};
