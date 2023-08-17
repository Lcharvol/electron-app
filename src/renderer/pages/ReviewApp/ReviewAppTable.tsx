import React from 'react';
import moment from 'moment';
import { mdiCircleSlice8 } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Table, Box, Chip } from '@/UI';
import colors from '@/colors';

const columns = [
  {
    header: 'InstanceId',
    id: 'id',
    field: 'id',
  },
  {
    header: 'Name',
    id: 'label',
    field: 'label',
  },
  {
    header: 'Launch Time',
    id: 'launchTime',
    field: ({ launchTime }) => moment(launchTime).format('DD/MM/YY hh:mm'),
  },
  {
    header: '',
    id: 'ci',
    field: ({ pipelineUrl }) => (
      <Icon path={mdiCircleSlice8} size={1} color={colors.state.success} />
    ),
  },
  {
    id: 'status',
    field: ({ state }) => <Chip kind="error" label={state} />,
  },
];

const data = [
  {
    id: 'i-060bf770a64f267a7',
    label: 'gitlab_prod-13793',
    state: 'stopped',
    launchTime: '2023-04-26T13:35:27.000Z',
    pipelineUrl:
      'https://gitlab.factory.fonciamillenium.net/FonciaStark/localstack/-/pipelines/922333',
  },
  {
    id: 'i-058a952001003eb7',
    label: 'gitlab_use-new-repair-to-1br8dz',
    state: 'stopped',
    launchTime: '2023-04-28T17:35:42.000Z',
    pipelineUrl:
      'https://gitlab.factory.fonciamillenium.net/FonciaStark/localstack/-/pipelines/926522',
  },
];

function ReviewAppTable() {
  return (
    <Box sx={{ p: 2 }}>
      <Table columns={columns} data={data} />
    </Box>
  );
}

export default ReviewAppTable;
