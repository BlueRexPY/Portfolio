import { routesPaths } from '@app/configs/router';
import { useDarkMode } from '@shared/lib/darkMode';
import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';
import styled from 'styled-components';

const BigLogo = styled.img`
  width: 50%;
  padding-bottom: var(--spacing-xl);
`;

const StackList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: var(--spacing-xs);

  & > img {
    border-radius: var(--border-radius-xs);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

const Home = () => {
  const { t } = useTranslation();
  const [isDarkMode] = useDarkMode();

  const bannerSrc = useMemo(() => (isDarkMode ? '/bannerDark.png' : '/bannerLight.png'), [isDarkMode]);

  return (
    <Container>
      <BigLogo src={bannerSrc} alt={t('homePage.title')} />
      <StackList>sad</StackList>
    </Container>
  );
};

export const Route = createFileRoute(routesPaths.home)({
  component: () => <Home />,
});
