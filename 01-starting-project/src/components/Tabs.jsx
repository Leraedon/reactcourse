export default function Tabs({ children, buttons, ButtonsContainer = Section }) {
  return (
  <>
    <ButtonsContainer>
        {buttons}
    </ButtonsContainer>
    {children}
  </>
  );
}