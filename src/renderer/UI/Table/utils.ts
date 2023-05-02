import { ColumnType, DataItem } from './types';

export const getHeaders = (columns: ColumnType[]) =>
  columns.map(({ header }) => header);

export const getRows = ({
  data,
  columns,
}: {
  data: DataItem[];
  columns: ColumnType[];
}) =>
  data.map((dataItem, index) => ({
    cells: columns.map((column) =>
      typeof column.field === 'function'
        ? column.field?.(dataItem)
        : dataItem[column.field]
    ),
    id: index,
  }));
