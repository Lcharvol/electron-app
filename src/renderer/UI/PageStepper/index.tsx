import React, { useState, ReactNode, useMemo } from 'react';
import { Container, Content } from './styles';

type PagePropsType = {
  goToNextStep: () => void;
  goToStep: (stepNumber: number) => void;
  goToPreviousStep: () => void;
};
type PageType = {
  component: (props: PagePropsType) => ReactNode;
  pageNumber: number;
};
interface PageStepperProps {
  direction?: 'column' | 'row';
  pages: PageType[];
}

const getPageFromStep = ({ step, pages }) =>
  pages.find(({ pageNumber }) => pageNumber === step);

const PageStepper = ({
  direction = 'row',
  pages,
  layout,
}: PageStepperProps) => {
  const [actualStep, setActualStep] = useState<number>(0);
  const goToNextStep = () => setActualStep(actualStep + 1);
  const goToPreviousStep = () => setActualStep(actualStep - 1);
  const goToStep = (stepNumber: number) => setActualStep(stepNumber);
  const previousPage = getPageFromStep({ step: actualStep - 1, pages });
  const actualPage = getPageFromStep({ step: actualStep, pages });
  const nextPage = getPageFromStep({ step: actualStep + 1, pages });

  return (
    <Container>
      {[previousPage, actualPage, nextPage].map((page) => (
        <Content>
          {layout(
            page?.component?.({
              goToNextStep,
              goToStep,
              goToPreviousStep,
            })
          ) || <div>Page not found</div>}
        </Content>
      ))}
    </Container>
  );
};

export default PageStepper;
