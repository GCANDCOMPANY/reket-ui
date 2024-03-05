import React from 'react';
import { StyledButton } from 'src/components/button';
import { useDialog } from 'src/hooks';
import { AngleLayout } from 'src/components';

function App() {
  const dialog = useDialog();

  return (
    <div className="App">
      <AngleLayout SidebarHeader={<div />}>
        <StyledButton
          onClick={() => {
            dialog.notify({
              type: 'success',
              title: 'dd',
            });
          }}
        >
          dd
        </StyledButton>
      </AngleLayout>
    </div>
  );
}

export default App;
