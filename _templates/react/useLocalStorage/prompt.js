module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'changePath',
        message:
          'Would you like to specify custom path or use current directory? [y/N]',
      },
    ];

    return inquirer.prompt(questions).then((answer) => {
      const { changePath } = answer;

      if (changePath.toLowerCase().startsWith('y')) {
        return inquirer
          .prompt({
            type: 'input',
            name: 'path',
            message: 'Specify path:',
          })
          .then((newAnswer) => ({ ...answer, ...newAnswer }));
      }

      return { ...answer, path: process.cwd() };
    });
  },
};
