export const keyExtractor = <T>(item: T) => {
  if (
    typeof item === 'object' &&
    item !== null &&
    'id' in item &&
    typeof (item as any).id === 'number'
  ) {
    return (item as any).id.toString();
  }

  return Math.random().toString(36).substr(2, 9);
};

export const getItem = <T>(d: T[], index: number): T => d[index];

export const getItemCount = <T>(data: T[]) => data.length;
