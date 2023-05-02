import { ReactNode } from "react"

export type ColumnType = { field: string | ((props: any) => ReactNode) header: string; id: string };

export type DataItem = { [key: string]: string };
