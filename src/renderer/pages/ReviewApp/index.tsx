import React from 'react';

import { PageHeader, Card, Tabs } from '@/UI';
import ReviewAppTable from './ReviewAppTable';

function Projects() {
  return (
    <>
      <PageHeader title="My Review Apps" />
      <Card variant="noPadding">
        <Tabs
          items={[
            { label: 'All', component: () => <ReviewAppTable /> },
            { label: 'Running', component: () => <ReviewAppTable /> },
            { label: 'Desactivated', component: () => <ReviewAppTable /> },
          ]}
        />
      </Card>
    </>
  );
}

export default Projects;
