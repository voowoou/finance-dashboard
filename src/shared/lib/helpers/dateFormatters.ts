const dateFormatterLong = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const dateFormatterShort = new Intl.DateTimeFormat('en-GB');

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
});

// ISO date to 'DD/MM/YYYY' | 'DD month YYYY'
export const formatDate = (
  isoString: string,
  format: 'short' | 'long'
): string => {
  const date = new Date(isoString);
  return format === 'short'
    ? dateFormatterShort.format(date)
    : dateFormatterLong.format(date);
};

// ISO date to 'HH:MM'
export const formatTime = (isoString: string): string => {
  const date = new Date(isoString);
  return timeFormatter.format(date);
};
