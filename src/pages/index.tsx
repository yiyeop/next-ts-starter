import { css } from '@emotion/react';
import Button from 'components/Button';
import tw, { styled } from 'twin.macro';

const Container = styled.div(({ hasBackground }: { hasBackground: boolean }) => [
  tw`flex flex-col items-center justify-center h-screen`,
  hasBackground && tw`bg-gradient-to-b from-white to-blue-300`,
]);

const Text = styled.div`
  font-size: 20px;
  ${tw`font-bold`}
`;

const App = () => (
  <Container hasBackground>
    <Text>Nextjs Tailwind Emotions Typescript Starter</Text>
    <div
      tw='mt-5'
      css={css`
        &:hover {
          transform: scale(1.2);
          transition: all 200ms ease-in;
        }
      `}
    >
      <Button variant='primary'>Button</Button>
    </div>
  </Container>
);

export default App;
