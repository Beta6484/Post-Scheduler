export const DateConfig = {
  locale: 'pt-br',
  format: 'DD/MM/YYYY',
  closeOnSelect: true,
  allowMultiSelect: false,
  min: new Date().toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year:  'numeric'
  })
};

export const TimeConfig = {
  locale: 'pt-br',
  format: 'HH:mm',
  closeOnSelect: true,
  allowMultiSelect: false,
  showTwentyFourHours: true,
  disableKeypress: true
};
