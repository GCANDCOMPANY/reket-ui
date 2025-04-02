export const setIntroText = (component: string) => {
  return `
  ### 1. How to use
  Get started with importing the module.
  \`\`\`tsx
  import { ${component} } from '@reket/ui';
  \`\`\`
  ### 2. See Demo
  `;
};

export default { setIntroText };
