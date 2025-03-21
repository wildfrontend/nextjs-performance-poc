export enum Operator {
  ge = 'ge',
  le = 'le',
  default = 'in',
}

export enum QueryKey {
  status = 'status',
  parent_id = 'parent_id',
  size = 'size',
  activated = 'activated',
}

export enum SizeUnit {
  MiB = 1024 ** 2,
  GiB = 1024 ** 3,
  TiB = 1024 ** 4,
  PiB = 1024 ** 5,
}

export type ActivatedField = {
  key: QueryKey.activated;
  value: string;
};

export type ParentIdField = {
  key: QueryKey.parent_id;
  value: string[];
};

export type SizeField = {
  key: QueryKey.size;
  value: {
    operator: Operator;
    size: number;
  };
};

export type StatusField = {
  key: QueryKey.status;
  value: string[];
};

export type QueryField = any;

export type QueryFormValues = {
  filters: QueryField[];
};

export type ResultValues = Record<string, { operator: string; values: any[] }>;
