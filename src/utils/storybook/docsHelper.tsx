interface IntroOptions {
  usage?: boolean;
  demo?: boolean;
  notes?: string;
}

export const generateDocsIntro = (component: string, options?: IntroOptions) => {
  const { usage = true, demo = true, notes = '' } = options || {};

  return `
  ${usage ? `### 1. How to use\nGet started with importing the module.\n\`\`\`tsx\nimport { ${component} } from '@reket/ui';\`\`\`` : ''}
  ${demo ? `### 2. See Demo` : ''}
  ${notes ? `${notes}` : ''}`;
};

export default { generateDocsIntro };
