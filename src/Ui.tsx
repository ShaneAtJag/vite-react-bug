import React from 'react';

type ExampleRootProps = {
  children: React.ReactNode;
};

export function ExampleRoot({ children }: ExampleRootProps) {
  let hasExampleChild = false;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === ExampleChild) {
      hasExampleChild = true;
    }
  });

  if (!hasExampleChild) {
    throw new Error('<ExampleChild/> is required');
  }

  return <div>{children}</div>;
}

export function ExampleChild() {
  return <div>Example Child</div>;
}
