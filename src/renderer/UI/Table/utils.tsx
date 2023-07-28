import { ColumnType, DataItem } from './types';
import Typography from '../Typography';

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
      typeof column.field === 'function' ? (
        column.field?.(dataItem)
      ) : (
        <Typography variant="caption">{dataItem[column.field]}</Typography>
      )
    ),
    id: index,
  }));
